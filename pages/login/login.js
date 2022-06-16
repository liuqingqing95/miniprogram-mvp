const app = getApp()
Page({
  onShareAppMessage() {
    return {
      title: '微信登录',
      path: 'package/API/pages/login/login',
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

  login() {
    this.resetApiData()
    xhs?.login({
      timeout: this.data.timeout,
      success: res => {
        app.globalData.hasLogin = true
        this.setData({
          hasLogin: true,
        })
        this.updateApiData('success', res)
      },
      fail: res => {
        this.updateApiData('fail', res)
      },
      complete: res => {
        this.updateApiData('complete', res)
      },
    })
  },
})
