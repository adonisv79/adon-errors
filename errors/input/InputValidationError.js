"use strict"
var path = require('path');
//get file name without extension
var scriptName = path.basename(__filename);
scriptName = scriptName.substring(0, scriptName.length-3);
const InputError = require('./InputError');

class InputValidationError extends InputError{
	constructor(msg){
		super(msg);
		this.name = scriptName;
		this.desc = "An InputError that occurs whenever an input is tested to be invalid";
	}
}

module.exports = InputValidationError;