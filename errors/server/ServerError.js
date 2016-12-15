"use strict";
const path = require('path');
const AdonError = require('./../AdonError');
//get file name without extension
let scriptName = path.basename(__filename);
scriptName = scriptName.substring(0, scriptName.length-3);

class ServerError extends AdonError{
	constructor(msg){
		super(msg);
		this.name = scriptName;
		this.desc = "A server related error";
	}
}

module.exports = ServerError;