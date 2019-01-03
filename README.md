# instaApp
Build your linux  client for Instagram. 

**It is not an official application **

This is created with [Electron](https://electronjs.org/) 



## To Use
To clone and run this repository you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:
```bash
# Clone this repository
git clone https://github.com/miccar/instazapp
# Go into the repository
cd instazapp
# Install dependencies
npm install
# Run the app
npm start

```

## Create linux executable file
```bash
# Create package for linux 64bit
npm run build-linux64
# Create package for linux 32bit
npm run build-linux32
```
This command will create a folder called Wazapp-linux32(64) that contains the executable file. Now you have to include this file as a startup application of your Linux operating system 

## NOTE
If it is not already installed, you have to include electron-packager for creating the linux executable file with the following command: 

```bash
#install the dependency 
npm install electron-packager
```
## InstazApp on Ubuntu 18.04
The app starts in Hide mode(a background mode, only the icon on the panel is showed and the new message will be notified).
Clicking on the _Show_ item, the app will be open.
 ![alt text](https://github.com/miccar/instazapp/blob/master/images/instagram.png)

