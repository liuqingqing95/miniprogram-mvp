Page({
  onShareAppMessage() {
    return {
      title: 'view',
      path: 'page/component/pages/view/view',
    }
  },

  data: {
    hoverStartTime: 50,
    hoverStayTime: 400,
    hoverStopPropagation: false,
  },

  changeHoverStartTime({ detail }) {
    this.setData({
      hoverStartTime: detail.value,
    })
  },

  changeHoverStayTime({ detail }) {
    this.setData({
      hoverStayTime: detail.value,
    })
  },

  changeHoverStopPropagation() {
    this.setData({
      hoverStopPropagation: !this.data.hoverStopPropagation,
    })
  },
  // onShow() {
  //   console.log('onShow======')
  //   xhs?.reportAnalytics('enter_home_programmatically', {})
  // },
  // onHide() {
  //   console.log('onHide======')
  // },
  // onUnload() {
  //   console.log('onUnload======')
  // },

  // onLoad(query) {
  //   console.log('onLoad======', query)
  // },

  // onReady() {
  //   console.log('onReady======')
  // },
})
