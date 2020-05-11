<!--
title: js数组去重,
categories: 技术,
path: /articleDetail,
comments: true,
photos: javascript,
date: 2018-10-08 20:03:06,
tags: ,
keywords: ,
description: 
-->

##### set去重
```js
var arr = [5,3,1,2,"c","a",3,4,5,"c",1,"b",2,"a",3,2,1,4,5]
  var newSet = new Set(arr)
  console.log([...newSet])

```
##### Array.prototype.includes()
```js
    var newArr = []
    for (var i of arr) {
      if (!newArr.includes(i)) {
        newArr.push(i)
      }
    }
    console.log(newArr)
```
##### 相邻元素去重
```js
var arr = [5,3,1,2,3,4,5,1,2,3,2,1,4,5]
var ar = arr.sort((a, b) => {
      return a - b;
    })
    for (var i = 0; i < ar.length; i++) {
      for (var j = 0; j < ar.length; j++) {
        if (ar[i] == ar[j + 1]) {
          ar.splice(i, 1)
        }
      }
    }
    console.log(ar)
```
##### Array.prototype.reduce()
```js
  var arr = [5,3,1,2,"c","a",3,4,5,"c",1,"b",2,"a",3,2,1,4,5]
  init = []
    var result = arr.sort().reduce((init, current) => {
      console.log(init, current)
      if (init.length === 0 || init[init.length - 1] !== current) {
        init.push(current);
      }
      return init;
    }, []);
    console.log(result)

```
##### 对象去重
```js
var arr = [5,3,1,2,"c","a",3,4,5,"c",1,"b",2,"a",3,2,1,4,5]
 var obj = {}
    for (var i of arr) {
      console.log(i)
      obj[i] = i
    }
    var brr = Object.values(obj)
    console.log(brr)
```
##### filter 去重
```js
var arr = [5,3,1,2,"c","a",3,4,5,"c",1,"b",2,"a",3,2,1,4,5]
 function unique(arr) {

      return arr.filter((item, index, brr) => {
        return brr.indexOf(item) === index
      })
    }
    console.log(unique(arr))
```
