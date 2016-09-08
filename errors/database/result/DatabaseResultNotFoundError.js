"use strict"
var path = require('path');
//get file name without extension
var scriptName = path.basename(__filename);
scriptName = scriptName.substring(0, scriptName.length-3);
const DatabaseResultError = require('./DatabaseResultError');

class DatabaseResultNotFoundError extends DatabaseResultError{
	constructor(msg){
		super(msg);
		this.name = scriptName;
		this.desc = "A DatabaseResultError that occurs whenever a query was made but no record was found. " +
			"this Error is thrown whenever the result is expected a value as it may be an important input to another process.";
	}
}

module.exports = DatabaseResultNotFoundError;