Page({
  onShareAppMessage() {
    return {
      title: 'webview',
      path: 'page/component/pages/webview/webview',
    }
  },
  data: {
    src: '',
  },
  onLoad() {
    console.log('lemon1')
  },
  handleLoad() {
    console.log('load')
  },
  handleError(e) {
    console.log('error error', e)
  },
  handleMessage(e) {
    console.log('lemon', JSON.stringify(e))
  },
})
