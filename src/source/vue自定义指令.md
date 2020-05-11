<!--
title: vue自定义指令,
categories: 技术,
path: /articleDetail,
comments: true,
date: 2019-06-09 13:52:01,
tags: ,
keywords: ,
photos: vue,
description: 
-->

### Vue自定义指令
<a href='https://www.fudaqiang.com/Vue指令.html' target='brank'>Vue指令</a>有很多,自己也可以根据业务逻辑抽象出来自己的指令
vue指令和vue过滤器很相似

#### 全局自定义指令

注册一个全局自定义指令 `v-focus`
<a href='https://www.fudaqiang.com/vue-filter自定义过滤器.html#一、全局过滤器' target='brank'>vue全局过滤器</a>

```js
Vue.directive('focus', {
    // 当被绑定的元素插入到 DOM 中时……
    inserted: function (el) {
        el.focus();
    }
})
<template>
    <input  v-focus type="text">
</template>
```

#### 组件自定义指令

注册一个组件自定义指令 `v-focus`
<a href='https://www.fudaqiang.com/vue-filter自定义过滤器.html#二、组件过滤器' target='brank'>vue局部过滤器</a>

```js
<template>
    <input  v-focus type="text">
</template>
<script>
export default {
    data() {
        return {
            msg: 'About页'
        };
    },
    directives: {
        focus: {
            // 指令的定义
            inserted: function (el) {
                // el是DOM元素input 你可以对当前input进行各种原生攻击
                el.focus();
            }
        }
    }
}
</script>
```
#### 自定义指令传参

虽然能拿到当前DOM，能进行各种DOM输出。操作总觉得少了点，花样也不够多，玩法也不够新颖，逼格还是缺点高度。
<a href='https://www.fudaqiang.com/vue-filter自定义过滤器.html#二、组件过滤器' target='brank'>vue过滤器传参</a>

```js
<template>
    <div class="about">
        <h3>About页</h3>
        <h1 v-my-html="{data: $data,getApi}">
            {{ text }}
        </h1>
        <ul v-if="dataList.length">
            <li v-for="(item, index) in dataList" :key="index">
                {{ item }}
            </li>
        </ul>
    </div>
</template>
<script>
import {mapActions, mapGetters} from 'vuex';
export default {
    data() {
        return {
            text: '哈哈哈哈哈哈'
        };
    },
    computed: {
        ...mapGetters([
            'user'
        ]),
        dataList() {
            return this.user.list;
        }
    },
    directives: {
        myHtml: {
            inserted(el, binding, VNode) {
                setTimeout(() => {
                    el.innerHTML = 'hahaha';
                    // binding.value.data.text = 'hahaha';
                    let date = new Date();
                    console.log(el.innerHTML, date.toLocaleString());
                }, 1000);
                setTimeout(() => {
                    el.innerHTML = 'xixixi';
                    // binding.value.data.text = 'xixixi';
                    // VNode.context.updateText(); 
                    // VNode.context.getApi();
                    let date = new Date();
                    console.log(el.innerHTML, date.toLocaleString());      
                }, 3000);
            },
            update(newValue, oldValue) {
                console.log(newValue, 'update');
                // 根据获得的新值执行对应的更新
            },
            unbind() {
                console.log('清理工作');
                // 当前组件销毁时执行 做清理工作
            }
        }
    },
    mounted() {
        console.log('mounted');
    },
    beforeUpdate() {
        console.log('--beforeUpdate');
    },
    updated() {
        console.log('--updated');
    },
    methods: {
        ...mapActions([
            'getApi'
        ]),
        updateText() {
            this.text = '嘻嘻嘻嘻嘻';
        }
    }
};
</script>
```
![zhiling](https://cdn.jsdelivr.net/gh/qiang520184/cdn@1.4.4/images/vue/zhiling.png);

用指令获取到当前DOM,对其修改DOM改变了。是不会触发vue两个生命周期`beforeUpdate` `updated`。
只有当vue data返回的数据或vuex数据发生改变的时候才会触发`beforeUpdate` `updated` 执行

### binding

`v-my-html="{data: $data,getApi}"` 自定义指令等号后面面是一个对象，key,value 键值对的形式传参
传过来的参数在指令第二个参数 `binding.value` 里面

### VNode
![zhiling](https://cdn.jsdelivr.net/gh/qiang520184/cdn@1.4.4/images/vue/VNodeContext.png);
![zhiling](https://cdn.jsdelivr.net/gh/qiang520184/cdn@1.4.4/images/vue/VNode.png);
指令第三个参数VNode，VNode就是虚拟DOM的js对象。 在指令中直接使用this是不行的， console.log(this)结果是`undefined`。 但是在VNode.context就当前组件的this对象。
你可以VNode.context 去执行 methods生命周期里面的函数,可以跳转路由。this能干的事情他都能干。

