#!/usr/bin/env node

/**
 * Module dependencies.
 */

require('babel/register')({
  optional: ['es7.asyncFunctions']
});

var app = require('./app');