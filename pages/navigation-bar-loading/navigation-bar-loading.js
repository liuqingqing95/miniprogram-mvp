Page({
  onShareAppMessage() {
    return {
      title: '标题栏加载动画',
      path: 'packageAPI/pages/navigation-bar-loading/navigation-bar-loading',
    }
  },

  showNavigationBarLoading() {
    xhs?.showNavigationBarLoading()
  },
  hideNavigationBarLoading() {
    xhs?.hideNavigationBarLoading()
  },
})
