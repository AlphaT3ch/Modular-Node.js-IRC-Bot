# Modular-Node.js-IRC-Bot

An extremely modular IRC bot written in Node.js (early in dev)

## How to use/install

If you cannot host this or don't want to use your own system, please view the [Cloud9 Install Tutorial (For Beginner Users)](https://github.com/LifeMushroom/Modular-Node.js-IRC-Bot/blob/master/Docs/Cloud9.md) or the [OpenShift Install Tutorial (For Experts)](https://github.com/LifeMushroom/Modular-Node.js-IRC-Bot/blob/master/Docs/OpenShift.md) otherwise, continue on...

1. Make sure you clone this repo with git and not just upload or download a zip of it. Make sure that ```git pull``` is executable, otherwise the update check will not work.
2. Open ```settings.js``` and configure the file. There are comments in the file that should tell you what to do.
3. Install Node.js. Go in a command prompt and navigate to the bot's folder.
4. Run ```npm install``` to automatically install all of our dependencies.

To start your bot, type ```node main.js``` or alternatively, open ```run.bat``` on Windows. Otherwise, to run it as daemon, run ```node app.js start```.

Your bot should be on the desired channel.

## Modules and how to use them
- For commands, see [COMMANDS.md](https://github.com/LifeMushroom/Modular-Node.js-IRC-Bot/blob/master/Docs/COMMANDS.md).

- For a tutorial on creating modules, see [CreatingModules.md](https://github.com/LifeMushroom/Modular-Node.js-IRC-Bot/blob/master/Docs/CreatingModules.md).

## License

Modular-Node.js-IRC-Bot operates on the GNU General Public License v3.0. The GPL (V2 or V3) is a copyleft license that requires anyone who distributes our code or a derivative work to make the source available under the same terms. V3 of the license restricts use in hardware that forbids software alterations.
For more information, visit [LICENSE.txt](https://github.com/LifeMushroom/Modular-Node.js-IRC-Bot/blob/master/LICENSE.txt).
