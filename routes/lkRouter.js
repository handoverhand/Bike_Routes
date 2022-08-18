const lkRouter = require('express').Router();
const Lk = require('../views/Lk');

lkRouter.get('/', (req, res) => {
  const {rider} = req.session;
  res.renderComponent(Lk, {rider});
});
module.exports = lkRouter;
