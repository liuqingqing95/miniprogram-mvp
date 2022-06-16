const order = ['demo1', 'demo2', 'demo3']

Page({
  onLoad() {
    setTimeout(() => {
      this.setData({
        dynamicHeight: 200,
      })
    }, 5000)
  },
  onPulling(e) {
    this.updateApiData('onPulling:', e)
  },
  onRefresh() {
    this.updateApiData('渲染层下拉事件被触发')
    this.setData({
      triggered: true,
    })
    if (this._freshing) return
    this._freshing = true
    setTimeout(() => {
      this.setData({
        triggered: false,
      })
      this.updateApiData('lemon triggered', false)
      this._freshing = false
    }, 3000)
  },
  onRestore(e) {
    this.updateApiData(' 下拉刷新被复位:', e)
  },
  onAbort(e) {
    this.updateApiData('lemon 下拉刷新被终止', e)
  },
  onShareAppMessage() {
    return {
      title: 'scroll-view',
      path: 'page/component/pages/scroll-view/scroll-view',
    }
  },

  data: {
    toView: 'green',
    triggered: false,
    apiData: {
      content: '',
      success: false,
      fail: false,
      complete: false,
    },
    dynamicHeight: 100,
  },

  resetApiData() {
    this.setData({
      apiData: {
        success: false,
        fail: false,
        complete: false,
        content: '',
      },
    })
  },

  updateApiData(content) {
    const apiData = { ...this.data.apiData }
    apiData.success = true
    apiData.content = `${content}`
    this.setData({ apiData })
  },

  upper(e) {
    this.updateApiData('滚动到顶部触发: ', e)
  },

  upperHorizontal(e) {
    this.updateApiData('滚动到左侧触发: ', e)
  },

  lower(e) {
    this.updateApiData('滚动到底部触发: ', e)
  },

  lowerHorizontal(e) {
    this.updateApiData('滚动到右侧触发: ', e)
  },

  scroll(e) {
    console.log('滚动触发', e)
    // this.updateApiData(' 滚动触发', e)
  },
  binddragstart(e) {
    this.updateApiData(' 滑动触发', e)
  },
  binddragging(e) {
    this.updateApiData(' 滑动中', e)
  },
  binddragend(e) {
    this.updateApiData(' 滑动结束', e)
  },
  scrollToTop() {
    this.setAction({
      scrollTop: 0,
    })
  },

  tap() {
    for (let i = 0; i < order.length; ++i) {
      if (order[i] === this.data.toView) {
        this.setData({
          toView: order[i + 1],
          scrollTop: (i + 1) * 200,
        })
        break
      }
    }
  },

  tapMove() {
    this.setData({
      scrollTop: this.data.scrollTop + 10,
    })
  },
})
