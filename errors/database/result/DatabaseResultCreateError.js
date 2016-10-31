"use strict"
var path = require('path');
//get file name without extension
var scriptName = path.basename(__filename);
scriptName = scriptName.substring(0, scriptName.length-3);
const DatabaseResultError = require('./DatabaseResultError');

class DatabaseResultCreateError extends DatabaseResultError{
	constructor(msg){
		super(msg);
		this.name = scriptName;
		this.desc = "A DatabaseResultError that occurs whenever a 'create' or 'insert' call was made but no record was written. " +
			"this Error is thrown whenever a database writ failed.";
	}
}

module.exports = DatabaseResultCreateError;