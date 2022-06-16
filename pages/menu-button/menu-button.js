const app = getApp()
Page({
  onShareAppMessage() {
    return {
      title: 'menu-button',
      path: 'package/API/pages/menu-button/menu-button',
    }
  },
  data: {
    timeout: 2000,
    apiData: {
      content: '',
      success: false,
      fail: false,
      complete: false,
    },
  },

  handleTimeout(e) {
    this.setData({ timeout: e.detail.value - 0 })
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

  updateApiData(type, content) {
    const apiData = { ...this.data.apiData }
    apiData[type] = true
    apiData.content = JSON.stringify(content)
    this.setData({ apiData })
  },

  getMenuButtonBoundingClientRect() {
    this.resetApiData()
    const res = xhs?.getMenuButtonBoundingClientRect()
    this.updateApiData('success', res)
  },
})
