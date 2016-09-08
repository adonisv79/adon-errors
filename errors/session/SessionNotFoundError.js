"use strict"
var path = require('path');
//get file name without extension
var scriptName = path.basename(__filename);
scriptName = scriptName.substring(0, scriptName.length-3);
const SessionError = require('./SessionError');

class SessionNotFoundError extends SessionError{
	constructor(msg){
		super(msg);
		this.name = scriptName;
		this.desc = "A SessionError that occurs whenever a session state for a client is not found";
	}
}

module.exports = SessionNotFoundError;