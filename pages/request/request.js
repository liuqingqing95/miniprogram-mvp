const requestUrl = require('../../config').requestUrl

Page({
  onShareAppMessage() {
    return {
      title: '网络请求',
      path: 'packageAPI/pages/request/request',
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

  makeRequest() {
    this.request({
      url: requestUrl,
      data: {
        noncestr: Date.now(),
      },
    })
  },

  makeRequestOptions() {
    this.request({
      url: requestUrl,
      method: 'OPTIONS',
      data: {
        noncestr: Date.now(),
      },
    })
  },

  makeRequestHead() {
    this.request({
      url: requestUrl,
      method: 'HEAD',
      data: {
        noncestr: Date.now(),
      },
    })
  },

  makeRequestPut() {
    this.request({
      url: requestUrl,
      method: 'PUT',
      data: {
        noncestr: Date.now(),
      },
    })
  },

  makeRequestDelete() {
    this.request({
      url: requestUrl,
      method: 'DELETE',
      data: {
        noncestr: Date.now(),
      },
    })
  },

  makeRequestPostJSON() {
    this.request({
      url: requestUrl,
      method: 'POST',
      header: {
        'content-type': 'application-json',
      },
      data: {
        noncestr: Date.now(),
      },
    })
  },

  makeRequestPostFormData() {
    this.request({
      url: requestUrl,
      header: {
        'content-type': 'multipart/form-data',
      },
      data: {
        name: 123,
        sex: 456,
      },
    })
  },

  makeRequestTimeout() {
    this.request({
      url: requestUrl,
      timeout: 2000,
      data: {
        noncestr: Date.now(),
      },
    })
  },

  makeRequestRequestArrayBuffer() {
    this.request({
      url: requestUrl,
      method: 'POST',
      data: new ArrayBuffer('test'),
    })
  },

  makeRequestResponseArrayBuffer() {
    this.request({
      url: requestUrl,
      responseType: 'arraybuffer',
      data: {
        noncestr: Date.now(),
      },
    })
  },
  makeRequestPostForm() {
    this.request({
      url: requestUrl,
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded',
      },
      data: {
        name: 1,
        age: 2,
      },
    })
  },
})
