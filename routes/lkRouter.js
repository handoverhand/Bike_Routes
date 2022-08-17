const lkRouter = require('express').Router();
const Lk = require('../views/Lk');

lkRouter.get('/', (req, res) => {
  res.renderComponent(Lk);
});
module.exports = lkRouter;
