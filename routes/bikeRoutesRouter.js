const bikeRoutesRouter = require('express').Router();
const Bikerouteslist = require('../views/Bikerouteslist');
const { Bikeroute } = require('../db/models');

bikeRoutesRouter.get('/', async (req, res) => {
  const allRoutes = await Bikeroute.findAll({
    raw: true,
  });
  const {rider} = req.session;
  res.renderComponent(Bikerouteslist, { allRoutes, rider });
});

module.exports = bikeRoutesRouter;
