const electron = require("electron")
const { app, BrowserWindow, Menu, BrowserView, globalShortcut } = electron
// 引入模块，分别对应用和窗口、菜单、浏览器视图

let mainWin = null

// 应用监听准备好事件
app.on("ready", () => {
    console.log('主进程中的模块 \n', electron)
    // 自定义菜单
    let menuTem = [
        {
            label: "主菜单一",
            submenu: [
                {
                    label: '子菜单1-1',
                    accelerator: "ctrl+g",
                    click: () => {
                        win = new BrowserWindow({ width: 200, height: 200 })
                        win.loadFile("test.html")
                        win.on("close", () => { win = null })
                    }
                },
                { label: '子菜单1-2' }
            ]
        },
        {
            label: "主菜单二",
            submenu: [
                { label: '子菜单2-1' },
                { label: '子菜单2-2' }
            ]
        },
    ]
    // 菜单的静态方法，用于构建MenuItem。
    let m = Menu.buildFromTemplate(menuTem)
    // 菜单的静态方法，将菜单实例设置为菜单栏。
    Menu.setApplicationMenu(m)
    // 实例化窗口
    mainWin = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            // 渲染进程中允许使用node
            nodeIntegration: true,
            // 渲染进程中允许使用remote模块
            enableRemoteModule: true,
        },

    })

    // 快捷键注册
    globalShortcut.register("ctrl+e", () => {
        mainWin.loadURL("http://baidu.com")
    })
    // 快捷键检测
    let isRegister = globalShortcut.isRegistered("ctrl+e") ? "register success" : "register fail"
    console.log('-------------------', isRegister)

    // 嵌入网页
    let view = new BrowserView()
    mainWin.setBrowserView(view)
    view.setBounds({ x: 0, y: 200, width: 1200, height: 800 })
    view.webContents.loadURL("https://jspang.com")

    // 代码直接开启开发者工具
    mainWin.webContents.openDevTools()
    // 实例化后加载对应的页面
    mainWin.loadFile("index.html")
    // 监听关闭事件
    mainWin.on("closed", () => {
        mainWin = null
    })
})

// 注销快捷键   这里是全局快捷键
app.on("will-quit", function () {
    globalShortcut.unregister("ctrl+e")
    globalShortcut.unregisterAll()
})
