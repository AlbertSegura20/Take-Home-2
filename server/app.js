const express = require('express');
const { Agent, Reviews, sequelize} = require('./model');
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/agents', async (req, res, next) => {
  const agents = await Agent.findAll();
  return res.json(agents);
});

app.get('/reviews', async (req, res, next) => {
  const id = await req.query.id;

  const reviews = await Reviews.findAll({
    where: {idAgent: id}
  });
  return res.json(reviews);
});

app.post("/newAgent", async(req, res) => {

  const {firstName, lastName, agentLicense, address, practiceAreas, aboutMe, photoUrl} = req.body;
  let json;

  try {

     await Agent.create({firstName: `${firstName}`, lastName: `${lastName}`, photoUrl: `${photoUrl}`, agentLicence: `${agentLicense}`,
     address: `${address}`, practiceAreas:`${practiceAreas}`, aboutMe:`${aboutMe}`});

    json = {
      message: true
    }

  } catch (error) {
    console.error(error);
    json = {
      message: true
    }
  }

  res.send(json);

})

app.post("/addReview", async(req, res) => {

  const {id, review} = req.body;
  let json;

  try {

     await Reviews.create({idAgent:id, review: review});
    json = {
      message: true
    }

  } catch (error) {
    json = {
      message: false

    }
    console.error(error);
  }

  res.send(json);

})

app.put("/updateAgent", async (req, res) => {

  const {id, firstName, lastName, agentLicense, address, practiceAreas, aboutMe, photoUrl} = req.body;
  let json;
  try {

    await  Agent.update({ firstName: firstName, lastName: lastName, photoUrl: photoUrl, agentLicence: agentLicense,
       address: address, practiceAreas:practiceAreas, aboutMe:aboutMe}, {
      where: {
        id: id
      }
    });

    json = {
      message: true
    }


  } catch (error) {
    json = {
      message: false
    }
    console.error(error);
  }

  res.send(json);



})

app.delete("/deleteAgent", async(req, res) => {
  const {id} = req.body;
  let json;
  try {

      await Agent.destroy({where: {id:id}});
    json = {
      message: true
    }

  } catch (error) {
    json = {
      message: false
    }
    console.error(error);
  }

  res.send(json);

})


module.exports = app;
