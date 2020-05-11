const fs = require('fs');
const path = require('path');
const ArticleListFile = './src/config/user/ArticleList.json';
const ArticleFile = './src/config/user/Article.js';

let mdData = {
    '技术': {},
    '生活': {},
    '资源': {},
    '随想': {},
    '转载': {}
};
let ArticleList = [];
let mdPath = './src/source';
let data = fs.readdirSync(mdPath, 'utf-8');
data && data.length && data.forEach(item => {
    let filePath = path.join(mdPath, item);
    let str = fs.readFileSync(filePath, 'utf-8');
    str = str.slice(str.indexOf('<!--') + 4, str.indexOf('-->')).replace(/\n/g, ',');
    let strArr = str.split(',');
    let obj = {};
    strArr && strArr.length && strArr.forEach(item => {
        let arr = item.split(':');
        if (arr[0]) {
            if (arr[0] === 'date') {
                obj[arr[0]] = new Date(item.slice(5, -1)).getTime();
            } else {
                obj[arr[0]] = arr[1] && arr[1].trim();
            }
        }
    });
    ArticleList.push(obj);
    switch (obj.categories) {
        case '技术':
            mdData['技术'][obj.date] = obj;
            break;
        case '生活':
            mdData['生活'][obj.date] = obj;
            break;
        case '资源':
            mdData['资源'][obj.date] = obj;
            break;
        case '随想':
            mdData['随想'][obj.date] = obj;
            break;
        default:
            mdData['转载'][obj.date] = obj;
            break;
    }
});
let ArticleSort = ArticleList.sort((a, b) => a.date < b.date ? 1 : -1);
fs.writeFile(ArticleListFile, JSON.stringify(ArticleSort, null, '\t'), 'utf8', (err => {
    if (err) {
        console.log(err);
    }
}));
fs.writeFile(ArticleFile, JSON.stringify(mdData, null, '\t'), 'utf8', (err => {
    if (err) {
        console.log(err);
    }
}));

// let a = {
//     [Symbol.toPrimitive]: (function(hint) {
//         console.log(hint);
//         let i = 1;
//         return function() {
//             return i++;
//         };
//     })
// };
// let i = 1;
// let a = new Proxy({}, {
//     i: 1,
//     get: function() {
//         return i++;
//     }
// });
// let a = [1, 2, 3];
// //a.join = a.shift;

// if (a == 1 && a == 2 && a == 3) {
//     console.log('hahahhahahahahah');
// } else {
//     console.log(a);
// }




