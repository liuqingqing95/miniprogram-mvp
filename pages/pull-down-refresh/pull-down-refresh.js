Page({
  onShareAppMessage() {
    return {
      title: '下拉刷新',
      path: 'packageAPI/pages/pull-down-refresh/pull-down-refresh',
    }
  },

  onPullDownRefresh() {
    xhs?.showToast({
      title: 'loading...',
      icon: 'loading',
    })
    console.log('onPullDownRefresh', new Date())
  },

  stopPullDownRefresh() {
    xhs?.stopPullDownRefresh({
      complete(res) {
        xhs?.hideToast()
        console.log(res, new Date())
      },
    })
  },
})
