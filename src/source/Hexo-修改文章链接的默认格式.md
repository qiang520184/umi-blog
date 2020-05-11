<!--
title: Hexo-修改文章链接的默认格式,
categories: 技术,
path: /articleDetail,
comments: true,
photos: javascript,
date: 2019-05-08 14:40:19,
tags: ,
keywords: ,
description: 
-->

Hexo的永久链接的默认格式是 `:year/:month/:day/:title/`，比如访问站点下某一篇文章时，其路径是 `2018/04/12/xxxx/`，如果我们的文章标题是中文的，那么该路径就会出现中文字符。在路径中出现了中文字符很容易引发各种问题，而且也不利于seo，因为路径包含了年月日三个层级，层级太深不利于百度蜘蛛抓取。

解决办法就是利用其它的插件来生成唯一的路径，这样就算我们的文件标题随意修改，而不会导致原本的链接失效而造成站点下存在大量的死链。

### 安装插件

在站点根目录使用 git bash 执行命令：

npm install hexo-abbrlink --save

### 修改站点配置文件

打开根目录下的 _config.yml 文件，修改如下配置：

```json
# permalink: :year/:month/:day/:title/
# permalink_defaults:
permalink: :year/:abbrlink.html
abbrlink:
  alg: crc32  # 算法：crc16(default) and crc32
  rep: hex    # 进制：dec(default) and hex123456

```
这里将页面都添加了 .html 的后缀，用来伪装成静态页面(虽说Hexo的页面本身就是静态页面)，这样可以直接从路径就知道这是个静态页面，方便seo。

接下来重新部署三连，可以看到我们的文章路径变成了 /2018/xxxxx.html，接下来就算我们将文字标题命名为中文也没问题了。