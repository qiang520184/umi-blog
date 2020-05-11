<!--
title: vue自定义过滤器,
categories: 技术,
path: /articleDetail,
comments: true,
photos: vue,
date: 2019-06-08 15:10:03,
tags: ,
keywords: ,
description: 
--->

### vue过滤器
Vue.js 允许你自定义过滤器，可被用于一些常见的文本格式化。过滤器可以用在两个地方：双花括号插值和 v-bind 表达式 (后者从 2.1.0+ 开始支持)。过滤器应该被添加在 JavaScript 表达式的尾部，由“管道”符号指示：

```js
    <!-- 在双花括号中 -->
    {{ message | filterName }}

    <!-- 在 `v-bind` 中 -->
    <div v-bind:id="rawId | filterFormatId"></div>
```

#### 一、全局过滤器

全局过滤器在vue实力之前，在vue根实力上注册

```js
<!-- main.js-->
Vue.filter('formatMsg', (value) => {
    if (!value) {
        return;
    }
    return value.replace('高大上', '辣鸡');
});
<!-- About.vue -->
<template>
    <div class="about">
        <h1>{{msg | formatMsg}}</h1>
    </div>
</template>
<script>
export default {
    name: 'About',
    data() {
        return {
            msg: 'About页的高大上过滤器'
        };
    }
};
</script>
```
#### 二、组件过滤器

组件过滤器就是在当前组件生效的过滤器

```js
<template>
    <div>
        <h3>{{msg}}</h3>
        <h3>{{msg | formatMsg}}</h3>
    </div>
</template>
<script>
export default {
    data() {
        return {
            msg: 'Home页的高大上过滤器'
        };
    },
    filters: {
        filterName: function (value) {
            if (!value) {
                return;
            }
            return value.replace('高大上', '辣鸡组件');
        }
    }
}
</script>
```
![photos](https://cdn.jsdelivr.net/gh/qiang520184/cdn@1.4.3/images/vue/1.png)

组件、全局相同名称的过滤器，组件过滤器优先级高

#### 三、过滤器传参

```html
<template>
    <div class="about">
        <h3>About页</h3>
        <h1>{{msg | formatMsg(params1, params2)}}</h1>
        <h1 v-my-html>{{msg | formatMsg(params1, params2)}}</h1>
    </div>
</template>
```
```js
<script>
export default {
    data() {
        return {
            msg: 'About页的高大上过滤器',
            params1: '高大上',
            params2: '辣鸡组件'
        };
    },
    directives: {
        myHtml: {
            inserted(el) {
                let left = /&lt;/g;
                let right = /&gt;/g;
                let htmlStr = el.innerHTML.replace(left, '<').replace(right, '>');
                el.innerHTML = htmlStr;
            }
        }
    },
    filters: {
        formatMsg(value, params1, params2) {
            if (!value) {
                return;
            }
            return value.replace(params1, `<span style=color:red;>${params2}</span>`);
        }
    }
};
</script>
```
`formatMsg(params1, params2)`传参在括号里面传参，管道符前面的变量是过滤器的默认参数,也是第一个参数,
![photos](https://cdn.jsdelivr.net/gh/qiang520184/cdn@1.4.3/images/vue/2.png)
过滤器`params2`参数,拼接了一个span标签但是在vue编译的时候没有把它变成我们想要的span标签。这个时候我们可以结合
<a href="https://www.fudaqiang.com/vue自定义指令.html" target="blank"><font color="red">vue自定义指令</font></a>对当前标签内的内容，进行进一步编译。达到我们最终想要的结果。
