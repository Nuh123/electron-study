const {app,BrowserWindow} = require("electron")
// 使用node处理路径问题
const path = require("path")

function creatWindow () {
    mainWin = new BrowserWindow({
        width: 500,
        height: 500,
        webPreferences:{
            nodeIntegration:true
        }
    })
    mainWin.loadFile(path.join("index.html"))
    // 与视频有出入，和顺序无关。
    mainWin.webContents.openDevTools()
}
let mainWin = null

// 新式的写法，与之前的app.on("ready")类似
// 另 promise的then方法会自己执行，不需要加括号。
app.whenReady().then(creatWindow)
// 关闭应用时的操作
app.on("window-all-closed",function() {
    mainWin= null
    app.quit()
})