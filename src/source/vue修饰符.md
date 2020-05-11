<!--
title: vue修饰符,
categories: 技术,
path: /articleDetail,
comments: true,
photos: vue,
date: 2019-05-28 15:49:14,
tags: ,
keywords: ,
description: 
-->

一个小demo 父组件通过 isShow 来控制子组件的显示隐藏
```js
<template>
    <div id="app">
        <input type="button"
               value="我是父组件中的按钮"
               @click="show">
        <child @is-show="childIsShow" v-show="isShow"/> 
    </div>
</template>
<script>
    import child from './child';
    export default {
        data() {
            return {
                isShow: false
            };
        },
        components: {
            child
        },
        methods: {
            show() {
                this.isShow = true;
            },
            childIsShow(val) {
                this.isShow = val;
            }
        }
    };
</script>
```

```js
    <div>
        我是一个子组件！
        <input type="button" value="点我隐身" @click="upIsShow">
    </div>
</template>
<script>
    export default {
        methods: {
            upIsShow() {
                this.$emit('is-show', false);
            }
        }
    };
</script>
```
子组件向父组件派发一个事件,父组件监听子组件派发的事件获取到内容修改 isShow, 达到显示隐藏
 
```js
<template>
    <div id="app">
        <input type="button"
               value="我是父组件中的按钮"
               @click="show">
        <child :is-show.sync="isShow" v-show="isShow"/> 
    </div>
</template>
<script>
    import child from './child';
    export default {
        data() {
            return {
                isShow: false
            };
        },
        components: {
            child
        },
        methods: {
            show() {
                this.isShow = true;
            }
        }
    };
</script>
```
父组件监听子组件的时候多加了一个修饰符.sync

.sync 其实是一个缩写 @update:isShow="val=>isShow=val"语法糖。

```js
<template>
    <div>
        我是一个子组件！
        <input type="button" value="点我隐身" @click="upIsShow">
    </div>
</template>
<script>
    export default {
        methods: {
            upIsShow() {
                this.$emit('update:is-show', false);
            }
        }
    };
</script>
```
子组件派发的事件前面多了一个`update:`
