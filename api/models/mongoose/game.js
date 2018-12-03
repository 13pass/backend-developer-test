'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const collection = 'game';

const schema = new Schema({
  name: String,
  nbPlayers: {
    max: { 
      type: Number 
    },
    min: { 
      type: Number 
    }
  }
}, {
  collection 
});

module.exports = mongoose.model(collection, schema);