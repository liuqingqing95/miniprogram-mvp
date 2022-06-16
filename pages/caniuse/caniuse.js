Page({
  onShareAppMessage() {
    return {
      title: 'canIUse',
      path: 'package/API/pages/caniuse/caniuse',
    }
  },

  data: {
    value: '',
    content: '',
  },

  bindinput(e) {
    this.setData({ value: e.detail.value })
  },

  click() {
    this.setData({ content: '初始化' })
    const ret = xhs?.canIUse(this.data.value)
    this.setData({ content: ret })
  },
})
