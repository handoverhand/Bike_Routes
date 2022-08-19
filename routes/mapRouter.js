const express = require('express');

const router = express.Router();

const { Bikeroute } = require('../db/models');

const InfoRoute = require('../views/InfoRoute');

router.get('/', (req, res) => {
  res.renderComponent(InfoRoute);
});

router.get('/info', async (req, res) => {
try {
const bikeroute = await Bikeroute.findAll({raw:true})
const coordinates = bikeroute
console.log('bikeroute', coordinates);
res.json(coordinates);
} catch (error) {
res.send(error.message);
}
});

module.exports = router;