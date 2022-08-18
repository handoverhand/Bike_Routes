const lkRouter = require('express').Router();
const Lk = require('../views/Lk');
const { Bikeroute } = require('../db/models');

lkRouter.get('/', (req, res) => {
  const {rider} = req.session;
  res.renderComponent(Lk, {rider});
});

lkRouter.post('/coord', async (req, res) => {
  console.log(req.body);
  const { rider } = req.session;
  await Bikeroute.create({
    title: 'testTitle',
    location: 'testLocation',
    riderLoginBR: 'John Doe',
    length: 100,
    origLat: req.body.coord.from[0],
    origLng: req.body.coord.from[1],
    destLat: req.body.coord.to[0],
    destLng: req.body.coord.to[1],
  });
  res.json({ addedCoord: true });
});

module.exports = lkRouter;
