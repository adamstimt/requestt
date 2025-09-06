const { app, BrowserWindow } = require("electron");

const createWindow = () => {
  const win = new BrowserWindow({
    width: 1080,
    height: 1920,
    frame: false,
    show: true,
    autoHideMenuBar: true,
  });

  win.loadFile("index.html");
};

app.whenReady().then(() => {
  createWindow();
});
