"use strict"

exports.module = function() {
	this.onCommand_ping = function(nick, command) {
		this.channel.say("Pong!");
	}
}
