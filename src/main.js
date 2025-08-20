"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var electron_1 = require("electron");
var path = require("path");
var createWindow = function () {
    var win = new electron_1.BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(electron_1.app.getAppPath(), "src/preload.js"),
        }
    });
    win.setTitle('DreamJournal');
    win.loadFile('src/app.html');
    var template = [
        {
            label: 'File',
            submenu: [
                {
                    label: 'New File',
                    click: function () { return win.webContents.send("new-file", "new file"); }
                }
            ]
        }
    ];
    var menu = electron_1.Menu.buildFromTemplate(template);
    electron_1.Menu.setApplicationMenu(menu);
};
electron_1.app.whenReady().then(function () {
    createWindow();
});
