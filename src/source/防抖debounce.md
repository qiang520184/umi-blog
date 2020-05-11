<!--
title: 防抖debounce,
categories: 技术,
path: /articleDetail,
comments: true,
photos: javascript,
date: 2019-04-20 18:32:43,
tags: ,
keywords: ,
description: 
-->

```js
 function debounce(fn, wait) {
      var timer = null;
      return function () {
        if (timer !== null){
          clearTimeout(timer);
           timer = null;
        } 
        timer = setTimeout(fn, wait);
      }
    }
```