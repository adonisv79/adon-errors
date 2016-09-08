"use strict"
var path = require('path');
//get file name without extension
var scriptName = path.basename(__filename);
scriptName = scriptName.substring(0, scriptName.length-3);
const DatabaseError = require('./../DatabaseError');

class DatabaseResultError extends DatabaseError{
	constructor(msg){
		super(msg);
		this.name = scriptName;
		this.desc = "A DatabaseError that occurs whenever there is a problem with the database results";
	}
}

module.exports = DatabaseResultError;