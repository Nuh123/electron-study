 const electron= require("electron")
 const {app,BrowserWindow} = electron
 
// 引入两个模块，分别对应窗口和应用

let mainWin = null

// 应用监听准备好事件
app.on("ready", () => {
    console.log('主进程中的模块 \n',electron)
    // 实例化窗口
    mainWin = new BrowserWindow({
        width:400,
        height:600,
        webPreferences:{ 
            // 渲染进程中允许使用node
            nodeIntegration:true,
            // 渲染进程中允许使用remote模块
            enableRemoteModule:true,
        },
        
    })
    // 实例化后加载对应的页面
    mainWin.loadFile("index.html")
    // 监听关闭事件
    mainWin.on("closed",() => {
        mainWin = null
    })
})
