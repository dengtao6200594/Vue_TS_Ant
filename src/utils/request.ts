import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

  const service: AxiosInstance = axios.create({
    baseURL: '',
    timeout: 5000,
    headers: {
      get: {
        'Content-Type': 'application/json;charset=UTF-8'
      },
      post: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
      }
    },
  })
  service.interceptors.request.use(
    (config: AxiosRequestConfig): AxiosRequestConfig => {
      // config.headers.common = {
      //   session_source: 'wechat',
      // }
      return config
    },
    error => {
      console.log(error)
      return Promise.reject(error)
    }
  )
  service.interceptors.response.use(
    (response: AxiosResponse): any => {
      const { code, msg, data } = response.data
      if (code === 1) {
        return data
      } else console.log(msg)
    },
    error => {
      console.log(error)
      return Promise.reject(error)
    })
export default service
