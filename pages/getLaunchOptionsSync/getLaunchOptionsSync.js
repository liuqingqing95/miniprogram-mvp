Page({
  onShareAppMessage() {
    return {
      title: 'getLaunchOptionsSync/getEnterOptionsSync',
      path: 'packageAPI/pages/getLaunchOptionsSync/getLaunchOptionsSync',
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

  request(options = {}) {
    this.resetApiData()
    const defaultOptions = {
      success: result => {
        this.updateApiData('success', result)
      },
      fail: result => {
        this.updateApiData('fail', result)
      },
      complete: result => {
        this.updateApiData('complete', result)
      },
    }
    xhs?.request({ ...defaultOptions, ...options })
  },

  getEnterOptionsSync() {
    this.resetApiData()
    const res = xhs.getEnterOptionsSync()
    this.updateApiData('success', JSON.stringify(res))
  },
  getLaunchOptionsSync() {
    this.resetApiData()
    const res = xhs.getLaunchOptionsSync()
    this.updateApiData('success', JSON.stringify(res))
  },
})
