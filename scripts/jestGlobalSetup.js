'use strict';
const chalk = require('chalk');


module.exports = async () => {
  console.log(chalk.green('Global setup for jest'));
  const server = require('../api/server');
  // This global is not available inside tests but only in global teardown
  global.__SERVER_GLOBAL__ = server;
};