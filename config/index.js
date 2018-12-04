'use strict';

require('dotenv').config();

module.exports = {
  name: process.env.NAME || 'local',
  apiRootUrl: process.env.API_ROOT_URL || 'http://localhost:3000',
  db: {
    host: process.env.DB_HOST,
    name: process.env.DB_NAME,
    port: process.env.DB_PORT
  },
  google: {
    callbackPath: process.env.GOOGLE_CALLBACK_PATH
  },
  koa: {
    host: process.env.HOST || '127.0.0.1',
    port: parseInt(process.env.PORT) || 3000
  }
};