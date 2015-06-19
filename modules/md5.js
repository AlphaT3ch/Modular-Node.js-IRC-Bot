"use strict"

var md5 = require('MD5');

exports.module = function() {
	this.onCommand_md5 = function(nick, args) {
		this.channel.say(md5(args));
	}
}
