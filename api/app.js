'use strict;';

const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const passport = require('koa-passport');

const authentication = require('./lib/authentication');
const routes = require('./routes');

const app = new Koa();

authentication.passportSetup();

app.use(bodyParser());

app.use(passport.initialize());
console.log('passport initialize');

routes.loadRoutes(app);

module.exports = app;
