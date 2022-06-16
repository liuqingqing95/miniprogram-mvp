Page({
  onShareAppMessage() {
    return {
      title: 'navigator',
      path: 'page/component/pages/navigator/navigator',
    }
  },
  complete(res) {
    console.log('======', res)
  },
})
