"use strict"
var path = require('path');
//get file name without extension
var scriptName = path.basename(__filename);
scriptName = scriptName.substring(0, scriptName.length-3);
const CommandError = require('./CommandError');

class CommandInvalidError extends CommandError{
	constructor(msg){
		super(msg);
		this.name = scriptName;
		this.desc = "An CommandError that occurs whenever the command performed is invalid";
	}
}

module.exports = CommandInvalidError;