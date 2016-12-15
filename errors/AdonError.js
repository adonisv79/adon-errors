"use strict";
const path = require('path');
//get file name without extension
let scriptName = path.basename(__filename);
scriptName = scriptName.substring(0, scriptName.length-3);

class AdonError extends Error{
	constructor(msg){
		super(msg);
		this.name = scriptName;
		this.desc = "A generic error";
	}
}

module.exports = AdonError;