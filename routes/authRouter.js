const authRouter = require('express').Router();
const bcrypt = require('bcrypt');
const AuthorizationForm = require('../views/Authorization.jsx');
const { Rider } = require('../db/models');

authRouter.get('/log', (req, res) => {
  res.renderComponent(AuthorizationForm);
});

authRouter.post('/log', async (req, res) => {
  try {
    const user = await Rider.findOne({ where: { login: req.body.login } });
    res.json({ error: null, user})
  } catch (error) {
    res.json({ error: error.message });
  }
});

module.exports = authRouter;
