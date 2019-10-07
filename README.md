# Modular Node.js IRC Bot

[![Build Status](https://travis-ci.org/PranavMahesh1/Modular-Node.js-IRC-Bot.svg?branch=master)](https://travis-ci.org/PranavMahesh1/Modular-Node.js-IRC-Bot)

An extremely modular IRC bot written in Node.js.

Special thanks to [AlphaT3ch](https://github.com/AlphaT3ch) and [Dirbaio](https://github.com/dirbaio) for helping with the code.
## How to use/install

If you cannot host this or don't want to use your own system, please view the [Cloud9 Install Tutorial (For Beginner Users)](https://github.com/PranavMahesh1/Modular-Node.js-IRC-Bot/blob/master/Docs/Cloud9.md) or the [OpenShift Install Tutorial (For Advanced Users)](https://github.com/PranavMahesh1/Modular-Node.js-IRC-Bot/blob/master/Docs/OpenShift.md) otherwise, continue on... Please note that when using the [Cloud9 Method](https://github.com/PranavMahesh1/Modular-Node.js-IRC-Bot/blob/master/Docs/Cloud9.md) that the browser will need to be open while running the bot unless you have a [paid Cloud9 account](https://c9.io/pricing).

1. Make sure you clone this repo with git and not just upload or download a zip of it. Make sure that ```git pull``` is executable, otherwise the update check will not work.  
2. Open ```settings.js``` and configure the file. There are comments in the file that should tell you what to do.  
3. Install Node.js. Go in a command prompt and navigate to the bot's folder.  
4. Run ```npm install``` to automatically install all of our dependencies. Make sure Node.js is updated to the latest version.

To start your bot, type ```node main.js``` or alternatively, open ```run.bat``` on Windows. Otherwise, to run it as daemon, run ```node app.js start```.

Your bot should be on the desired channel.

## Modules and how to use them
- For commands, see [COMMANDS.md](https://github.com/PranavMahesh1/Modular-Node.js-IRC-Bot/blob/master/Docs/COMMANDS.md).

- For a tutorial on creating modules, see [CreatingModules.md](https://github.com/PranavMahesh1/Modular-Node.js-IRC-Bot/blob/master/Docs/CreatingModules.md).

## License

The Modular-Node.js-IRC-Bot repo operates under the MIT Standard Licesnse. For more information, visit [LICENSE.txt](https://github.com/PranavMahesh1/Modular-Node.js-IRC-Bot/blob/master/LICENSE.txt).
