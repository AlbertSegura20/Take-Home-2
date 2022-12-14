const express = require('express');
const { Agent } = require('./model');
const app = express();
const {Sequelize} = require('sequelize');
const {response} = require("express");
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/agents', async (req, res, next) => {
  const agents = await Agent.findAll();
  return res.json(agents);
});

let photo = "";

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

})


module.exports = app;
