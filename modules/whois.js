"use strict"
// Whois module - usage: whois ip-address-query

var request = require('request');

exports.module = function() { 
	this.onCommand_whois = function(user, args) { 
		var chan = this.channel;
		if(args.trim() != "") {
			request("http://ip-api.com/json/" + args + "?fields=262143", function (error, response, body) {
				if (!error && response.statusCode == 200) {
					var obj = JSON.parse(body);
					if (obj.status == "success") {
						chan.say(obj.city + ", " + obj.regionName + ", " + obj.country + ". " + obj.reverse + " - " + obj.isp + " - " + obj.org + " - " + obj.timezone + ". http://ip-api.com/" + obj.query);
					} else {
						chan.say("[ERROR] " + obj.message);
					}
				} else {
					chan.say("[ERROR] " + error);
					console.err(error);
				}
			});
		} 
		else {
			this.channel.say("You're doing it wrong.\nUsage: whois ip-address-query");
		}
	} 
}
