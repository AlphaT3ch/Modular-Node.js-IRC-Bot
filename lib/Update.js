"use strict"

var color = require('colors');
var sys = require('sys');
var exec = require('child_process').exec;
var fs = require('fs');
var request = require('request');
var tempWrite = require('temp-write');

console.log("[UPDATER] Checking for updates...");
fs.readFile('./version.txt', 'utf-8', function(err, data) {
	if (err) {
		console.error("[ERROR] " + err.red);
		process.exit();
	}
	request('https://raw.githubusercontent.com/LifeMushroom/Modular-Node.js-IRC-Bot/master/version.txt', function(error, response, body) {
	if (!error && response.statusCode == 200) {
		if (body > data) {
		console.log("[UPDATER] Update Found!");
			fs.readFile('./config.js', 'utf-8', function (err, data) {
				if (err) {
					console.error("[ERROR] " + err.red);
					process.exit();
				}
				var tempconfig = tempWrite.sync(data);
				exec("git pull");
				fs.writeFile('./old_config.js', fs.readFileSync(tempconfig, 'utf-8'), function (err) {
					if (err) {
						console.error("[ERROR] " + err.red);
						process.exit();
					}
					console.log("[UPDATER] Successfully updated! Your new configuration's name is \"config_old.js\".".cyan);
					console.log("[UPDATER] Please check your \"config.js\" to add the new features to your \"config_old.js\" and then rename your \"config_old.js\" to \"config.js\"".cyan);
					console.log("[UPDATER] Please re-run your bot when you are ready!".cyan);
					process.exit();
				});
			});
		} else {
			console.log("[UPDATER] No updates found... Booted up!".cyan);
		}
	} else {
		console.error("[ERROR] " + err.red);
	}
})
});
