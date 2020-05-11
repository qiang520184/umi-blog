<!--
title: js数组排序,
categories: 技术,
path: /articleDetail,
comments: true,
date: 2019-06-02 13:33:37,
tags: ,
keywords: ,
description: ,
photos: javascript
-->

### <font color="red">sort排序</font>
```js
    let arr = [1,2,4,6,9,4,2,4];
    let brr = arr.sort((a, b) => {
        return a - b;
    })
    console.log(brr);

    // let arr = [1,2,4,6,9,4,2,4];
    // let brr = arr.sort();
    // console.log(brr);
```
### <font color="red">水桶排序</font>

```js
    var arr = [19,8,47,34,78,95,64,22,50,88];
    var max = Math.max.apply(false,arr); //找出arr数组中的最大值
    var brr = new Array(max);  //创建水桶数组
    for(var i = 0;i<arr.length;i++){
      brr[arr[i]] = arr[i];
    }
    brr = Object.values(brr);
    console.log(brr);
```

### <font color="red">冒泡排序</font>

```js
    var arr = [19,8,47,34,78,95,64,22,50,88];
    var len = arr.length, num;
    for (let i = 0; i < len; i++) {
        for(let j = 0; j < len - (i + 1); j++) {
            if (arr[j] > arr[j + 1]) {
                var num = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = num;
           }

       }
   }
   console.log(arr);
```

### <font color="red">时间排序</font>

一切都交给时间，时间会给你答案。`谨慎使用!!!`

```js
    var arr = [19,8,47,34,78,95,64,22,50,88];
    var brr = [];
    arr.forEach(item => {
        setTimeout(function (){
            brr.push(item)
        },item*100)
    })    
```
