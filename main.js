const {app,BrowserWindow} = require("electron")
// 引入两个模块，分别对应窗口和应用

let mainWin = null

// 应用监听准备好事件
app.on("ready", () => {
    // 实例化窗口
    mainWin = new BrowserWindow({
        width:400,
        height:600,
        webPreferences:{
            nodeIntegration:true
        }
    })
    // 实例化后加载对应的页面
    mainWin.loadFile("index.html")
    // 监听关闭事件
    mainWin.on("closed",() => {
        mainWin = null
    })
})
