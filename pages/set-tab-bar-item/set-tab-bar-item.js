Page({
  onShareAppMessage() {
    return {
      title: '设置TabBarItem',
      path: 'packageAPI/pages/set-tab-bar-item/set-tab-bar-item',
    }
  },

  data: {
    index: 0,
    text: 'newText',
    iconPath:
      'https://dss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/topnav/baobaozhidao@2x-af409f9dbe.png',
    selectedIconPath:
      'https://dss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/topnav/yinyue@2x-c18adacacb.png',
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
    apiData.content = JSON.stringify(content)
    this.setData({ apiData })
  },

  handleIndex(e) {
    this.setData({
      index: e.detail.value - 0,
    })
  },

  handleText(e) {
    this.setData({
      text: e.detail.value,
    })
  },

  handleIconPath(e) {
    this.setData({
      iconPath: e.detail.value,
    })
  },

  handleSelectIconPath(e) {
    this.setData({
      selectedIconPath: e.detail.value,
    })
  },

  setTabBarItem() {
    this.resetApiData()
    xhs?.setTabBarItem({
      index: this.data.index,
      text: this.data.text,
      iconPath: this.data.iconPath,
      selectedIconPath: this.data.selectedIconPath,
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
  showTabBar() {
    this.resetApiData()
    xhs?.showTabBar({
      animation: true,
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
  hideTabBar() {
    this.resetApiData()
    xhs?.hideTabBar({
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
  hideTabBarAnimate() {
    this.resetApiData()
    xhs?.hideTabBar({
      animation: true,
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
