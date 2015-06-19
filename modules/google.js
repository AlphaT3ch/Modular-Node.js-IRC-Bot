"use strict"
// Google module - usage: google query

var google = require('google');
google.resultsPerPage = 1;

exports.module = function() { 
	this.onCommand_google = function(user, args) { 
		var chan = this.channel;
		if(args.trim() != "") {
			google(args, function (err, next, links) {
 				for (var i = 0; i < links.length; ++i) {
					chan.say(links[i].link + " -- " + links[i].title + ": \"" + links[i].description + "\"");
				}
			});
		} else {
			chan.say("You're doing it wrong.\nUsage: google query");
		}
	} 
}
