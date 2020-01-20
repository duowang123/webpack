// var env = 'dev' // 开发环境
var env = process.env.NODE_ENV
// var env = 'test' // 测试环境
// var env = 'pre' // 预发
// var env = 'master' // 正式环境

const config = {
  dev: {
    baseUrl: 'http://10.13.10.104/opensource/sdp',
    wss: 'ws://10.13.10.104/wss/websocket/websocket',
    sdpPath: 'https://sdptest.shijicloud.com/static/sdp_app/web/develop'
  },
  test: {
    baseUrl: 'https://sdptest.shijicloud.com/opensource/sdp',
    wss: 'wss://sdptest.shijicloud.com/open_source_pro/wss/websocket',
    sdpPath: 'https://sdptest.shijicloud.com/static/sdp_app/web/release'
  },
  pre: {
    baseUrl: 'https://sdp-pre.shijicloud.com/opensource/sdp',
    wss: 'wss://sdp-pre.shijicloud.com/open_source_pro/wss/websocket',
    sdpPath: 'https://sdptest.shijicloud.com/static/sdp_app/web/pre_production'
  },
  master: {
    baseUrl: 'https://sdp.shijicloud.com/opensource/sdp',
    wss: 'wss://sdp.shijicloud.com/open_source_pro/wss/websocket',
    sdpPath: 'https://sdptest.shijicloud.com/static/sdp_app/web/production'
  }
}

export default {
  ...config[env]
}