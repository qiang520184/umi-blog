<!--
title: 节流throttle,
categories: 技术,
path: /articleDetail,
comments: true,
photos: javascript,
date: 2019-04-20 18:31:40,
tags: ,
keywords: ,
description: 
-->

```js

  function throttle(fn, wait) {
      let timer = null;
      return function () {
        if (timer) return
        timer = setTimeout(() => {
          fn()
          timer = null
        }, wait)
      };
    };
    function fn() {
      console.log(11)
    }
    setInterval(throttle(fn, 2000), 100);

    setInterval(()=>{
        console.log("12")
    },1000);
```