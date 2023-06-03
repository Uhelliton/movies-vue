import axios from 'axios'

export let http: any

http = axios.create({
  baseURL: 'https://api.themoviedb.org/3'
})

http.interceptors.request.use(
  (config: any) => {
    config.headers.Authorization = `Bearer `

    return config
  },
  (error: any) => {
    return Promise.reject(error)
  }
)

http.interceptors.response.use(
  (response: any) => {
    return response
  },
  (error: any) => {
    if (error.response?.status === 401) {
      // window.location.href = '/';
    }

    return Promise.reject(error)
  }
)

export default http
