const bikeRoutesRouter = require('express').Router();
const Bikerouteslist = require('../views/Bikerouteslist');
const { Bikeroute } = require('../db/models');

const InfoRoute = require('../views/InfoRoute');

bikeRoutesRouter.get('/', async (req, res) => {
  const allRoutes = await Bikeroute.findAll({
    raw: true,
  });
  console.log('allRoutes', allRoutes)
  const { rider } = req.session;
  res.renderComponent(Bikerouteslist, { allRoutes, rider });
});

bikeRoutesRouter.get('/:id', async (req, res) => {
  const { id } = req.params;
  const [ bikerouteId ] = await Bikeroute.findAll({raw: true, where: { id } });
  res.renderComponent(InfoRoute, { id, bikerouteId});
});

bikeRoutesRouter.get('/:id/info', async (req, res) => {
  try {
    const { id } = req.params;
    const [ bikerouteId ] = await Bikeroute.findAll({raw: true, where: { id } });
    console.log('bikeroute', bikerouteId);
    res.json(bikerouteId);
  } catch (error) {
    res.send(error.message);
  }
});

module.exports = bikeRoutesRouter;
