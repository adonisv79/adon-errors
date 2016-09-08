"use strict"
var path = require('path');
//get file name without extension
var scriptName = path.basename(__filename);
scriptName = scriptName.substring(0, scriptName.length-3);
const CommandInvalidError = require('./CommandInvalidError');

class CommandNotFoundError extends CommandInvalidError{
	constructor(msg){
		super(msg);
		this.name = scriptName;
		this.desc = "An CommandError that occurs whenever the command performed is not found to be a valid action";
	}
}

module.exports = CommandNotFoundError;