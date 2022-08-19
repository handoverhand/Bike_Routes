const express = require('express');

const router = express.Router();

const { Bikeroute } = require('../db/models');

const mainRoute = require('../views/MainRoute');

router.get('/', (req, res) => {
  res.renderComponent(mainRoute);
});

module.exports = router;