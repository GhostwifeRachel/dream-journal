import { app, clipboard, dialog, Menu, BrowserWindow } from 'electron';
import * as path from 'path';

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(app.getAppPath(), "src/preload.js"),
    }
  })
  win.setTitle('DreamJournal')

  win.loadFile('src/app.html')

  const template = [
    {
      label: 'File',
      submenu: [
        {
          label: 'New File',
          click: () => win.webContents.send("new-file", "new file")
        }
      ]
    }
  ]

  const menu = Menu.buildFromTemplate(template)
  Menu.setApplicationMenu(menu)
}

app.whenReady().then(() => {
  createWindow()
})