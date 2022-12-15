const express = require('express');
const { Agent, Reviews, sequelize} = require('./model');
const app = express();
const {Sequelize} = require('sequelize');
// const {response} = require("express");
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/agents', async (req, res, next) => {
  const agents = await Agent.findAll();
  return res.json(agents);
});

app.get('/reviews', async (req, res, next) => {
  const id = await req.query.id;
  console.log("IDDDDDDDDDDDDDDDDDDDDDD", id);

  const reviews = await Reviews.findAll({
    where: {idAgent: id}
  });
  console.log(reviews);
  return res.json(reviews);
});

app.post("/newAgent", async(req, res) => {

  const {firstName, lastName, agentLicense, address, practiceAreas, aboutMe, photoUrl} = req.body;
  console.log(photoUrl);

  try {

    const result = await Agent.create({firstName: `${firstName}`, lastName: `${lastName}`, photoUrl: `${photoUrl}`, agentLicence: `${agentLicense}`,
     address: `${address}`, practiceAreas:`${practiceAreas}`, aboutMe:`${aboutMe}`});

    console.log(result);

  } catch (error) {
    console.error(error);
  }

  res.send("True")

})

app.post("/addReview", async(req, res) => {

  const {id, review} = req.body;

  try {

    const result = await Reviews.create({idAgent:id, review: review});

  } catch (error) {
    console.error(error);
  }

  res.send("True");

})

app.put("/updateAgent", async (req, res) => {

  const {id, firstName, lastName, agentLicense, address, practiceAreas, aboutMe, photoUrl} = req.body;
  console.log(req.body);
  let result = "";
  try {

     result = await  Agent.update({ firstName: firstName, lastName: lastName, photoUrl: photoUrl, agentLicence: agentLicense,
       address: address, practiceAreas:practiceAreas, aboutMe:aboutMe}, {
      where: {
        id: id
      }
    });

    console.log(result);

  } catch (error) {
    console.error(error);
  }

  if(Number(result)===1){
    res.send("Agent Updated")
  }else{
    res.send("Error")
  }


})

app.delete("/deleteAgent", async(req, res) => {
  const {id} = req.body;
  let result = "";
  try {

     result = await Agent.destroy({where: {id:id}});

  } catch (error) {
    console.error(error);
  }

  if(Number(result)===1){
    res.send("Agent Deleted")
  }else{
    res.send("Error")
  }


})


module.exports = app;
