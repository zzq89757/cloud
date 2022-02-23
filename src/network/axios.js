import axios from 'axios';
export function request(config) {
  const myrequest = axios.create({
    baseURL: "http://47.100.106.65/",
    timeout: 5000
  })
  //在此使用拦截器
  return myrequest(config);
}
