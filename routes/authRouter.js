const authRouter = require('express').Router();
const AuthorizationForm = require('../views/Authorization.jsx');

authRouter.get('/log', (req, res) => {
  res.renderComponent(AuthorizationForm);
});

module.exports = authRouter;
