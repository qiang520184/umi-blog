<!--
title: js中全等和等于,
categories: 技术,
path: /articleDetail,
comments: true,
date: 2019-06-17 11:51:32,
tags: ,
keywords: ,
description: ,
photos: javascript
-->

### js中的比较等于和全等


### 一、=一个等于号

```js
var a = 1;
var b = 2;
console.log(a, b); // 1  2
console.log(b = a);  // 1
``` 
js中一个等于号是一个赋值的过程 console.log(b=a) 怎么等与1呢 console.log的括号中 打印的是执行后的结果所以是1

### 二、==两个等于号

```js
var a = 1;
var b = '1';
console.log(a == b); //true

var obj = {};
var obj1 = {};
console.log(obj == obj1); // false

console.log([] == []); // false
console.log([] == ![]); // true

console.log({} == {}); //false
console.log({} == !{}); //false

console.log(+'1' == true); // true
console.log(-'1' == true)  // false
console.log(-'1' == false) // false

```

### 三、===三个等于号

```js
var obj = {};
var obj1 = {};
console.log(obj === obj1); // false

var a = {};
var b = a;
console.log(a === b); // true;

function fn1(){}
var p1=  new fn1();
var p2=  new fn1();
console.log(p1, p2);
console.log(p1 === p2); // false;


console.log([] === []); // false
console.log([] === ![]); // false

console.log({} === !{}); // false
console.log(-'1' === 1); // false
console.log(+'1' === 1); // true;
```