// var Encrypt = require('./crypto.js');
// var express = require('express');
var http = require('http');
// var crypto = require('crypto');
// var reqhttp = require("request");
var app = express();
var dir = "/v1";
var cookie = null;
var user = {};
var jsessionid = randomString('0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKMNOPQRSTUVWXYZ\\/+', 176) + ':' + (new Date).getTime();
var nuid = randomString('0123456789abcdefghijklmnopqrstuvwxyz', 32);
function randomString(pattern, length) {
    return Array.apply(null, { length: length }).map(() => (pattern[Math.floor(Math.random() * pattern.length)])).join('');
}

var baseCookie = `JSESSIONID-WYYY=${jsessionid}; _iuqxldmzr_=32; _ntes_nnid=${nuid},${(new Date).getTime()}; _ntes_nuid=${nuid}`;
app.get(dir + '/user/playlist', function (request, response) {
    var cookie = request.get('Cookie') ? request.get('Cookie') : (request.query.cookie ? request.query.cookie : '');
    var data = {
        "offset": request.query.offset || '0',
        "uid": request.query.uid,
        "limit": request.query.limit || 20,
        "csrf_token": ""
    };
    createWebAPIRequest('/weapi/user/playlist', data, cookie, response)
});
function createWebAPIRequest(path, data, c, response, method) {
    method = method ? method : "POST"
    var music_req = '';
    var cryptoreq = Encrypt(data);
    var http_client = http.request({
        hostname: 'music.163.com',
        method: method,
        path: path,
        headers: {
            'Accept': '*/*',
            'Accept-Language': 'zh-CN,zh;q=0.8,gl;q=0.6,zh-TW;q=0.4',
            'Connection': 'keep-alive',
            'Content-Type': 'application/x-www-form-urlencoded',
            'Referer': 'http://music.163.com',
            'Host': 'music.163.com',
            'Cookie': cookie,
            'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/602.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/602.1'
        }
    }, function (res) {
        res.on('error', function (err) {
            response.status(502).send('fetch error');
        });
        res.setEncoding('utf8');
        if (res.statusCode != 200) {
            createWebAPIRequest(path, data, c, response, method);
            return;
        } else {
            res.on('data', function (chunk) {
                music_req += chunk;
            });
            res.on('end', function () {
                if (music_req == '') {
                    createWebAPIRequest(path, data, c, response, method);
                    return;
                }
                if (res.headers['set-cookie']) {
                    cookie = baseCookie + ';' + res.headers['set-cookie'];
                    response.send({
                        code: 200,
                        i: JSON.parse(music_req)
                    });
                    user = JSON.parse(music_req)
                    return;
                }
                response.send(music_req);
            })
        }
    });
    console.log(res)
    // http_client.write('params=' + cryptoreq.params + '&encSecKey=' + cryptoreq.encSecKey);
    // http_client.end();
}