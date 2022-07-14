// axios
import axios from 'axios'
import router from '../router'


//element ui
import { Message, Loading } from 'element-ui'

// 加載動畫
let loading
function startLoading () {
  loading = Loading.service({
    lock: true,
    text: '加載中',
    background: 'rgba(0,0,0,0.7)'
  })
}
// 關閉動畫
function endLoading () {
  loading.close()
}

// axios 請求
axios.interceptors.request.use(config => {
  // 加載動畫
  startLoading()

  // 請求許可
  if (localStorage.token) {
    config.headers.Authorization = localStorage.token
  }

  return config
}, error => {
  return Promise.reject(error)
})

// axios 響應
axios.interceptors.response.use(response => {
  // 結束動畫
  endLoading()

  // token 過期
  const { status } = error.response
  if ( status === 401 ) {
    Message.error('請重新登入')
    // 清除token
    localStorage.removeItem('token')

    // 跳轉登入夜面
    router.push('/login')
  }


  return response
}, error => {
  endLoading()
  Message.error(error.response.data)
  return Promise.reject(error)
})

export { axios }
