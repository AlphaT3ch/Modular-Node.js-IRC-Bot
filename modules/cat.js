"use strict" // Cat module - usage: cat [id]

var request = require('request');
var XML = require('pixl-xml');

exports.module = function() { 
	this.onCommand_cat = function(user, args) { 
		var chan = this.channel;
		if(args == "") {
			request("http://thecatapi.com/api/images/get?format=xml", function (error, response, body) {
				if (!error && response.statusCode == 200) {
					var data = XML.parse(body);
					chan.say("Cat " + data.data.images.image.id + ": " + data.data.images.image.url);
				} else {
					chan.say("[ERROR] " + error);
					console.err(error);
				}
			});
		} else {
			request("http://thecatapi.com/api/images/get?format=xml&image_id=" + args.split(" ")[0], function (error, response, body) {
				if (!error && response.statusCode == 200) {
					var data = XML.parse(body);
					chan.say("Cat " + data.data.images.image.id + ": " + data.data.images.image.url);
				} else {
					chan.say("[ERROR] " + error);
					console.err(error);
				}
			});
		}
	} 
}
