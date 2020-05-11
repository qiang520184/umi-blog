<!--
title: CommonJS、AMD、CMD、ES6,
categories: 技术,
path: /articleDetail,
comments: true,
photos: javascript,
date: 2019-04-08 19:47:28,
avatar: ,
tags: ,
keywords: ,
description: 
-->

<!-- ![](https://user-gold-cdn.xitu.io/2018/12/16/167b650e8d1fcc23?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)  -->

## <font color=＃409EFF> 前端模块化：CommonJs、AMD、CMD、ES6 </font>

#### <font color=#00ffff> 模块化的好处： </font>

模块化的开发可以提升代码的可复用性，方便进行代码的管理。通常一个文件就是一个模块，有自己的作用域，只向外暴露特定的变量和函数。目前流行的js模块化规范有CommonJS、AMD、CMD、以及ES6的模块系统。
### 一、CommonJs

node.js是commonJS规范的主要实践者，它有四个重要的环境变量位为模块化的实现提供支持：         <font color=red>module、exports、require、global</font>。实际使用时，用module.exports定义当前模块对外输出的接口(不推荐直接用exports)，用require加载模块。

```js
//定义模块math.js
var num = 0;
function add(a, b){
    return a + b;
}
module.exports = { //在这里写需要向外暴露的函数、变量
    add:add,
    num
}
//引用自定义的模块时，参数包含路径，可省略.js
var math = require('./math')
math.add(2,5) //7

//引用node-module包时，不需要带路径
var http = require('http')
http.createService(()=>{

}).listen(3000)
```
CommonJS用同步的方法加载模块。在服务端，模块文化都存在本地磁盘，读取速度非常快，所以这样做不会有问题。但是在浏览器端，限于网络原因，更合理的方案是使用异步加载。

## 二、AMD和require.js
AMD规范采用异步方式加载模块，模块的加载不影响它后面的语句运行。所有依赖这个模块的语句，都定义在一个回调函数中，等到加载完成之后，这个回调函数才会运行。这里介绍require.js实现AMD规范的模块化：用<font color=red>require.config()</font>指定引用路径等，用<font color=red>define()</font>定义模块，用<font color=red>require()</font>加载模块。
首先我们需要引入require.js文件和一个入口文件main.js中配置<font color=red>require.config()</font>并规定项目中用到等基础模块

```js
/*网页中引入ruire.js及main.js*/
<script src="require.js" data-main="js/main"></script>
/* main.js 入口文件/主模块*/
require.config({
    baseUrl: "js/lib", //基路径
    path:{
        "jquery":"jquery.min", //实际路径js/lib/jquery.min.js
        "underscore":"underscore.min"
    }
});
// 执行基本操作
require(["jquery","underscore"],function($,un){
    //some code here
})
```
引用模块的时候，我们将模块名放在<font color=red>[]</font>中作为<font color=red>require()</font>的第一个参数；如果我们定义的模块本身也依赖其他模块，那就需要将他们放在<font color=red>[]</font>中作为<font color=red>define()</font>的第一个参数。

```js
    //定义math.js
    define(function(){
        var basicNum = 0;
        var add = function(x, y){
            return x + y;
        };
        return {
            add: add,
            basicNum: basicNum
        };
    });
    //定义一个依赖underscore.js 模块
    defind(['underscore'],function(nu){
        var classify = function(list){
            nu.conntBy(list,function(num){
                return num > 30 ? 'old' : 'young';
            })
        };
        return{
            classify: classify
        };
    })
    //引用模块，将模块放在[]内
    require(['jquery','math'],function($,m){
        var sum = math.add(1,2);
        $("#box").html(sum)
    });
```
# 三、CMD和sea.js
require.js在申明依赖的模块时会在第一之间加载并执行模块内的代码：
```js
    define(['a','b','c'],function(a,b,c){
        //在最前面声明并初始化了要用到的所有模块
        if(false){
            //即便没用到某个模块，b 但在声明 b 时已经提前执行了
            b.foo()
        }
    })
```
CMD是另一种js模块化方案，它于AMD很类似，不同点在于：AMD推崇依赖前置、提前执行，CMD推崇就近、延迟执行。此规范其实是在sea.js推广过程中产出的


```js
//AMD写法
 define(['a','b','c'],function(a,b,c){
        //在最前面声明并初始化了要用到的所有模块
        if(false){
            //即便没用到某个模块，b 但在声明 b 时已经提前执行了
            b.foo()
        }
    })
//CMD写法 
// 定义模块 math.js
define(function(require,export,module){
    var $ = require('jquery');
    var add = function(a,b){
        return a + b;
    }
    exports.add = add;
})
//加载模块
seajs.use(['math.js'],function(math){
    var sum = math.add(1,2)
})
```
#  AMD与CMD - 真正的不同 还是执行时间

```js
// AMD recommended
define(['a', 'b'], function(a, b){
    a.doSomething();    // 依赖前置，提前执行
    b.doSomething();
})

// CMD recommanded
define(function(require, exports, module){
    var a = require("a");
    a.doSomething();
    var b = require("b");
    b.doSomething();    // 依赖就近，延迟执行
})
```
# 四、ES6 Module
ES6在语言标准的层面上，实现了模块功能，而且实现的相当简单，只为成为浏览器和服务器通用的模块定义方案。其模块功能主要由两个命令构成：<font color=red>export</font>和<font color=red>import</font>。<font color=red>export</font>命令用于规定模块的对外接口，<font color=red>import</font>命令用于输入其他模块提供的功能。

```js
    /** 定义模块 math.js **/
    var basicNum = 0
    var add = function(a,b){
        return a + b; 
    };
    export {basicNum, add};

    // 抛出变量
    export var PI = 3.14;
    export var bar = foo; 

    //抛出 函数
    export function foo(){
        console.log('I am not bar.');
    }

    //默认抛出 一个js文件只能有一个默认抛出
    export default (a, b)=>{
        return a + b
    }

    /** 引用模块 **/
    import{basicNum, add } from './math';
    function test(el){
        el.innerHTML = add(1,basicNum);
    }

    import { foo as bar } from "./math"; //as 设置别名
    bar(); 

    import * as math from "./math"; //*所有抛出 都配置到 math身上
    math.PI
    math.foo()

```
如上例所示，使用<font color=red>import</font>命令的时候，用户需要知道所要加载的变量名或函数名。其实ES6还提供了<font color=red>export default</font> 命令，为模块指定默认输出，对应的import语句不需要使用大括号。这也更趋近于ADM的引用写法。

# 五、 ES6 模块与 CommonJS 模块的差异
#### 1. CommonJS模块输出的是一个值的拷贝，ES6模块输出的是值的引用。
* CommonJS 模块输出的是值的拷贝，也就是说，一旦输出一个值，模块内部的变化就影响不到这个值。
* ES6 模块的运行机制与 CommonJS 不一样。JS 引擎对脚本静态分析的时候，遇到模块加载命令<font color=red>import</font>，就会生成一个只读引用。等到脚本真正执行时，再根据这个只读引用，到被加载的那个模块里面去取值。换句话说，ES6 的<font color=red>import</font>有点像 Unix 系统的“符号连接”，原始值变了，<font color=red>import</font>加载的值也会跟着变。因此，ES6 模块是动态引用，并且不会缓存值，模块里面的变量绑定其所在的模块。

#### 2. CommonJS模块是运行时加载，ES6模块是在编译时输出接口
* 运行时加载: CommonJS 模块就是对象；即在输入时是先加载整个模块，生成一个对象，然后再从这个对象上面读取方法，这种加载称为“运行时加载”。
* 编译时加载: ES6 模块不是对象，而是通过  <font color=red>export</font> 命令显式指定输出的代码， <font color=red>import </font>时采用静态命令的形式。即在 <font color=red>import</font>时可以指定加载某个输出值，而不是加载整个模块，这种加载称为“编译时加载”。

CommonJS 加载的是一个对象（即<font color=red>module.exports</font>属性），该对象只有在脚本运行完才会生成。而 ES6 模块不是对象，它的对外接口只是一种静态定义，在代码静态解析阶段就会生成。

 <font color=red></font>