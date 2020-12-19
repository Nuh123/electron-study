# 该分支基于技术胖electron系列视频。

[视频地址](https://www.bilibili.com/video/BV177411s7Lt)


## electron的介绍

 略

## 开发环境的搭建 

1. 前提需要安装node和npm，我这node是**14.14.0**、npm是**7.5.4**.
2. 安装electron 我这跟视频一样，安装的**7.1.11**版本，倾向项目安装 `（npm i -D electron@7.1.11）`
3. 目前处于探索阶段，没有发现已知的版本之间的限制问题
4. 安装成功的标志， (项目安装) `npx electron -v`  或 `./node_modules/.bin/electron -v`弹出对应的版本号即为成功。
5. 这里试过，安装高版本的似乎没有问题，但安装7版本时，网络似乎有点问题，我这里不想改整个npm源为淘宝的，就只把项目npm源指向淘宝的了。（我这边nvm下我自己把npm文件挪动导致cnpm无法安装，所以才这么麻烦。）


## hello world 

1. 基于之前的工作，目前是已经可以跑起来electron的，使用`./node_modules/.bin/electron`,这是一个官方的demo。若全局安装electron的情况下，也可使用`electron .`或 `npx electron .`
2. 具体代码详见对应文件，main.js为最重要的文件，里面大致为app加载成功后实例化窗口，该窗口可以加载指定的html文件显示。
3. **启动命令** 在仅项目安装electron下，可使用`npx electron .`,全局安装下可使用`electron .`即可。（这应该属于node范畴知识）这里个人觉得项目安装更为合适，全局情况下使用全局命令可能会出现依旧只出现官方demo情况。
4. **入口文件名问题** 目前这边采用了先初始化npm模式(提交上是这样)，所以需要修改packjson中入口为`main.js`原来是index.js。也可以向我提交前一样，**先新建main.js再npm init**。
5. **补充** 应该是是文档看到，author和description对打包时必要的。且官网启动写法与该视频不一致。
webprefer
## 基础理论知识

### 代码
 这一节的代码感觉没什么用，最重要的就是webPreferences的使用，和node 的使用。

### electron运行流程
1. package.json 文件中找到入口文件，即main字段对应的文件，这里为main.js。
2. main.js 即为主进程，在主进程中创建渲染进程。
3. 渲染进程读取页面和布局并显示。
4. 渲染进程使用ipc在主进程执行任务并获取信息。

### 名词解释
1. 主进程  这里可以粗暴的认为主进程就是main.js。一个electron有且仅有一个主进程。
2. 渲染进程 这里可以粗暴的认为渲染进程就是index.html。可以有多个渲染进程，渲染进程里也可以有js操作。
3. 结合上两个名词，用浏览器直观理解就是，主进程类似于浏览器这个程序，渲染进程类似于tab页面。主进程和渲染进程之间有点类似于线程和进程之间的关系，但他们都是进程级别的。

### 两个进程

1. 模块不通用，有些在两个进程中都能使用，有些只能在特定进程中使用。
2. 目前本节只涉及到的差别在于要在渲染进程使用node语法需要在实例化窗口的时候设置`webPreferences` 的`nodeIntergration` 为true
