"use strict";

let z = require('require-all')({
	dirname     :  __dirname + '/errors',
	filter      :  /(.+Error)\.js$/,
	excludeDirs :  /^\.(git|svn)$/,
	recursive   : true
});

let dd = new z.session.SessionNotFoundError('dfdsfsdf');
if(dd instanceof z.session.SessionError) {
	console.log(1);
}
if(dd instanceof z.session.SessionNotFoundError) {
	console.log(2);
}
z = 2;