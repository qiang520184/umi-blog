<!--
title: vue组件的data为什么是函数而不是对象,
categories: 技术,
path: /articleDetail,
comments: true,
photos: vue,
date: 2019-05-08 11:08:53,
tags: ,
keywords: ,
description: Vue组件中为什么data是一个函数，为什么根实例的data是一个对象呢
-->

## Vue组件中为什么data是一个函数

当在组件中使用`data`属性的时候（除了new Vue 外的任何地方），它的值<font color="red">必须是返回一个对象的函数</font>。既然必须返回一个对象，为什么data不直接使用对象呢


    当data的值是一个对象时，它会在这个组件的所有实例之间共享。想象一下，假如一个 TodoList 组件的数据是这样的：
```js
Vue.component('some-comp', {
    data: {
        listTitle: '',
        todos: []
    }
})
```
我们可能希望重用这个组件，允许用户维护多个列表（比如购物、收藏、日常事务等）。这时就会产生问题。因为每个组件的实例都引用了相同的数据对象，更改其中一个列表的标题就会改变每一个组件的标题。增删改也是如此。<a href="https://www.fudaqiang.com/js基本数据类型和引用数据类型的区别.html" target="_blank">不懂就点我吧</a>

取而代之的是，我们希望每一个组件实例都管理着自己的数据，为了做到这一点，每个实例必须生成一个独立的数据对象。在javascript中，在一个函数中返回这个对象就可以了：

```js
Vue.component('some-comp', {
    data: function () {
        return {
            foo: 'bar'
        }
    }
})
```
### 为什么根实例的data是一个对象呢

```js
new Vue({
    data: {
        foo: 'bar'
    }
})
```
因为在Vue中只有一个实例，所以在vue的根实例上可以直接使用对象


<font color="red"></font>