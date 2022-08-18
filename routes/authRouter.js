const authRouter = require('express').Router();
const bcrypt = require('bcrypt');
const { useReducer } = require('react');
const AuthorizationForm = require('../views/Authorization.jsx');
const { Rider } = require('../db/models');

authRouter.get('/log', (req, res) => {
  res.renderComponent(AuthorizationForm);
});

authRouter.post('/log', async (req, res) => {
  let rider;
  try {
    rider = await Rider.findOne({ where: { login: req.body.login } });
    if (!rider) {
      res.json({ error: 'Такого пользователя или пароля не существует!' });
      return;
    }
  } catch (error) {
    res.json({ error: error.message });
    return;
  }
  try {
    const isSame = await bcrypt.compare(req.body.password, rider.password);
    //console.log(req.body.password, rider.password, rider.login, req.body.login);

    if (!isSame) {
      res.json({ error: 'Такого пользователя или пароля не существует' });
      return;
    }
  } catch (error) {
    res.json({ error: error.message });
    // return
  }

  req.session.rider = {
    id: rider.id,
    login: rider.login,
  };
  res.redirect('/');
});

module.exports = authRouter;
