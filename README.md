# 该分支基于 b 站某 electron 系列开发视频

## 视频链接如下

<a href="https://www.bilibili.com/video/BV16f4y1q7xz" target="blank">视频链接</a>

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
