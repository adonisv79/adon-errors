"use strict";
const path = require('path');
const AdonError = require('./../AdonError');
let scriptName = path.basename(__filename);
scriptName = scriptName.substring(0, scriptName.length-3);

class SessionError extends AdonError{
	constructor(msg){
		super(msg);
		this.name = scriptName;
		this.desc = "A Session related error";
	}
}

module.exports = SessionError;