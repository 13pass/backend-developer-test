'use strict;';

const Koa = require('koa');
const bodyParser = require('koa-bodyparser');

const routes = require('./routes');

const app = new Koa();

app.use(bodyParser());
routes.loadRoutes(app);

module.exports = app;
