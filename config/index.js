'use strict';

require('dotenv').config();

module.exports = {
  name: process.env.NAME || 'local',
  koa: {
    host: process.env.HOST || '127.0.0.1',
    port: parseInt(process.env.PORT) || 3000
  }
};