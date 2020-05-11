<!--
title: vue指令,
categories: 技术,
path: /articleDetail,
comments: true,
photos: vue,
date: 2019-04-08 22:16:33,
tags: ,
keywords: ,
description: 
-->

## Vue 指令

### 1、插值表达式

插值表达式就是以**双重大括号** ，类似 { `{msg}` }  的形式插入到 html 代码中。

> 1、插值表达式还可以进行简单的运算（比如加减乘除等），但是不能完全放置js代码。
>
> 2、插值表达式只能放在标签之间，而不能放在标签内部。



### 2、v-cloak

在 使用 {`{ msg }`} 的方式插入数据的时候，如果网速特别慢的话，  {`{ msg }` } 所代表的值不会立即显示出来，而会显示  {{ msg }} 这个字符串本身，怎么解决这个问题呢？

**使用 v-cloak 和 CSS 表达式结合，能够解决插值表达式闪烁的问题，这样会在网络未加载完时，不显示字符串本身。**

示例：

```html
<style>
  [v-cloak] {
    display: none;
  }
</style>
...
<p v-cloak> {`{ msg }`} </p>
```



### 3、v-text

默认 v-text 是没有闪烁问题的，但是 v-text 会覆盖元素中原本的内容，而 v-cloak 只会替换插值表达式，不会把 整个元素的内容清空。

```html
<span v-text="msg"></span>
```



### 4、v-html 

**v-text 知识插入的纯文本格式内容，而 v-html 可以插入为 html 标签的代码，并解析出来。**

```html
<span v-html="msg"></span>
...
data: {
  msg: '<h1>哈哈，我是一个大大的H1， 我大，我骄傲</h1>'
},
```



### 5、v-bind

v-bind 是 Vue中，提供的用于**绑定属性**的指令。**将一个属性的值变成动态值。**

>   注意： `v-bind:` 指令可以被简写为` : `

```html
<input type="button" value="按钮" v-bind:title="mytitle + '123'">
...
data: {
  mytitle: '这是一个自己定义的title'
},
```

> title 里面的内容就不是字符串了，而是会将 data 中的变量进行替换得到一个字符串整体。



### 6、v-on

v-on ：给某个元素绑定事件监听函数。注意，函数必须封装在methods内。

>   注意：` v-on:` 指令可以被简写为`@`

```html
<input type="button" value="按钮" :title="mytitle + '123'" v-on:click="show">
...
data: {
  mytitle: '这是一个自己定义的title'
},
methods: { // 这个 methods属性中定义了当前Vue实例所有可用的方法
  show: function () {
  	alert('Hello')
  }
}
```

### 7、v-model


v-bind 只能实现数据的单向绑定，从 M 自动绑定到 V（即修改 data 的数据，自动同步到 html）， 无法实现数据的双向绑定。

使用 v-model 指令，可以实现 表单元素和 Model 中数据的双向数据绑定（不仅可以修改 data 的数据，自动同步到 html，也可以修改 html 的代码，同步到 data 数据）。

>   注意： `v-model` 只能运用在 表单元素中。


### 8、v-for


8.1、v-for 循环普通数组

我们之前如果要循环赋值给 p 标签 data中 list=[1,2,3,4,5,6]; 数组的话，会这样写：
```html

<body>
    <div id="app">
        <p>{{list[0]}}</p>
        <p>{{list[1]}}</p>
        <p>{{list[2]}}</p>
        <p>{{list[3]}}</p>
        <p>{{list[4]}}</p>
    </div>
 
    <script>
        var vm = new Vue({
            el: '#app',
            data: {
                list: [1, 2, 3, 4, 5, 6]
            },
            methods: {}
        });
    </script>
</body>
```
这样的话，就会很繁琐。而 `v-for` 会提供循环遍历 list 数组来给 p 标签赋值。如下：

```html
<body>
    <div id="app">
        <p v-for="(item, i) in list">索引：{{i}} -- 项：{{item}}</p>
        <!-- 索引：0 -- 项：1
               索引：1 -- 项：2
               索引：2 -- 项：3
               索引：3 -- 项：4
               索引：4 -- 项：5
               索引：5 -- 项：6 -->
    </div>
 
    <script>
        var vm = new Vue({
            el: '#app',
            data: {
                list: [1, 2, 3, 4, 5, 6]
            },
            methods: {}
        });
    </script>
</body>
```

8.2、v-for 循环对象数组

