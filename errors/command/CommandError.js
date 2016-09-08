"use strict"
var path = require('path');
//get file name without extension
var scriptName = path.basename(__filename);
scriptName = scriptName.substring(0, scriptName.length-3);

class CommandError extends Error{
	constructor(msg){
		super(msg);
		this.name = scriptName;
		this.desc = "A Command related error";
	}
}

module.exports = CommandError;