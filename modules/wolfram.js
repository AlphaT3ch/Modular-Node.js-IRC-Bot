"use strict"
// Wolfram|Alpha module - usage: wolfram query

var settings = require("../config.js").settings;
var Client = require('node-wolfram');

exports.module = function() {
	this.onCommand_wolfram = function(user, args) { 
		var chan = this.channel;
		if(args.trim() != "") {
			var Wolfram = new Client(this.settings.key);
			Wolfram.query(args, function (err, result) {
				if(err) {
					console.err(err)
					chan.say("[ERROR] " + err);
				} else {
					chan.say(result.queryresult.pod[1].subpod[0].plaintext[0]);
					chan.say("http://www.wolframalpha.com/input/?i=" + encodeURIComponent(args));
				}
			});
		} else {
			chan.say("You're doing it wrong.\nUsage: wolfram query");
		}
	} 
}
