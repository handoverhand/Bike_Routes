const bikeRoutesRouter = require('express').Router();
const Bikerouteslist = require('../views/Bikerouteslist');
const { Bikeroute } = require('../db/models');
const { Feedback } = require('../db/models');

const React = require('react');
const ReactDomServer = require('react-dom/server');
const Comment = require('../views/Comment');

const InfoRoute = require('../views/InfoRoute');

bikeRoutesRouter.get('/', async (req, res) => {
  const allRoutes = await Bikeroute.findAll({
    raw: true,
  });
  console.log('allRoutes', allRoutes)
  // const allCommentId  = await Feedback.findAll({raw: true});
  // console.log('commentId', allCommentId);
  const { rider } = req.session;
  res.renderComponent(Bikerouteslist, { allRoutes, rider });
});

bikeRoutesRouter.get('/:id', async (req, res) => {
  const { id } = req.params;
  const { rider } = req.session;
  const [bikerouteId] = await Bikeroute.findAll({raw: true, where: { id } });
  const allCommentId  = await Feedback.findAll({raw: true, where: { routeId: id } });
  console.log('commentId', allCommentId);
  res.renderComponent(InfoRoute, { id, bikerouteId, allCommentId, rider });
});

bikeRoutesRouter.get('/:id/info', async (req, res) => {
  try {
    const { id } = req.params;
    const riderloginFB = req.session.login;
    const [ bikerouteId ] = await Bikeroute.findAll({raw: true, where: { id } });
    res.json(bikerouteId);
  } catch (error) {
    res.send(error.message);
  }
});

bikeRoutesRouter.post('/:id/add', async (req, res) => {
  if(req.session.rider) {
    try {
      const riderLoginFB = req.session.rider.login;
      console.log('req.body',req.body);
      const { id } = req.params;
      const routeId = id;
      const { comment, grade } =req.body;
      console.log("Пришло:", id, comment, grade, riderLoginFB, routeId)
      const newCard = await Feedback.create({ comment, grade, riderLoginFB, routeId}); 
      const element = React.createElement(Comment, { comment, grade, riderLoginFB });
      const html = ReactDomServer.renderToStaticMarkup(element);
      res.send(html);
    } catch (error) {
      res.send(error.message);
    }
  }
  // else {
  //   res.redirect('/auth/reg');
  // }
});

module.exports = bikeRoutesRouter;
