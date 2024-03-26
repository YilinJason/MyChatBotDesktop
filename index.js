const { app, BrowserWindow, ipcMain, webContents } = require('electron');

const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width:600,
    height:400,
    // resizable: false,
    // frame: false,
    webPreferences:{
      nodeIntegration:true,
      contextIsolation: false,
      enableRemoteModule: true
    }
  });
  
  require('@electron/remote/main').initialize()
  require('@electron/remote/main').enable(mainWindow.webContents)
//   require('@electron/remote/main').initialize()
//   require('@electron/remote/main').enable(mainWindow.webContents)
  // and load the index.html of the app.
  mainWindow.loadURL("http://localhost:3000/mainapp");

  // Open the DevTools.
  // mainWindow.webContents.openDevTools();
};

ipcMain.on('start-recognition', (event, arg) => {
  const recognition = new webContents.SpeechRecognition();

  recognition.onresult = function(event) {
    const transcript = event.results[0][0].transcript;
    event.sender.send('recognition-result', transcript);
  };

  recognition.start();
});

ipcMain.on('stop-recognition', (event, arg) => {
  recognition.stop();
});

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', async () => {
  createWindow();
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.
