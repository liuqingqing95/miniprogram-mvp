Page({
  onShareAppMessage() {
    return {
      title: '剪切板',
      path: 'packageAPI/pages/clipboard-data/clipboard-data',
    }
  },

  data: {
    value: 'edit and copy me',
    pasted: '',
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

  valueChanged(e) {
    this.setData({
      value: e.detail.value,
    })
  },

  copy() {
    this.resetApiData()
    xhs?.setClipboardData({
      data: this.data.value,
      success: res => {
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

  paste() {
    this.resetApiData()
    xhs?.getClipboardData({
      success: res => {
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
