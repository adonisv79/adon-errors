"use strict";
const path = require('path');
const AdonError = require('./../AdonError');
let scriptName = path.basename(__filename);
scriptName = scriptName.substring(0, scriptName.length-3);

class DatabaseError extends AdonError{
	constructor(msg){
		super(msg);
		this.name = scriptName;
		this.desc = "A Database related error";
	}
}

module.exports = DatabaseError;