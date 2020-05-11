<!--
title: vue中将html字符串转换成html遇到的小问题,
categories: 技术,
path: /articleDetail,
comments: true,
date: 2019-05-24 20:14:55,
tags: ,
keywords: ,
description: ,
photos: vue
-->

例子

```js
    <template>
        <ul slot="suggestions" class="replay-dialog-list">
            <li v-for="(item,index) in arr"
                :key="index"
                v-html="item">
            </li>
        </ul>
    </template>
    import Axios from 'axios';
    <script>
        data() {
            return {
                arr: []
            };
        },
        methods: {
            getData() {
                Axios.get().then(data => {
                    data && data.length && data.forEach(item => {
                            let htmlStr = `<div>(${item.keyword.replace(item.keyword, `<span>${item.keyword}</span>`)})</div>
                                    <div>${item.departName}</div>`;
                            this.arr.push({
                                ...item,
                                htmlStr
                            });
                        }
                    });
                });
            }
        }
    </script>
```
