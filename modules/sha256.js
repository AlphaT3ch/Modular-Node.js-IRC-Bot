"use strict"

var crypto = require("crypto");
var sha256 = crypto.createHash("sha256");

exports.module = function() {
	this.onCommand_sha256 = function(nick, args) {
	  sha256.update(args, "utf8");//utf8 here
		this.channel.say(sha256.digest("base64"));
	}
}
