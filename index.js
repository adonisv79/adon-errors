"use strict";

module.exports = require('require-all')({
	dirname     :  __dirname + '/errors',
	filter      :  /(.+Error)\.js$/,
	excludeDirs :  /^\.(git|svn)$/,
	recursive   : true
});