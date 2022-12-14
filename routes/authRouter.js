const authRouter = require('express').Router();
const bcrypt = require('bcrypt');
// const { useReducer } = require('react');
const { Rider } = require('../db/models');
const AuthorizationForm = require('../views/Authorization.jsx');
const RegistrationForm = require('../views/Registration.jsx');

authRouter.get('/log', (req, res) => {
  res.renderComponent(AuthorizationForm);
});

authRouter.post('/log', async (req, res) => {
  let rider;
  try {
    rider = await Rider.findOne({ where: { login: req.body.login } });
    if (!rider) {
      const message = 'Такого пользователя или пароля не существует!';
      res.renderComponent(AuthorizationForm, {message});
      return;
    }
   } catch (error) {
    res.json({ error: error.message });
    return;
  }
  try {
    const isSame = await bcrypt.compare(req.body.password, rider.password);
    // console.log(req.body.password, rider.password, rider.login, req.body.login);
    // console.log(isSame)

    if (!isSame) {
      const message = 'Такого пользователя или пароля не существует';
      res.renderComponent(AuthorizationForm, {message});
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
  res.redirect('/bikeroutes');
});

authRouter.get('/logout', (req, res) => {
  req.session.destroy((error) => {
    if (error) {
      res.json({ error: 'Не удалось выйти' });
      return;
    }
    
    res.clearCookie('user_sid'); // очистить куку
    res.redirect('/bikeroutes'); // завершить запрос
  });
});

// регистрация

authRouter.get('/reg', (req, res) => {
  res.renderComponent(RegistrationForm);
});

authRouter.post(('/reg'), async (req, res) => {
  try {
    const arrRider = await Rider.findAll({
      attributes: ['login'],
      raw: true,
    });
    if (arrRider.includes(req.body.loginReg)) {
      const regmessage ='Никнейм занят, придумывай другой!';
      res.renderComponent(RegistrationForm, {regmessage});
    } else {
      const hash = await bcrypt.hash(req.body.passwordReg, 10);
      await Rider.create(
        {
          login: req.body.loginReg,
          password: hash,
        },
      );
      res.redirect('/auth/log');
    }
  } catch (error) {
    const regmessage ='Никнейм занят, придумывай другой!';
    res.renderComponent(RegistrationForm, {regmessage});
  }
});

module.exports = authRouter;
