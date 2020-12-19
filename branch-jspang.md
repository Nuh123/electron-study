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
