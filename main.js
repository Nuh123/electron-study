const console = require("console")
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

app.on("reday",function() {
    console.log('reday  事件')
})
app.on("dom-ready",function() {
    console.log('dom-ready  事件')
})
app.on("did-finish-load",function() {
    console.log('did-finish-load 事件')
})
app.on("window-all-closed",function() {
    console.log('window-all-closed  事件')
})
app.on("before-quit",function() {
    console.log('before-quit  事件')
})
app.on("quit",function() {
    console.log('quit  事件')
})
app.on("close",function() {
    console.log('close  事件')
})