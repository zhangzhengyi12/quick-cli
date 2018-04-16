# QUICK CLI #

<p>
<img src="https://img.shields.io/badge/npm-5.51-green.svg"></img>
<img src="https://img.shields.io/badge/node-v8.9.3-blue.svg"/>
<img src="https://img.shields.io/badge/Power%20By-gulp-red.svg"/>
<img src="https://img.shields.io/apm/l/vim-mode.svg" />
</p>

前端开发环境的脚手架工具，Gulp + express。

其对应的目标项目类型：**小型**，**多页**，**小团队**，纯**静态**页面的开发。希望可以提升你的开发效率

## Usage ##

### STEP 1 ###

> git clone git@github.com:zhangzhengyi12/quick-cli.git

### STEP 2 ###

> cd quick-cli

> npm run init

OR use cnpm 

> npm run cinit

### STEP 3 ###

> npm run dev


## 指南 ##

### 起步 ###

本环境利用了gulp(自动化) + experss(服务器)。你可以任意更改，比如将预编译语言stylus修改为less。

### pages ###

所有页面将保存在`src/pages`下，请不要在内部创建二级或多级目录结构，页面中的资源引用将会全部以`/static`起始

###  include ###

允许将一些文件片段放置到include目录下，比如HTML的某个头部模块，方便在各个页面中引用。遵循DRY原则，方便后续的更改 TIPS: 如果使用if语句来自动增加active样式，请将if语句放置在默认样式前

```html

<li @@if(true){class="active item"} class="item">
      <a href="/">HOME</a>
    </li>

```

### stylus ###

默认使用stylus为预编译CSS，`src/static/css`下面的所有styl文件将会被` 编译 > 合并 > 自动前缀 > 压缩 `其最终被合并成一个main.min.css文件，方便后端引用，减少HTTP请求。（因为其目标为中小型项目，一般的CSS合并起来都会很小，不需要分块按需加载）,当然压缩只在非dev下运行

### script ###

没有使用ES6（小型项目一般不需要承载过多的业务逻辑，一般以静态页面+轻微动态交互为主，所以ES5也OK）, ` 压缩 ` , 为了方便在不同的页面内引用不同的JS，没有进行脚本的合并，当然你可以很方便的自行添加合并功能，在pipe中增加一个concat即可。


### iamges ###

图片只做简单的移动+压缩处理

### fonts ###

简单移动

### global ###

请将所有全局引用的资源，如mainfest,网站图标等引入global文件夹中。

### 自动刷新 ###

默认带有自动监听文件>编译>刷新功能，默认监听js,html,css,如需要监听图片字体等，请修改`  taks/browser.js `

### 引用库 ###

添加到`src/static/vendor/`目录下，为了更好的扩展，不做压缩合并等功能，仅仅是移动


如果它帮助到了你，请给个`star`，如果有任何bug 请提出`issues`


### TODO ###

增加对于vendor里fonts的支持，对js不做合并，对fileinclude做错误处理

应该对绝大部分任务做错误处理，否则中断的体验会很差！


## CHANGE LOG ##

v1.1.0 

修复了fileinclude的错误处理，关闭了JS的自动合并，改为单纯转移，方便灵活调用，并对vendor/fonts做了支持。

v1.1.1

修复了样式无法正确刷新的问题，主要原因是没有对最终成品进行刷新！

v1.1.2

增加了自动打开浏览器的功能

v1.1.3

增加自动文件时间戳的功能，主要编写在pages.js上

TIPS 需要手动在需要开启时间戳的引入路径末尾加上

```html
<link rel="stylesheet" href="/static/css/main.min.css?rev=@@hash">
```

v1.1.3

增加HTML自动格式化，以便后台查看抽离