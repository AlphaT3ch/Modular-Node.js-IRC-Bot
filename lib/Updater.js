"use strict";

var chalk = require('chalk');
var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);
var sys = require('sys');
var exec = require('child_process').exec;
var fs = require('fs');
var request = require('request');
var tempWrite = require('temp-write');

function checkForUpdate() {
	console.log(chalk.magenta("[UPDATER] Checking for updates..."));
	fs.readFile('./package.json', 'utf-8', function(err, data) {
		if (err) {
			console.error(err);
			process.exit();
		}
		request('https://raw.githubusercontent.com/PranavMahesh1/Modular-Node.js-IRC-Bot/master/package.json', function(error, response, body) {
		if (!error && response.statusCode == 200) {
			if (JSON.parse(body).version > JSON.parse(data).version) {
				console.log(chalk.magenta("[UPDATER]" + " Update Found!"));
				rl.question(chalk.magenta("Update? [yes]/no: "), function(answer) {
					if (answer == 'yes') {
						fs.readFile('./config.js', 'utf-8', function (err, data) {
							if (err) {
								console.error(err);
								process.exit();
							}
							var tempconfig = tempWrite.sync(data);
							exec("git pull");
							fs.writeFile('./old_config.js', fs.readFileSync(tempconfig, 'utf-8'), function (err) {
								if (err) {
									console.error(err);
									process.exit();
								}
								console.log(chalk.magenta("[UPDATER] Successfully updated! Your new configuration's name is \"config_old.js\"."));
								console.log(chalk.magenta("[UPDATER] Please check your \"config.js\" to add the new features to your \"config_old.js\" and then rename your \"config_old.js\" to \"config.js\""));
								console.log(chalk.magenta("[UPDATER] Please re-run your bot when you are ready!"));
								process.exit();
							});
						});
					} else {
						console.log(chalk.magenta("[UPDATER] Update Aborted"));
					}
				});
			} else {
				console.log(chalk.magenta("[UPDATER] No updates found... Booted up!"));
			}
		} else {
			console.error(err);
		}
	});
});
}
checkForUpdate();
