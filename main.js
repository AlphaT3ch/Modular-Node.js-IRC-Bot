#!/usr/bin/env node
"use strict"

var log = require("./lib/Logger.js");
var Update = require("./lib/Update.js");
var Server = require("./lib/Server.js").Server;
var Channel = require("./lib/Channel.js").Channel;
var settings = require("./config.js").settings;

if (settings.servers == undefined)
{
	log.critical("You haven't added any servers in the settings.");
	process.exit();
}

var servers = [];

for (var i in settings.servers)
{
	var serverSettings = settings.servers[i];

	if (!serverSettings.address)
		throw new Error("You forgot the server address for a server.");
	if (!serverSettings.port)
		serverSettings.port = 6667;
	if (!serverSettings.nick)
		serverSettings.nick = settings.globalNick;
	if (!serverSettings.userName)
		serverSettings.userName = settings.globalUserName;
	if (!serverSettings.realName)
		serverSettings.realName = settings.globalRealName;
	if (!serverSettings.commandPrefix)
		serverSettings.commandPrefix = settings.defaultCommandPrefix;

	var server = new Server(serverSettings);
	server.modules.load(settings.globalServModules);
	server.modules.load(serverSettings.modules);

	if (typeof serverSettings.channels != 'undefined') {
		for (var channelName in serverSettings.channels) {
			var channel = new Channel(server, channelName);
			channel.modules.load(settings.globalModules);
			channel.modules.load(serverSettings.channels[channelName]);

			server.addChannel(channel);
		}
	}
	
	server.connect();
	servers.push(server);
}
