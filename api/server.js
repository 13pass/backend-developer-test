'use strict;';

const app = require('./app');
const config = require('../config');

app.listen(config.koa.port);