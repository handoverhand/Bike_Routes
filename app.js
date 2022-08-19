require('@babel/register');

const express = require('express');

const sequelize = require('sequelize');

const app = express();

const PORT = process.env.PORT ?? 3000;

const config = require('./config/config');

const authRouter = require('./routes/authRouter');
const lkRouter = require('./routes/lkRouter');
const bikeRoutesRouter = require('./routes/bikeRoutesRouter');
const mainRouter = require('./routes/mainRouter');

config(app);
app.use('/', mainRouter);
app.use('/lk', lkRouter);
app.use('/auth', authRouter);
app.use('/bikeroutes', bikeRoutesRouter);

app.listen(PORT, async () => {
  try {
    console.log(`Server started ${PORT}`);
    // await sequelize.authenticate();
  } catch (error) {
    console.log('oooops', error);
  }
});
