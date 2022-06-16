Page({
  onShareAppMessage() {
    return {
      title: '检查登录状态是否过期',
      path: 'package/API/pages/check-session/check-session',
    }
  },

  data: {
    systemInfo: {},
    apiData: {
      content: '',
      success: false,
      fail: false,
      complete: false,
    },
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
    apiData.content = content
    this.setData({ apiData })
  },

  checkSession() {
    xhs?.checkSession({
      success: msg => {
        this.updateApiData('success', msg)
      },
      fail: msg => {
        this.updateApiData('fail', msg)
      },
      complete: msg => {
        this.updateApiData('complete', msg)
      },
    })
  },
})
