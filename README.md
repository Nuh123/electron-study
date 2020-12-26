# 该分支基于 b 站某 electron 系列开发视频

## 视频链接如下

<a href="https://www.bilibili.com/video/BV16f4y1q7xz" target="blank">视频链接</a>

## 主题之外

1. `code .`此命令可用于在命令行所在文件夹被 vscode 打开。
2. **命令行字符集** 可输入`chcp`来查看,**936**是 GB2312 字符集，可能存在中文乱码问题。`65001`是 utf—8。

## 概述 electron

### 最重要的概念

主进程和渲染进程，和它们之间的通信。

### 什么是 electron

略

### electron 之外的桌面应用办法

- C#的 winform
- 微软的 WPF
- java 的 swing 和 javaFX

### electron 的优势

1. 前端友好
2. 方便 B 端和 C 端的风格统一
3. 可快速开发部分效率工具

## 开发准备

### 开发工具（vscode 插件）

略

### 开发环境

略
**nmp 源以及 yarn 的问题作为 node 问题再单独研究**

## 快速开始

### 文档阅读

1. 官方文档先快速浏览一遍
2. 官方有快速开始的 demo
3. 也有和框架结合的 electron—vue

### hello world

1. 代码上的问题再对应处，基本就是官网的 demo，与 jspang 相比换汤不换药。
2. **开启开发工具函数位置不重要**视频里强调的代码开启调试工具必须在窗口加载文件之前，在目前这个版本（11.3.0）不存在该该问题。（另，可通过`ctrl + shift + i`和菜单栏开始调试工具）
3. **关闭方式和启动速度无关**视频中建议使用菜单栏`window => close`方式关闭，说直接点关闭按钮启动会，但目前测试无差异。另开发模式下可`ctrl + c`关闭，不过需要两下。
4. 关于启动命令的配置 见 package 即可。另外非配置模式下在命令行需使用`npx electron .`,electron .不好使。（node 问题，单独研究）

## 生命周期

具体以官网为主，此处可能不准，也不全，看到官网似乎有 mac 特有的一些。另疑问，为什么部分周期在控制台没输出。

1. `reday` 应用完成初始化时触发
2. `dom-ready` 文本加载完出发
3. `did-finish-load` 导航完成时触发，即选项卡旋转器停止旋转，并指派 onload 事件。
4. `window-all-closed` 所有窗口都关闭时触发
5. `before-quit` 应用关闭窗口之前触发
6. `will-quit` 所有窗口都关闭，并应用退出时触发
7. `quit` 所有窗口关闭时触发
8. `closed` 窗口关闭时触发，此阶段应删除对窗口的引用

**控制台无法输出中文问题需在控制台输入 `chcp65001`**

## 进程对象

1. **两种进程都可使用** 可用与获取系统参数，如内存、版本、进程 ID 等。继承自 node 的`process`对象，做了增强。具体见文档
2. 强调两种区别`version`和`versions`。version 是 node 版本，versions 是一系列和开发相关的版本信息。其他对象需要时再研究。

## 主进程和渲染进程

没讲个啥

我自己的理解在这边觉得还是了解浏览器的工作原理之后就能接受，一直记着的一个问题，一个 tab 页的浏览器需要四个进程。

## 文件对象

1. 使用原生 H5 的**File**对象，依赖拖拽事件**drop**，主要是拖拽事件对象中的`dataTransfer.files`对象。
2. 还看了一下原生的 drop 事件对象，发现这部分就是单纯的原生玩法。对比了下原生的 File 对象，这里证实了官网所说的**path**属性是 electron 做的增强，以供 node 使用。
3. 应该算是 electron 之外的东西，**拖拽对象**中的 files 和**文件按钮（文件上传控件）**（有点词穷）本来就是一个体系的，前者不过是从用户体验角度优化出来的新方式。
4. 那现在 electron 有**三种**可用发起本地文件操作的方式 拖拽 、 按钮、 文件选择框。

## 快捷键

略（主要是视频没有讲到什么有用的，官网也没啥新发现）
