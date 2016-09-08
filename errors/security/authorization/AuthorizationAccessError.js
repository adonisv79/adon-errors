"use strict"
var path = require('path');
//get file name without extension
var scriptName = path.basename(__filename);
scriptName = scriptName.substring(0, scriptName.length-3);
const AuthorizationError = require('./AuthorizationError');

class AuthorizationAccessError extends AuthorizationError{
	constructor(msg){
		super(msg);
		this.name = scriptName;
		this.desc = "An AuthorizationError that is thrown whenever an attempt to access resource made. " +
			"However, current role/credentials does not provide permission for it.";
	}
}

module.exports = AuthorizationAccessError;