// Bot configuration file - rename to settings.js after config

exports.settings = {
	// Name of bot
	globalNick: "ModularBot",
	// Username of bot
	globalUserName: "IRCBot",
	// Realname of bot
	globalRealName: "Node.js IRC Bot",
	// prefix of most commands for bot
	defaultCommandPrefix: "!",

	// These modules will be loaded in all channels.
	globalServModules: {
		ctcp: {}
	},
	// These modules will be loaded in all channels.
	globalModules: {
		yesno: {},
		chance: {},
		tell: {},
		calc: {},
		seen: {},
		ddg: {},
		fire: {},
		flipcoin: {},
		rolldice: {},
		time: {},
		fortune: {},
		truefalse: {},
		// default message
		welcome: {},
		/* custom message
		welcome: { message: "Welcome to the channel, %!" }, */
		excuse: {},
		say: {},
		cookie: {},
		eightball: {},
		card: {},
		help: {},
		google: {},
//		wolfram: { key: "Wolfram|Alpha Key Here" },
		whois: {},
		ping: {},
		sha256: {},
		md5: {},
		wikipedia: {}
	},
	
	servers: {
		djbouche: {
			// irc server's address
			address: 'irc.someserver.net',
			// port of irc server
			port: 6667,
			modules: {},
			channels: {
				// channel to join
				"#testchannel": {
					// extra modules to load to this channel
					donotslap: {},
				// for irc reporting, change the port to a four digit number and uncomment the line below
				// report: {port: 5764, allowedip: "127.0.0.1"},
				},
				// extra channel?
			     /*	"#testchannel2": {
					// extra modules to load to this channel
					donotslap: {},
				}, */
			}
		}
	}
}
