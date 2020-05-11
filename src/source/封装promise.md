<!--
title: 封装promise,
categories: 技术,
path: /articleDetail,
comments: true,
date: 2019-05-29 21:26:58,
tags: ,
keywords: ,
photos: javascript,
description: 
</header>
-->

### 分析一下promise吧

1. promise 有三个状态 `pending` （准备状态）、`fulfilled`（成功状态）、`rejected`（失败状态） 并且状态是不可逆的
2. promise 接受一个函数作为参数函数包含（两个函数作为参数`resolve` `reject`）
3. promise 实例生成后，可以用then方法指定`resolve` 和` reject` 的回调函数
4. promise.then() 返回一个新的promise实例 如果.then接受的参数不是函数，那么它的结果就会放到下一次.then执行

###  一个很 low的promise调用一下看看吧
```js
class MyPromise {
    constructor(fn) {
        this.state = 'pending';
        this.value = null;
        this.successFnArray = [];
        this.errorFnArray = [];

        const resolve = res => { // resolve就做2件事情  1: 修改状态 2:调用successFn
            if (this.state !== 'pending') return; // 限制状态不可逆
            this.state = 'fulfilled';
            this.value = res;
            this.successFnArray.forEach(successFn => {
                successFn(res);
            });
        };
        const reject = err => { // reject就做2件事情  1: 修改状态 2:调用errorFn
            if (this.state !== 'pending') return; // 限制状态不可逆
            this.state = 'rejected';
            this.value = err;
            this.errorFnArray.forEach(errorFn => {
                errorFn(err);
            });
        };
        fn(resolve, reject);
    }
    then (successFn, errorFn) {
        if (arguments.length && typeof successFn === 'function' || typeof errorFn === 'function') {
            return new MyPromise((resolve, reject) => {
                const _successFn = res => {
                    resolve(successFn(res));
                };
                const _errorFn = err => {
                    reject(errorFn(err));
                };
                switch (this.state) {
                    case 'fulfilled':
                        _successFn(this.value);
                        break;
                    case 'rejected':
                        _errorFn(this.value);
                        break;
                    case 'pending':
                        this.successFnArray.push(successFn);
                        this.errorFnArray.push(errorFn);
                        break;
                }
            });
        }
        else {
            return new MyPromise((resolve, reject) => {
                const _successFn = res => {
                    resolve(res);
                };
                const _errorFn = error => {
                    reject(error);
                };
                switch (this.state) {
                    case 'fulfilled':
                        _successFn(this.value);
                        break;
                    case 'rejected':
                        _errorFn(this.value);
                        break;
                    case 'pending':
                        this.successFnArray.push(_successFn);
                        this.errorFnArray.push(_errorFn);
                        break;
                }
            });
        }
    }
}

let p = new MyPromise((resolve, reject) => {
    setTimeout(() => {
        resolve('resolve');
        // reject('reject');
    }, 2000);
});

p.then(12).then(res => {
    console.log(res);
}, err => {
    console.log(err);
}).then(res => {
    console.log(res);
}, err => {
    console.log(err);
});

```
是不是很spicy chicken  哈哈


