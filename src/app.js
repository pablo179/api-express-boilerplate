const express = require('express');
const { ApiError } = require('./utils');
const routes = require('./routes');
const app = express();

// parse json request body
app.use(express.json());

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));
// add routes
app.use('/', routes);

// send back a 404 error for any unknown api request
app.use((req, res, next) => {
  next(new ApiError(404, 'Not found'));
});

module.exports = app;