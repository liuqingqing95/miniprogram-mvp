Page({
  onShareAppMessage() {
    return {
      title: 'view',
      path: 'page/component/pages/event/event',
    }
  },

  data: {
    tapCount: 0,
    touchstartCount: 0,
    touchendCount: 0,
    touchmoveCount: 0,
    longtapCount: 0,
    longpressCount: 0,
    result: [],
  },

  bindtap(e) {
    console.log('bindtap', e)
    this.setData({
      tapCount: this.data.tapCount + 1,
    })
  },

  bindtouchstart(e) {
    console.log('bindtouchstart', e)
    this.setData({
      touchstartCount: this.data.touchstartCount + 1,
    })
  },

  bindtouchend(e) {
    console.log('bindtouchend', e)
    this.setData({
      touchendCount: this.data.touchendCount + 1,
    })
  },

  bindtouchmove(e) {
    console.log('bindtouchmove', e)
    this.setData({
      touchmoveCount: this.data.touchmoveCount + 1,
    })
  },

  bindlongpress(e) {
    console.log('bindlongpress', e)
    this.setData({
      longpressCount: this.data.longpressCount + 1,
    })
  },

  bindlongtap(e) {
    console.log('bindlongtap', e)
    this.setData({
      longtapCount: this.data.longtapCount + 1,
    })
  },

  bindtap1() {},

  bindtap2() {
    console.log('2')
  },

  bindtap3() {
    console.log('3')
  },

  bindtapcapture1() {
    const lists = this.data.result
    lists.push('1')
    this.setData({
      result: lists,
    })
  },

  bindtapcapture2() {
    const lists = this.data.result
    lists.push('2')
    this.setData({
      result: lists,
    })
  },

  bindtapcapture3() {
    const lists = this.data.result
    lists.push('3')
    this.setData({
      result: lists,
    })
  },

  bindtapcapture4() {
    const lists = this.data.result
    lists.push('4')
    this.setData({
      result: lists,
    })
  },
})
