const bikeRoutesRouter = require('express').Router();
const Bikeroutes = require('../views/Bikeroutes');

bikeRoutesRouter.get('/', (req, res) => {
  res.renderComponent(Bikeroutes);
});

module.exports = bikeRoutesRouter;
