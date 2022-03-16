import axios from 'axios';
export function request(config) {
  const myrequest = axios.create({
    baseURL: "http://api.zzq89757.top/cloud",
    timeout: 2000
  })
  //在此使用拦截器
  return myrequest(config);
}
