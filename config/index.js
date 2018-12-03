'use strict';

require('dotenv').config();

module.exports = {
  name: process.env.NAME || 'local',
  db: {
    host: process.env.DB_HOST,
    name: process.env.DB_NAME,
    port: process.env.DB_PORT
  },
  koa: {
    host: process.env.HOST || '127.0.0.1',
    port: parseInt(process.env.PORT) || 3000
  }
};