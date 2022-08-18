const bikeRoutesRouter = require('express').Router();
const Bikerouteslist = require('../views/Bikerouteslist');
const { Bikeroute } = require('../db/models');

bikeRoutesRouter.get('/', async (req, res) => {
  const allRoutes = await Bikeroute.findAll({
    raw: true,
  });
  res.renderComponent(Bikerouteslist, { allRoutes });
});

module.exports = bikeRoutesRouter;
