require('@babel/register');

const express = require('express');

const sequelize = require('sequelize');

const app = express();

const PORT = process.env.PORT ?? 3000;

const config = require('./config/config');

const authRouter = require('./routes/authRouter');
const lkRouter = require('./routes/lkRouter');

config(app);
app.use('/auth', authRouter);
app.use('/lk', lkRouter);

app.listen(PORT, async () => {
  try {
    console.log(`Server started ${PORT}`);
    // await sequelize.authenticate();
  } catch (error) {
    console.log('oooops', error);
  }
});
