"use strict";

var settings = require('../config').settings;

exports.module = function() {
	this.onMessage = function(user, message) {
		var st = String.fromCharCode(1);
		var os = require("os");
		if (message == st+"VERSION"+st) {
			this.server.notice(user, settings.globalNick + " by Dirbaio, Nina, PranavMahesh1, and AlphaTech. Running on Node.js " + process.versions.node + " (" + os.type() + " " + os.release() + " " + os.arch() + ") https://github.com/PranavMahesh1/Modular-Node.js-IRC-Bot");
		} else if (message == st+"TIME"+st) {
			this.server.notice(user, (new Date()).toString());
		} else if (message == st+"PING"+st) {
			this.server.notice(user, "PONG");
		}
	};
};
