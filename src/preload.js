"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
electron_1.contextBridge.exposeInMainWorld("electronAPI", {
    new_file: (callback) => electron_1.ipcRenderer.on("new-file", (event, fileName) => callback(fileName))
});
//# sourceMappingURL=preload.js.map