```html
<body>
  <div id="app">
    <p v-for="(user, i) in list">Id：{{ user.id }} -- 名字：{{ user.name }} -- 索引：{{i}}</p>
  </div>
 
  <script>
    var vm = new Vue({
      el: '#app',
      data: {
        list: [
          { id: 1, name: 'zs1' },
          { id: 2, name: 'zs2' },
          { id: 3, name: 'zs3' },
          { id: 4, name: 'zs4' }
        ]
      },
      methods: {}
    });
  </script>
</body>

```

8.3、v-for 循环对象

```html
<body>
  <div id="app">
    <!-- 注意：在遍历对象身上的键值对的时候， 除了 有  val  key  ,在第三个位置还有 一个 索引  -->
    <p v-for="(val, key, i) in user">值是： {{ val }} -- 键是： {{key}} -- 索引： {{i}}</p>
  </div>
 
  <script>
    var vm = new Vue({
      el: '#app',
      data: {
        user: {
          id: 1,
          name: 'Tony Stark',
          gender: '男'
        }
      },
      methods: {}
    });
  </script>
</body>
```

8.4、v-for 循环数字

```html
<body>
  <div id="app">
    <!-- in 后面我们放过普通数组，对象数组，对象，还可以放数字 -->
    <p v-for="count in 10">这是第 {{ count }} 次循环</p>
  </div>
 
  <script>
    // 创建 Vue 实例，得到 ViewModel
    var vm = new Vue({
      el: '#app',
      data: {},
      methods: {}
    });
  </script>
</body>

```

> 注意：如果使用 `v-for` 迭代数字的话，前面的 count 值从 1 开始。


8.5、v-for 循环 key 属性

key 属性可以使得每一遍历的项是唯一的。

```html
<body>
  <div id="app">
 
    <div>
      <label>Id:
        <input type="text" v-model="id">
      </label>
 
      <label>Name:
        <input type="text" v-model="name">
      </label>
 
      <input type="button" value="添加" @click="add">
    </div>
 
    <!-- 注意： v-for 循环的时候，key 属性只能使用 number或者string -->
    <!-- 注意： key 在使用的时候，必须使用 v-bind 属性绑定的形式，指定 key 的值 -->
    <!-- 在组件中，使用v-for循环的时候，或者在一些特殊情况中，如果 v-for 有问题，必须在使用 v-for 的同时，指定 唯一的 字符串/数字 类型 :key 值 -->
    <p v-for="item in list" :key="item.id">
      <input type="checkbox">{{item.id}} -- {{item.name}}
    </p>
  </div>
 
  <script>
    // 创建 Vue 实例，得到 ViewModel
    var vm = new Vue({
      el: '#app',
      data: {
        id: '',
        name: '',
        list: [
          { id: 1, name: '李斯' },
          { id: 2, name: '嬴政' },
          { id: 3, name: '赵高' },
          { id: 4, name: '韩非' },
          { id: 5, name: '荀子' }
        ]
      },
      methods: {
        add() { // 添加方法
          this.list.unshift({ id: this.id, name: this.name })
        }
      }
    });
  </script>
</body>

```

### 9、v-if/v-show

v-if 和 v-show 都可以控制元素的显示与否。但是实现原理不同。

v-if：决定某些元素是否存在 (加载性能更高,某个元素不需要被频繁切换时,则应该使用v-if)

v-show：决定某些元素是否显示 (操作性能更高,如果某个元素需要被频繁切换,则应该使用v-show)

> `v-if`：每次都会重新删除或创建元素。
  `v-show` ： 每次不会重新进行DOM的删除和创建操作，只是切换了元素的 display:none 样式。

所以，如果元素涉及到频繁的切换，最好不要使用 v-if, 而是推荐使用 v-show；

如果元素可能永远也不会被显示出来被用户看到，则推荐使用 v-if。

```html
<h3 v-if="true">这是用v-if控制的元素</h3>
<h3 v-show="true">这是用v-show控制的元素</h3>

```
> 有了v-if就有v-else-if和v-else  
  v-if和v-show指令中除了可以放简单的值外，还可以放表达式

```html

<h3 v-if="age < 18">这是用v-if控制的元素</h3>    <!--age是data中的一个属性-->
<h3 v-else-if="age < 28">这是用v-if控制的元素</h3>    
<h3 v-else>这是用v-if控制的元素</h3> <!--v-else不用写条件-->

```
> 注意：v-if和v-else-if和v-else之间，不要加任何其他元素，否则会报错。