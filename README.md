#### [scss-for-miniprogram](https://github.com/RongMine/scss-for-miniprogram "地址")
自动将scss编译到小程序
#### 目录

![目录](http://pd0zb8hw9.bkt.clouddn.com/666.png "目录")

#### 开始

- 将项目放到和小程序同级
- 进入项目，运行yarn start即可

#### 命令

- yarn start ：编译并监听
- yarn build : 编译

#### output.config.js

- targetRoot: "miniprogram",//小程序根目录
- targetPages:"pages"//小程序页面目录


例：
   1. scss => index.scss  打包位置  miniprogram/pages/index/index.wxss
   2. scss => demo => pages =>index.scss 打包位置 miniprogram/pages/demo/pages/index/index.wxss