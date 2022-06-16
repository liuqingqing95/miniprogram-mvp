Page({
  onShareAppMessage() {
    return {
      title: '获取手机系统信息',
      path: 'packageAPI/pages/get-system-info/get-system-info',
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

  getSystemInfo() {
    this.setData({ systemInfo: {} })
    this.resetApiData()
    xhs?.getSystemInfo({
      success: res => {
        this.updateApiData('success', res)
        this.setData({
          systemInfo: res,
        })
      },
      fail: res => {
        this.updateApiData('fail', res)
      },
      complete: res => {
        this.updateApiData('complete', res)
      },
    })
  },
  getSystemInfoSync() {
    this.resetApiData()
    const data = xhs?.getSystemInfoSync()
    this.setData({
      systemInfo: data,
    })
  },
})
