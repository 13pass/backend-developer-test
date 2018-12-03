'use strict';

const chalk = require('chalk');
const mongoose = require('mongoose');
const config = require('../../config');
const db = {};

async function connect () {
  let connectionString = `mongodb://${config.db.host}:${config.db.port}/${config.db.name}`;
  try {
    db.cnx = await mongoose.connect(connectionString, { 
      useNewUrlParser: true 
    });
    console.log(chalk.green('DB connected'));
  } catch (error) {
    console.error(chalk.red('DB connection error:', error));
  }
}

db.connect = connect;
module.exports = db;
