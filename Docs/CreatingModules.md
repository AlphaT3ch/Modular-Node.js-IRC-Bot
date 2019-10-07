# Creating Modules
It's quite simple to actually make your own modules for the bot.
- Make a file in the [modules directory](https://github.com/PranavMahesh1/Modular-Node.js-IRC-Bot/tree/master/modules)
- Inside the file on the first line, put ```"use strict"```
- Include any files or external modules to use
- Put ```exports.module = function() {``` to declare that this is part of your module.
- Put ```this.event = function(return values) {``` but replace ```event``` with one of the following events and replace```return values``` with the return value specified below:
 - [x] onUserJoin: Executed when someone joins the channel, returns the users' nick.
 - [x] onUserLeave: Executed when someone leaves the channel, returns the users' nick.
 - [x] onMessage: Executed when someone talks in the channel, returns the users' nick and the message.
 - [x] onCommand_help: Executed when someone says ```!help``` the channel, replace help with any word, returns the users' nick and arguments.
- Insert your desired Node.js code
- To message the channel, do something like ```this.channel.say("Your Message Here");```
- To send a raw command, do something like ```this.sendCommand("PRIVMSG #channel :Your Message Here");```
- To get values from the settings such as the bot's nick or the owner's nick, include the settings file by doing ```var settings = require("../settings").settings;```
 - [x] For example, to get the bot's command prefix, you'd want ```settings.defaultCommandTrigger``` or to get the bot's nickname, you'd want ```settings.globalNick```
- To end the module, include two curly-braces at the bottom of the module's file.
- Include the module in your configuration by using the name of the file (without the tailing .js) as the module's name
- Optionally, add your module's commands to [COMMANDS.md](https://github.com/Apexton/Modular-Node.js-IRC-Bot/blob/master/Docs/COMMANDS.md)
- Optionally, send a [Pull Request](https://github.com/Apexton/Modular-Node.js-IRC-Bot/pulls) so others can use your awesome module too!
