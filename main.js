/* my wazapp */
const electron = require('electron')
// Module to control application life.
const app = electron.app
// Module to create native browser window.
const BrowserWindow = electron.BrowserWindow

const path = require('path')
const url = require('url')
const {Menu, Tray} = require('electron')
const gotTheLock = app.requestSingleInstanceLock()

app.on('second-instance', (commandLine, workingDirectory) => {
  // Someone tried to run a second instance, we should focus our window.
   if (mainWindow.window) {
                if (mainWindow.window.isMinimized()) {
                    mainWindow.window.restore();
                }
                mainWindow.window.show();
            }
})

if (!gotTheLock) {
  return app.quit()
}



//panel icon
let tray = null
  app.on('ready', () => {
    tray = new Tray(path.join(__dirname, 'app/icons/icon.png'))
    const contextMenu = Menu.buildFromTemplate([

      {
      label: 'Hide',
      click: () => { mainWindow.hide();}
      },
      {
        type: 'separator'
      },
      {
      label: 'Show',
      click: () => {mainWindow.show();}
      },
      {
        type: 'separator'
      },
      {
        label: 'Quit',
        click: () => {app.quit();}
       }

    ])
    tray.setToolTip('InstazApp.')
    tray.setContextMenu(contextMenu)


   


})




// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow

function createWindow () {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    title: "InstazApp",
    autoHideMenuBar: false,
    icon: path.join(__dirname, 'app/icons/icon.png'),
    show:true
  })


  mainWindow.loadURL('https://www.instagram.com');



  // Open the DevTools.
  // mainWindow.webContents.openDevTools()

  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time/* my wazapp */
2
const electron = require('electron')
3
// Module to control application life.
4
const app = electron.app
5
// Module to create native browser window.
6
const BrowserWindow = electron.BrowserWindow
7
​
8
const path = require('path')
9
const url = require('url')
10
const {Menu, Tray} = require('electron')
11
const gotTheLock = app.requestSingleInstanceLock()
12
​
13
app.on('second-instance', (commandLine, workingDirectory) => {
14
  // Someone tried to run a second instance, we should focus our window.
15
   if (mainWindow.window) {
16
                if (mainWindow.window.isMinimized()) {
17
                    mainWindow.window.restore();
18
                }
19
                mainWindow.window.show();
20
            }
21
})
22
​
23
if (!gotTheLock) {
24
  return app.quit()
25
}
26
/*
27
const isRunning = app.makeSingleInstance(() => {
28
            if (mainWindow.window) {
29
                if (mainWindow.window.isMinimized()) {
30
                    mainWindow.window.restore();
31
                }
32
                mainWindow.window.show();
33
            }
34
  });*/
35
​
36
​
37
//panel icon
38
let tray = null
39
  app.on('ready', () => {
40
    tray = new Tray(path.join(__dirname, 'app/icons/icon.png'))
41
    const contextMenu = Menu.buildFromTemplate([
42
​
43
      {
44
      label: 'Hide',
45
      click: () => { mainWindow.hide();}
46
      },
47
      {
48
        type: 'separator'
49
      },
    // when you should delete the corresponding element.
    mainWindow = null
  })

   
 

// da migliorare ***


let code='window.document.getElementsByClassName("H9zXO").length '

mainWindow.webContents.executeJavaScript(code, function (result) {/* my wazapp */
2
const electron = require('electron')
3
// Module to control application life.
4
const app = electron.app
5
// Module to create native browser window.
6
const BrowserWindow = electron.BrowserWindow
7
​
8
const path = require('path')
9
const url = require('url')
10
const {Menu, Tray} = require('electron')
11
const gotTheLock = app.requestSingleInstanceLock()
12
​
13
app.on('second-instance', (commandLine, workingDirectory) => {
14
  // Someone tried to run a second instance, we should focus our window.
15
   if (mainWindow.window) {
16
                if (mainWindow.window.isMinimized()) {
17
                    mainWindow.window.restore();
18
                }
19
                mainWindow.window.show();
20
            }
21
})
22
​
23
if (!gotTheLock) {
24
  return app.quit()
25
}
26
/*
27
const isRunning = app.makeSingleInstance(() => {
28
            if (mainWindow.window) {
29
                if (mainWindow.window.isMinimized()) {
30
                    mainWindow.window.restore();
31
                }
32
                mainWindow.window.show();
33
            }
34
  });*/
35
​
36
​
37
//panel icon
38
let tray = null
39
  app.on('ready', () => {
40
    tray = new Tray(path.join(__dirname, 'app/icons/icon.png'))
41
    const contextMenu = Menu.buildFromTemplate([
42
​
43
      {
44
      label: 'Hide',
45
      click: () => { mainWindow.hide();}
46
      },
47
      {
48
        type: 'separator'
49
      },
  console.log(result)
  if(result==0){
    console.log('no')
 tray.setImage(path.join(__dirname, 'app/icons/icon.png'));
  }
  else {
    console.log('miette l icon')
    tray.setImage(path.join(__dirname, 'app/icons/iconot.png'));
  }
})



// ***


}

//check if there is an instagram notification  document.getElementsByClassName('H9zXO').length > 0 

function checkNotification() {
	if(window.document.getElementsByClassName('H9zXO').length > 0 ){

	alert('new notification')
	}else{

	alert('no notification')
	}
}



// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {


  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
  }
})
