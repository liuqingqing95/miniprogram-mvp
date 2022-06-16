Page({
  onShareAppMessage() {
    return {
      title: 'get-account-info-sync',
      path: 'package/API/pages/get-account-info-sync/get-account-info-sync',
    }
  },

  data: {
    res: '',
    content: '',
  },

  click() {
    this.setData({ res: '' })
    const ret = xhs?.getAccountInfoSync()
    this.setData({ res: JSON.stringify(ret) })
    console.log('ret', ret)
  },
})
