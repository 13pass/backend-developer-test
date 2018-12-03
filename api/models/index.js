'use strict';

const chalk = require('chalk');
const fs = require('fs');
const path = require('path');
const {promisify} = require('util');

const fsReadDir = promisify(fs.readdir);
const fsStat = promisify(fs.stat);

const models = {};

async function load (dbConnection) {
  models.cnx = dbConnection; 
  let dir = __dirname + '/mongoose';
  let dirList = await fsReadDir(dir);
  if (!dirList.length) {
    console.warn(chalk.yellow('no models to load'));
  }
  await Promise.all(dirList.map(async file => {
    file = path.resolve(dir, file);
    const stat = await fsStat(file);
    if (stat && stat.isDirectory()) {
      return;
    }
    if ((file.indexOf('index') !== -1) || (!(/\.js$/i).test(file))) {
      return;
    }
    try {
      const model = require(file);
      const filePath = file.substr(0, file.indexOf('.'));
      let modelName = filePath.substr(filePath.lastIndexOf('/') + 1);
      models[modelName] = model;
      console.log(chalk.green(`model ${modelName} loaded`));
    } catch (err) {
      console.error(chalk.red('model require failed with: ' + file, err));
    }
    return;
  }));
}

models.load = load;

module.exports = models;

