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
const { app, session, BrowserWindow } = require('electron')

app.allowRendererProcessReuse = true;

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow
let systemPrinterList // printer dreams

// Crappy Parse from Command Line
const app_url = (function() {

  var idx = 0;
  var max = process.argv.length;
  var arg = null;
  var url = null;
  for (idx; idx<max; idx++) {
    arg = process.argv[idx];
    if (url = arg.match(/\-\-url=(.+)/)) {
      console.log('url', url);
      return url[1];
    }
  }

  return '';

})();

function createWindow () {

  // Create the browser window.
  mainWindow = new BrowserWindow({
    backgroundColor: '#101010',
    darkTheme: true,
    width: 800,
    minWidth: 800,
    height: 600,
    minHeight: 600,
    center: true,
    icon: __dirname + '/icon-512.png',
    webPreferences: {
      contextIsolation: true,
      enableRemoteModule: false,
      // nativeWindowOpen: true, // Doesn't work for us
      nodeIntegration: false,
      plugins: true
    }
  })

  mainWindow.loadURL(`file://${__dirname}/index.html?r=${app_url}`);

  mainWindow.webContents.on('did-fail-load', function(e) {
    console.log(e);
  });

  mainWindow.webContents.on('did-fail-provisional-load', function(e) {
    console.log(e);
  });

  // Trap this and do something smart
  mainWindow.webContents.on('new-window', function(e) {
    console.log(e);
  });

  // Try to Decipher if Scanner Input?
  mainWindow.webContents.on('before-input-event', function(e) {
    console.log(e);
  });

  systemPrinterList = mainWindow.webContents.getPrinters()

}

// https://stackoverflow.com/questions/46012272/silent-printing-in-electron
function printDirect()
{
  var args = {
    silent: true,
    printBackground: false,
    margin: {
      marginType: 'none'
    },
    scaleFactor: 100
  }

  mainWindow.webContents.print(args, (stat, code) => {
    // Callback Function Here
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

  // // Emitted when the window is closed.
  // // mainWindow.on('closed', function () {
  // //   // Dereference the window object, usually you would store windows
  // //   // in an array if your app supports multi windows, this is the time
  // //   // when you should delete the corresponding element.
  // //   mainWindow = null
  // // })
