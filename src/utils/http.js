import Vue from 'vue'
import axios from 'axios'
import qs from 'qs'

// import { resolve } from 'path'
const isProduction = process.env.NODE_ENV === 'production'
// 拦截request,设置全局请求为ajax请求
function pathFormate (url, type) {
  if (type) {
    let path = ''
    Object.keys(dev.proxyTable).forEach((item) => {
      if (url.indexOf(item + '/') >= 0) {
        path = url.slice(item.length)
      }
    })
    return window.SITE_CONFIG.baseUrl + path
  } else {
    return url+'?_='+ new Date().getTime() 
  }
}
// /**
//  * 请求拦截
//  */
// axios.interceptors.request.use(
// 	(config) => {
//   config.headers['token'] = Vue.cookie.get('token') // 请求头带上token
//   return config
// },
// 	(error) => {
//   return Promise.reject(error)
// }
// )
// /**
//  * 响应拦截
//  */
// axios.interceptors.response.use(
// 	(response) => {
//   if (response.data && response.data.code === 401) {
// 			// 401, token失效
//     clearLoginInfo()
//     router.push({ name: 'login' })
//   }
//   return response
// },
// 	(error) => {
//   return Promise.reject(error)
// }
// )
const treatParam = function (param) {
  if (!param.url) throw new Error('缺失ajax必要参数url')
  let p = {}
  p.fail = function (err) {
		// 处理404错误
    if (err.response && err.response.status === 404) {
      notification['error']({
        message: '访问页面异常',
        description: '您访问的页面不存在'
      })
      throw err
    }
    if (err.response && err.response.data) {
      let retData = err.response.data
      // eslint-disable-next-line no-undef
      if (isExpireSession) {
        return
      }
      if (retData.code === 600) {
        isExpireSession = true
      }
      notification['error']({
        message: retData.msg,
        description: isEmptyObject(retData.data) ? '' : JSON.stringify(retData.data)
      })
    } else {
      notification['error']({
        message: '报文解析异常',
        description: err.message
      })
    }
    throw err
  }
  return p
}
const get = function (param) {
	// let p = treatParam(param);
  try {
    return new Promise((resolve, reject) => {
      axios({
        method: 'get',
        // url: pathFormate(param, isProduction)
        url: param
      }).then(res => resolve(res.data))
    })
  } catch (e) {
		//   p.fail(e);
  }
}
const post = function (param) {
	// let p = treatParam(param);
  if (!param.contentType) {
    param.contentType = request.CONTENT_TYPE_JSON
  }
  let data
  if (param.formData) {
    param.contentType = request.CONTENT_TYPE_FORMDATA
    data = qs.stringify(param.data)
  } else {
    data = param.data
  }
  try {
    return new Promise((resolve, reject) => {
      axios({
        method: 'post',
        // url: pathFormate(param.url, isProduction),
        url: param.url,
        data: data,
        headers: { 'Content-Type': param.contentType }
      }).then(res => resolve(res.data))
    })
  } catch (e) {
		//   p.fail(e);
  }
}
const request = {
  get: get,
  post: post,
  CONTENT_TYPE_FORMDATA: 'application/x-www-form-urlencoded;charset=UTF-8',
  CONTENT_TYPE_JSON: 'application/json;charset=UTF-8'
}
export default request
