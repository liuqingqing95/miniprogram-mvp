Page({
  onShareAppMessage() {
    return {
      title: '发起支付',
      path: 'packageAPI/pages/request-payment/request-payment',
    }
  },

  data: {
    payToken: '',
    orderId: '',
    payMethod: 'xhs',
    ext: '',
    wxUrl: '',
    zfbUrl: '',
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

  requestPayment() {
    this.resetApiData()
    xhs?.requestOrderPayment({
      orderInfo: {
        payToken: this.data.payToken,
        orderId: this.data.orderId,
        payMethod: this.data.payMethod,
        ext: this.data.ext,
        wxUrl: this.data.wxUrl,
        zfbUrl: this.data.zfbUrl,
      },
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

  handlePayToken(e) {
    this.setData({ payToken: e.detail.value })
  },

  handleOrderId(e) {
    this.setData({ orderId: e.detail.value })
  },

  handlePayMethod(e) {
    this.setData({ payMethod: e.detail.value })
  },

  handleExt(e) {
    this.setData({ ext: e.detail.value })
  },

  handleWxUrl(e) {
    this.setData({ wxUrl: e.detail.value })
  },

  handleZfbUrl(e) {
    this.setData({ zfbUrl: e.detail.value })
  },
})
