import { message } from 'antd';
import config from './config'

const request = (url, reqConfig) => {
  console.log("request", url, reqConfig)
  return fetch(url, reqConfig).then((res) => {
    if (!res.ok) {
      // 服务器异常返回
      throw Error('');
    }

    return res.json();
  }).then((resJson) => {
    if (!resJson.success) {
      // 项目内部认为的错误
      throw Error('');
    } else {
      return resJson;
    }
  }).catch(() => {
    // 公共错误处理
    //message.error('内部错误，请重新登录');
  });
};

// GET请求
export const get = (url) => {
  console.log("get", url)
  return request(config().serverUrl+url, {method: 'GET'});
};

// POST请求
export const post = (url, data) => {  
  return request(config().serverUrl+url, {
    body: JSON.stringify(data),
    headers: {
      'content-type': 'application/json'
    },
    method: 'POST'
  });
};