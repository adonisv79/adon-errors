"use strict"
var path = require('path');
//get file name without extension
var scriptName = path.basename(__filename);
scriptName = scriptName.substring(0, scriptName.length-3);
const DatabaseConnectionError = require('./DatabaseConnectionError');

class DatabaseConnectionRejectedError extends DatabaseConnectionError{
	constructor(msg){
		super(msg);
		this.name = scriptName;
		this.desc = "A DatabaseConnectionError that occurs whenever a connection request was rejected by the database";
	}
}

module.exports = DatabaseConnectionRejectedError;