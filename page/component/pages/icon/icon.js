Page({
  onShareAppMessage() {
    return {
      title: 'icon',
      path: 'page/component/pages/icon/icon',
    }
  },

  data: {
    color: 'red',
    size: 30,
    type: 'success',
  },

  changeType({ detail }) {
    this.setData({
      type: detail.value,
    })
  },

  changeColor({ detail }) {
    this.setData({
      color: detail.value,
    })
  },

  changeSize({ detail }) {
    this.setData({
      size: detail.value,
    })
  },
})
