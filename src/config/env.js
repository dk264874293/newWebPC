import axios from 'axios'

//axios配置
var Axios = axios.create({
  baseURL ='' , //接口地址
  timeout: 1000,  // 如果请求的时间超过'timeout'，请求将被中止。
});

//添加请求拦截器
Axios.interceptors.request.use(function(config){
     //在发送请求之前做某事
     return config;
   },function(error){
     //请求错误时做些事
     return Promise.reject(error);
   });

//添加响应拦截器
Axios.interceptors.response.use(function(response){
     //对响应数据做些事
     return response;
   },function(error){
     //请求错误时做些事
     return Promise.reject(error);
   });

export default Axios
