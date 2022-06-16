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

  touchmove(e) {
    console.log('outer touchmove->', e)
  },
  touchend(e) {
    console.log('outer touchend ->', e)
  },
  touchstart(e) {
    console.log('outer touchstart->', e)
  },
  catchtouchstart(e) {
    console.log('inner catchtouchstart ->', e)
  },
  catchtap(e) {
    console.log('inner catchtap ->', e)
  },

  catchtouchend(e) {
    console.log('inner catchtouchend ->', e)
  },

  tap(e) {
    console.log('tap=====>', e)
  },

  tap1(e) {
    console.log('outer tap1=====>', e)
  },
  tap2(e) {
    console.log('middle tap2=====>', e)
  },
  tap3(e) {
    console.log('inner tap3=====>', e)
  },

  bindlongpress(e) {
    console.log('inner bindlongpress=====>', e)
  },
  bindlongtap(e) {
    console.log('inner bindlongtap=====>', e)
  },

  bindtouchmove1() {
    console.log('outer bindtouchmove 11111')
  },
  catchtouchmove2() {
    console.log('middle bindtouchmove 22222222')
  },
  bindtouchmove3() {
    console.log('inner bindtouchmove 33333')
  },

  showModal() {
    this.setData({
      show: true,
    })
  },
  closeModal() {
    this.setData({
      show: false,
    })
  },
  catchMove1() {
    console.log('move modal')
  },
  catchMove2() {
    console.log('move modal')
  },
})
