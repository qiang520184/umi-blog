<!--
title: git知多少,
categories: 技术,
path: /articleDetail,
comments: true,
date: 2019-05-29 18:02:54,
tags: ,
keywords: ,
description: ,
photos: git
-->

## git

git使用之前是需要安装的

### git的安装

1. windows 安装[点击这里](http://git-scm.com/download)直接下载安装器。下载完成一路next.... ok齐活了。
2. mac 安装git比较有意思。macOS系统有一个小彩蛋。command + 空格。搜索终端并打开终端，直接输入 git init 然后轻击一下回车。一点也不神奇的东西出来了
   系统就会给你弹出一个git 安装器。还是一样的next。你的mac就获得了git 全部属性加持。勇士去战斗吧。

### 创建版本库

git init   #初始化本地版本库
    git init 完之后会生成一个.git 的文件。如果你看不见.git后缀的文件，请你先擦亮你的眼睛和眼镜。
1. mac 按下 shift + command + .  就能看到电脑的隐藏文件了。有私密信息的同志请在按一下隐藏起来，以免有损你的形象。
2. windows 呵呵了 windows好吧 显示隐藏文件有很多
   1. XP系统  先打开 '我的电脑' 窗口上方有一个'工具' 工具里面有个 '文件夹选项' > '查看' > '隐藏文件和文件夹' 最后点击一下 '应用到所有文件夹'
   2. win7系统  打开 '我的电脑' '组织' > '文件夹和搜索选项' > '查看' > '隐藏文件和文件夹' 最后点击一下 '应用到所有文件夹'
   3. win10系统 打开 '此电脑‘ > '查看' > 点一下 '平铺'  就能查看到 '隐藏文件和文件夹'了
   
git clone url 克隆远程版本库

### 修改和提交

1. git status   查看状态
2. git diff     查看变更内容
3. git add .    跟踪所有改动过的文件
4. git add 'file' 跟踪指定的文件
5. git mv 'old' 'new' 文件改名
6. git rm 'file' 删除文件
7. git rm --cached 'file'  停止跟踪文件但不删除
8. git commit -m 'message' 提交所有更新过的文件
9. git commit --amend 修改最后一次提交
    
### 查看提交历史

1. git log  查看提交历史
2. git log -p 'file' 查看指定文件的提交历史
3. git blame 'file'  以列表方式查看指定文件的提交历史
   
### 撤销

1. git reset --hard HEAD 撤销工作目录中所有未提交文件的修改内容
2. git checkout HEAD 'file' 撤销指定的为提交文件的修改内容
3. git revert `<commit>`  撤销指定的提交

### 分支与标签

1. git branch  显示所有本地分支
2. git checkout `<branch/tag>`  切换到指定分支或标签
3. git branch  `<new-branch>`   创建新分支
4. git branch  -d `<branch>`    删除本地分支
5. git tag    列出所有本地标签
6. git tag `<tag name>`  基于最新提交创建标签
7. git tag -d `<tag name>`  删除标签
   
### 合并与衍合
 
1. git merge `<branch>`  合并指定分支到当前分支
2. git rebase `<branch>`  衍合指定分支到当前分支

### 远程操作

1. git remote -v   查看远程版本库信息
2. git remote show `<remote>` 查看指定远程版本库信息
3. git remote add `<remote>` `<url>` 添加远程版本库
4. git fetch `<remote>`  从远程库获取代码
5. git pull `<remote>` `<branch>` 下载代码及快速合并
6. git push `<remote>` `<branch>` 上传代码及快速合并
7. git push `<remote>` :`<branch/tag-name>` 删除远程分支或标签
8. git push --tags 上传所有标签
