const { Menu } = require("electron")

let menuItem = [
    {
        label: "主菜单一",
        submenu: [
            {
                label: '子菜单1-1',
                click: () => {
                    console.log("点击菜单")
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
let m = Menu.buildFromTemplate(menuItem)
Menu.setApplicationMenu(m)