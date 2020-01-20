import axios from 'axios'
import {
  store
} from '@/store'
// import qs from 'qs'

import urls from './urls'
import statusCode from './statusCode'
import {
  getToken
} from '@/utils/auth'
// import Cookies from 'js-cookie'

let refreshed = false

const instance = axios.create({
  baseURL: urls.baseUrl,
  timeout: 1000 * 60 * 2,
  headers: {
    'Content-Type': 'application/json'
  }
})

instance.interceptors.request.use(
  async config => {
      // config.headers['Authorization'] = store.state.global.token || ''
      config.headers['Authorization'] = getToken() || ''
      config.headers['Accept-Language'] = store.state.language.language || 'en'
      // 增加标示系统头
      config.headers['System-Code'] = '0'
      return config
    },
    error => {
      Promise.reject(error)
    }
)

instance.interceptors.response.use(
  response => {
    const responseData = response.data
    // 对状态码 进行判断
    const statusFlag = statusError(response.data.status, response.data)
    if (statusFlag === false) {
      statusCode.handleStatus(response.data)
      return Promise.reject(response.data)
    }
    if (statusFlag === true && String(responseData.status).length > 3) {
      // 导出响应请求的特殊处理，因为接收的是文档流
      if (response.status === 200 && responseData.type === 'application/octet-stream') {
        return response.data
      }
      // 处理后台的状态码,区别于浏览器状态码，后台的状态码都是4位数及以上的。
      statusCode.handleStatus(response.data)
      return Promise.reject(response.data)
    }
    if (statusFlag === 'tokenInvalid') {
      store.dispatch('updateToken').then(() => {
        window.setTimeout(refreshSuccess, 3000)
      }).catch(() => {
        window.setTimeout(refreshSuccess, 3000)
      })
      return responseData.data
    }
    if (responseData.status === 200) {
      return responseData.data
    } else {
      if (statusFlag !== 'undetermined') {
        if (!responseData.message) return responseData
        statusCode.handleTips(responseData, 'warning')
        return Promise.reject(responseData.message)
      } else {
        return responseData.data
      }
    }
  },
  error => {
    if (error.response) {
      statusCode.handleStatusCode(error.response)
    } else {
      statusCode.handleTips(error, 'error')
    }
    return Promise.reject(error)
  }
)

function statusError(status, response) {
  if (status === 10000006) {
    return !refreshed ? (refreshed = true && 'tokenInvalid') : 'undetermined'
  }
  if ([201000001, 202000054, 202000055].indexOf(status) > -1) {
    return false
  }
  if ([220000011, 220000012, 220000013, 220000014, 220000015, 220000016].indexOf(status) > -1) return false
  return true
}

function refreshSuccess() {
  refreshed = false
}

export default {
  instance,
  get: (url, params = {}, config = {}) => {
    return instance.get(url, {
      params: params,
      config
    }).then(res => res)
  },
  post: (url, params = {}, config = {}) => {
    return instance.post(url, params, config).then(res => res)
  },
  delete: (url, params = {}, config = {}) => {
    return instance.delete(url, params, config).then(res => res)
  },
  head: (url, params = {}, config = {}) => {
    return instance.head(url, params, config).then(res => res)
  },
  put: (url, params = {}, config = {}) => {
    return instance.head(url, params, config).then(res => res)
  },
  patch: (url, params = {}, config = {}) => {
    return instance.patch(url, params, config).then(res => res)
  },
  mock: (url, params = {}, config = {}) => {
    return instance.get(url, {
      params: params,
      config,
      baseURL: 'http://127.0.0.1:9999/fe/sdp'
    }).then(res => res)
  },
  mockPost: (url, params = {}, config = {}) => {
    return instance.post(url, params, {
      ...config,
      baseURL: 'http://127.0.0.1:9999/fe/sdp'
    }).then(res => res)
  }
}