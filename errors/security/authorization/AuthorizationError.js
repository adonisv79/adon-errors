"use strict"
var path = require('path');
//get file name without extension
var scriptName = path.basename(__filename);
scriptName = scriptName.substring(0, scriptName.length-3);
const SecurityError = require('./../SecurityError');

class AuthorizationError extends SecurityError{
	constructor(msg){
		super(msg);
		this.name = scriptName;
		this.desc = "A SecurityError that is thrown whenever there is an authorization violation or error that occurred";
	}
}

module.exports = AuthorizationError;