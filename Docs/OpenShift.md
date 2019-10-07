![Register](https://raw.githubusercontent.com/PranavMahesh1/Modular-Node.js-IRC-Bot/master/Docs/OpenShift/1.jpg)
First, register for an [OpenShift account](https://www.openshift.com/app/account/new)

![Home Panel](https://raw.githubusercontent.com/PranavMahesh1/Modular-Node.js-IRC-Bot/master/Docs/OpenShift/2.jpg)
Once you're in, click Create Your First Application.

![Application Type](https://raw.githubusercontent.com/PranavMahesh1/Modular-Node.js-IRC-Bot/master/Docs/OpenShift/3.jpg)
Setup your application as Node.js 0.10 or the newest version.

![Application Setup](https://raw.githubusercontent.com/PranavMahesh1/Modular-Node.js-IRC-Bot/master/Docs/OpenShift/4.jpg)
Now as you setup your application, feel free to name it whatever you like. Just make sure you source the repo as ```https://github.com/PranavMahesh1/Modular-Node.js-IRC-Bot```.

![Install Client](https://raw.githubusercontent.com/PranavMahesh1/Modular-Node.js-IRC-Bot/master/Docs/OpenShift/5.jpg)
Now that you're all setup, follow [OpenShift's Tutorial](https://developers.openshift.com/en/getting-started-overview.html) on how to install the RHC client.

![Login](https://raw.githubusercontent.com/PranavMahesh1/Modular-Node.js-IRC-Bot/master/Docs/OpenShift/6.jpg)
Now login using the RHC Client to your application via SSH.

![Move To Directory and Install Dependencies](https://raw.githubusercontent.com/PranavMahesh1/Modular-Node.js-IRC-Bot/master/Docs/OpenShift/7.jpg)
Now run ```cd app-root/repo``` and then ```npm install```

![Edit and Run](https://raw.githubusercontent.com/PranavMahesh1/Modular-Node.js-IRC-Bot/master/Docs/OpenShift/8.jpg)
Now run ```nano settings.js``` to edit your settings (Use control + X to exit and save).

Now that you're finally done setting it up, run the bot using ```node app.js start```

![Connected](https://raw.githubusercontent.com/PranavMahesh1/Modular-Node.js-IRC-Bot/master/Docs/OpenShift/9.jpg)
The bot should now join!

Please note: You have to connect to your bot via SSH every once and a while to keep your Openshift envirnment running or they'll automatically delete your box. Don't worry, they'll email you before they take action though.
