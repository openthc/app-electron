/**
 * Quickstart framework cloned from https://github.com/electron/electron-quick-start
 * Building: https://medium.com/how-to-electron/a-complete-guide-to-packaging-your-electron-app-1bdc717d739f
 *           https://github.com/electron-userland/electron-builder
 *           https://github.com/electron-userland/electron-packager
 *           https://www.electron.build/multi-platform-build
 *
 * Debugging: https://electronjs.org/docs/tutorial/debugging-main-process-vscode
 *            https://code.visualstudio.com/docs/nodejs/nodejs-debugging
 **/

// Modules to control application life and create native browser window
const {app, BrowserWindow} = require('electron')

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow

function createWindow () {

  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    icon: __dirname + '/icon.png',
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false
    }
  })

  mainWindow.loadFile('./src/index.html');

  // Load the index.html of the app.
  // We can use this as the landing page of the app, 
  // so we're not dependent on WT production for initial experience
  // A special app lander gives us an opportunity to run app-specific bootstrap code
  // when the app starts, when the app starts for the very first time, etc.
  // mainWindow.loadFile('index.html')

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()

  // Build application resource
  // create Getopt instance
  let getopt = require('node-getopt').create([
    ['U' , 'url=URL'   , 'Supply client URL.'],
    ['h' , 'help'],
  ]).bindHelp() // bind option 'help' to default action

  const opt = getopt.parse(process.argv.slice(2))
  let URL = opt.options.url;
  
  // Load Application Site
  mainWindow.loadURL(URL)

  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', function () {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) createWindow()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
