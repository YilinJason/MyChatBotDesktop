import axios from "axios"
// 创建axios实例
const instance = axios.create({
  // 基本请求路径的抽取
  baseURL: "https://nxpuitmmct.us-east-1.awsapprunner.com",
  // 这个时间是你每次请求的过期时间，这次请求认为20秒之后这个请求就是失败的
  timeout: 10000
})
// 请求拦截器
instance.interceptors.request.use(config => {
  return config
}, err => {
  return Promise.reject(err)
});
// 响应拦截器
instance.interceptors.response.use(res => {
  return res.data
}, err => {
  return Promise.reject(err)
})

export default instance