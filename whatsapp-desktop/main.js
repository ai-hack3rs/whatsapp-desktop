const { app, BrowserWindow, shell, session } = require('electron');
const path = require('path');

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) {
  app.quit();
}

const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    title: "WhatsApp",
    icon: path.join(__dirname, 'assets', 'icon.png'),
    webPreferences: {
      partition: 'persist:whatsapp',
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false,
    },
  });

  // Remove the menu bar for a cleaner, native feel
  mainWindow.setMenuBarVisibility(false);

  // WhatsApp strictly checks User-Agent to block unsupported browsers like Electron.
  // We spoof the request headers to look like a standard Linux Chrome browser.
  const userAgent = 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36';
  
  const ses = session.fromPartition('persist:whatsapp');
  ses.webRequest.onBeforeSendHeaders((details, callback) => {
    details.requestHeaders['User-Agent'] = userAgent;
    callback({ cancel: false, requestHeaders: details.requestHeaders });
  });

  mainWindow.loadURL('https://web.whatsapp.com/', { userAgent });

  // Open external links in the default OS browser rather than inside the app
  mainWindow.webContents.setWindowOpenHandler(({ url }) => {
    if (url.startsWith('http')) {
      shell.openExternal(url);
    }
    return { action: 'deny' };
  });
};

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
