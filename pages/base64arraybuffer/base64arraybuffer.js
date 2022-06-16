Page({
  onShareAppMessage() {
    return {
      title: 'arrayBuffer2base64/base642ArrayBuffer',
      path: 'package/API/pages/base64arraybuffer/base64arraybuffer',
    }
  },

  data: {
    value: '',
    content: [],
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
    apiData.content = `${content}`
    this.setData({ apiData })
  },

  handleInput(e) {
    this.setData({ value: e.detail.value })
  },

  handleArrayBufferToBase64() {
    this.resetApiData()
    const base64 = xhs.arrayBufferToBase64(this.data.content)
    this.updateApiData('success', base64)
  },

  handleBase64ToArrayBuffer() {
    this.resetApiData()
    console.log('-----------', this.data.value)
    const arrayBuffer = xhs.base64ToArrayBuffer(this.data.value)
    this.setData({ content: arrayBuffer })
    this.updateApiData('success', arrayBuffer)
  },
})
