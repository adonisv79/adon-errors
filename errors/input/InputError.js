"use strict"
var path = require('path');
//get file name without extension
var scriptName = path.basename(__filename);
scriptName = scriptName.substring(0, scriptName.length-3);

class InputError extends Error{
	constructor(msg){
		super(msg);
		this.name = scriptName;
		this.desc = "An input related error";
	}
}

module.exports = InputError;