"use strict"
var path = require('path');
//get file name without extension
var scriptName = path.basename(__filename);
scriptName = scriptName.substring(0, scriptName.length-3);

class SecurityError extends Error{
	constructor(msg){
		super(msg);
		this.name = scriptName;
		this.desc = "A security related error";
	}
}

module.exports = SecurityError;