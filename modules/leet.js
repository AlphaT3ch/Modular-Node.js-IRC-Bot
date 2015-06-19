"use strict"
// Leet module - usage: leet message

var leet = require('leet');

exports.module = function() { 
	this.onCommand_leet = function(user, args) { 
		if(args.trim() != "") {
			this.channel.say(leet.convert(args));
		} 
		else {
			this.channel.say("You're doing it wrong.\nUsage: leet message");
		}
	} 
}
