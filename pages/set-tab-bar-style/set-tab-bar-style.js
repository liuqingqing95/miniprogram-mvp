Page({
  onShareAppMessage() {
    return {
      title: '设置TabBarStyle',
      path: 'packageAPI/pages/set-tab-bar-style/set-tab-bar-style',
    }
  },

  data: {
    color: '#0000ff',
    selectedColor: '#ff0000',
    backgroundColor: '#00ff00',
    borderStyle: 'black',
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

  handleColor(e) {
    this.setData({
      color: e.detail.value,
    })
  },

  handleSelectColor(e) {
    this.setData({
      selectedColor: e.detail.value,
    })
  },

  handleBackgroundColor(e) {
    this.setData({
      backgroundColor: e.detail.value,
    })
  },

  handleBorderStyle(e) {
    this.setData({
      borderStyle: e.detail.value,
    })
  },

  setTabBarStyle() {
    this.resetApiData()
    xhs?.setTabBarStyle({
      color: this.data.color,
      selectedColor: this.data.selectedColor,
      backgroundColor: this.data.backgroundColor,
      borderStyle: this.data.borderStyle,
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
  fail() {
    this.resetApiData()
    xhs?.setTabBarStyle({
      color: 123,
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
