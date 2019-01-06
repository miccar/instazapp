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
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  })

   
 

// da migliorare ***


let code='window.document.getElementsByClassName("H9zXO").length '

mainWindow.webContents.executeJavaScript(code, function (result) {
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

