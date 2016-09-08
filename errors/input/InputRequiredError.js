"use strict"
var path = require('path');
//get file name without extension
var scriptName = path.basename(__filename);
scriptName = scriptName.substring(0, scriptName.length-3);
const InputError = require('./InputError');

class InputRequiredError extends InputError{
	constructor(msg){
		super(msg);
		this.name = scriptName;
		this.desc = "An InputError that occurs whenever a required input was undefined or null";
	}
}

module.exports = InputRequiredError;