Page({
  onShareAppMessage() {
    return {
      title: '获取用户信息',
      path: 'packageAPI/pages/get-user-info/get-user-info',
    }
  },

  data: {
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

  getUserInfo(e) {
    console.log(e)
    this.updateApiData('success', e)
  },
})
