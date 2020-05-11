<!--
title: vue组件开发props验证,
categories: 技术,
path: /articleDetail,
comments: true,
photos: vue,
date: 2019-05-08 14:51:53,
tags: ,
keywords: ,
description: 
-->

#### props为啥要验证一下
1. 它们写明了组件的API,所以很容易看懂组件的用法
2. 在开发环境中，如果向一个组件提供格式不正确的prop，Vue将会警告，可以帮助我们捕获潜在的错误来源。

### type

可以使用type来声明这个参数可以接受的数据的类型，当检查规则只有一个的时候type可以略写
type能够指定的类型
String、Number、Boolean、Functio、Object、Array、Symbol

```js
    props: {
        fooMessage: {
            type: Number,
        }
    }
```
### required

可以使用required选项来声明这个参数是否必须传入

```js
    props: {
        fooMessage: {
            type: Number,
            required: true
        }
    }
```
### default

使用default选项来指定当前父组件未传入参数时props变量的默认值

```js
    props: {
        fooMessage: {
            type: String,
            default: "我是默认信息"
        }
    }
```
> 当type的类型为Array或者Object的时候default必须是一个函数：

```js
    props: {
        fooMessage: {
            type: Array,
            default: function(){
                return ["yes", "no"];
            }
        }
    }
```
#### <font color="red">JS中对象和数组是引用类型，指向同一个内存空间，如果 props 是一个对象或数组，在子组件内部改变它会影响父组件的状态</font> <a href="https://www.fudaqiang.com/2019/05/07/js基本数据类型和引用数据类型的区别/" target="_blank">不懂就点我吧</a>

### validator

当效验规则很复杂，默认提供的效验规则无法满足的时候可以使用自定义函数来效验。

```js
props: {
    fooMessage: {
        validator: function(value){
            return value>=0 && value<=128;
        }
    }
}
```
### 一个综合的例子

```js
props: {
    // fooA只接受数值类型的参数
    fooA: Number,
    // fooB可以接受字符串和数值类型的参数
    fooB: [String, Number],
    // fooC可以接受字符串类型的参数，并且这个参数必须传入
    fooC: {
        type: String,
        required: true
    },
    // fooD接受数值类型的参数，如果不传入的话默认就是100
    fooD: {
        type: Number,
        default: 100
    },
    // fooE接受对象类型的参数
    fooE: {
        type: Object,
        // 当为对象类型设置默认值时必须使用函数返回
        default: function(){
            return { message: 'Hello, world' }
        }
    },
    // fooF使用一个自定义的验证器
    fooF: {
        validator: function(value){
            return value>=0 && value<=100;
        }
    }
}

```
