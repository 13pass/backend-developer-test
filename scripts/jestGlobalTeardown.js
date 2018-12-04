'use strict';
const chalk = require('chalk');

module.exports = async () => {
  console.log(chalk.green('Global teardown for jest'));
  let server = global.__SERVER_GLOBAL__;
  await server.close();
};