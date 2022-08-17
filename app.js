require('@babel/register');

const express = require('express');

const sequelize = require('sequelize');
const {Rider, Feedback, Bikeroute} = require('./db/models');

const app = express();

const PORT = process.env.PORT ?? 3000;

const config = require('./config/config');

config(app);

async function find() {

  const riders = await Rider.findAll({
    raw: true
  })

  const bikeRoutes = await Bikeroute.findAll({
    raw: true
  })

  const feedback = await Feedback.findAll({
    raw: true
  })

  console.log(riders, bikeRoutes, feedback);
}

find();

app.listen(PORT, async () => {
  try {
    console.log(`Server started ${PORT}`);
    // await sequelize.authenticate();
  } catch (error) {
    console.log('oooops', error);
  }
});