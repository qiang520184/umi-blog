<!--
title: js深浅拷贝,
categories: 技术,
path: /articleDetail,
comments: true,
photos: javascript,
date: 2019-04-16 11:57:16,
tags: ,
keywords: ,
description: 
-->

## 扩展运算符

```js
    var obj = {
        a:1,
        b:2
    }
    var copyObj = obj
    obj.a = 222
    console.log(obj) //{a: 222, b: 2}
    console.log(copyObj) //{a: 222, b: 2}

```

浅拷贝：拷贝目标被修改，拷贝出来的变量也会改变，浅拷贝只是对其内存地址对引用。

深拷贝：拷贝目标被修改，拷贝出来的变量是不受影响的

1.扩展运算符深拷贝

```js
    var obj = {
        a:1,
        b:2
    }
    var copyObj = {...obj}
    obj.a = 222
    console.log(obj) //{a: 222, b: 2}
    console.log(copyObj) //{a: 1, b: 2}

    var arr = [1,2,4,6]
    var copyArr = [...arr]
    console.log(arr[0] = "123")
    console.log(arr)  //["123", 2, 4, 6]
    console.log(copyArr) //[1, 2, 4, 6]


```
1. Object.assgin()深拷贝
```js

```
```js
```
```js
```