import axios from 'axios'

export let http: any

http = axios.create({
  baseURL: 'https://api.themoviedb.org/3'
})

http.interceptors.request.use(
  (config: any) => {
    config.headers.Authorization = `Bearer ${import.meta.env.VITE_MOVIE_API_TOKEN}`
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
    return Promise.reject(error)
  }
)

export default http
