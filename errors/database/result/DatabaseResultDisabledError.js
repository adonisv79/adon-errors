"use strict"
var path = require('path');
//get file name without extension
var scriptName = path.basename(__filename);
scriptName = scriptName.substring(0, scriptName.length-3);
const DatabaseResultError = require('./DatabaseResultError');

class DatabaseResultDisabledError extends DatabaseResultError{
	constructor(msg){
		super(msg);
		this.name = scriptName;
		this.desc = "A DatabaseResultError that occurs whenever a query was made and a record was found. " +
			"However, the record should not be accessed as it is marked disabled. " +
			"This error is thrown as if a NotFound Error has occured";
	}
}

module.exports = DatabaseResultDisabledError;