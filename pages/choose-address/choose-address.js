Page({
  onShareAppMessage() {
    return {
      title: '收货地址',
      path: 'packageAPI/pages/choose-address/choose-address',
    }
  },

  data: {
    addressInfo: null,
  },
  chooseAddress() {
    xhs?.chooseAddress({
      success: res => {
        this.setData({
          addressInfo: res,
        })
      },
      fail(err) {
        console.log(err)
      },
    })
  },
})
