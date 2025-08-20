import { contextBridge, ipcRenderer } from 'electron'

contextBridge.exposeInMainWorld("electronAPI", {
    new_file: (callback) => ipcRenderer.on("new-file", (event, fileName:string) => callback(fileName))
});