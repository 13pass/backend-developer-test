'use strict;';

const chalk = require('chalk');

const app = require('./app');
const config = require('../config');

let server;

(async () => {
  await new Promise((resolve, reject) => {
    try {
      server = app.listen(config.koa.port, async () => {
        console.log(`listening on port ${config.koa.port}`);
        resolve();          
      });
    } catch (error) {
      console.error(chalk.red('error during app loading:'), error);
      reject(error);
    }
  });
})();

module.exports = server;