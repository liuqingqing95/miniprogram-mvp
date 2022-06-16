Page({
  onShareAppMessage() {
    return {
      title: '获取位置',
      path: 'packageAPI/pages/get-location/get-location',
    }
  },

  data: {
    count: 0,
    hasLocation: false,
    altitude: false,
    isHighAccuracy: false,
    highAccuracyExpireTime: 0,
    latitude: 12.1,
    longitude: 12.1,
    type: 'wgs84',
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
  getLocation() {
    this.resetApiData()
    xhs?.getLocation({
      type: this.data.type,
      altitude: this.data.altitude,
      isHighAccuracy: this.data.isHighAccuracy,
      highAccuracyExpireTime: this.data.highAccuracyExpireTime,
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
  startLocationUpdate() {
    this.resetApiData()
    xhs?.startLocationUpdate({
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
  startLocationUpdateBackground() {
    this.resetApiData()
    xhs?.startLocationUpdateBackground({
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
  stopLocationUpdate() {
    this.resetApiData()
    xhs?.stopLocationUpdate({
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
  chooseLocation() {
    this.resetApiData()
    xhs?.chooseLocation({
      latitude: this.data.latitude - 0,
      longitude: this.data.longitude - 0,
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
  chooseLocationNoParams() {
    this.resetApiData()
    xhs?.chooseLocation({
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
  onLocationChange() {
    this.resetApiData()
    this.offLocation = xhs?.onLocationChange(res => {
      this.updateApiData('success', res)
      this.setData({ count: this.data.count + 1 })
    })
  },

  offLocationChange() {
    if (this?.offLocation?.remove) {
      this.offLocation.remove()
    }
    this.updateApiData('success')
  },
  handleAltitude(e) {
    this.setData({ altitude: e.detail.value })
  },
  handleHighAccuracy(e) {
    this.setData({ isHighAccuracy: e.detail.value })
  },
  handleHighAccuracyExpireTime(e) {
    this.setData({ highAccuracyExpireTime: e.detail.value - 0 })
  },
  handleType(e) {
    this.setData({ type: e.detail.value })
  },
  handleLongitude(e) {
    this.setData({ longitude: e.detail.value - 0 })
  },
  handleLatitude(e) {
    this.setData({ latitude: e.detail.value - 0 })
  },
  openLocation() {
    xhs.openLocation?.({
      latitude: 40.04,
      longitude: 116.27,
      address: '北京市海淀区西北旺东路10号院',
      name: '百度科技园',
      complete: res => {
        console.log('【openLocation】：', res)
      },
    })
  },
})
