global.isDemo = true
App({
  getLaunchOptionsSync(e) {
    console.log('App:getLaunchOptionsSync', e)
  },
  getEnterOptionsSync(e) {
    console.log('App:getEnterOptionsSync', e)
  },
  onError(e) {
    xhs?.showToast({ title: 'App:onError' })
    console.log('App:onError=======', e)
  },
  onLaunch(opts, data) {
    xhs?.showToast({ title: 'App:onLaunch' })
    console.log('App:onLaunch========', opts)
    if (data && data.path) {
      xhs?.navigateTo({
        url: data.path,
      })
    }
  },
  onPageNotFound(opts) {
    xhs?.showToast({ title: 'App:onPageNotFound' })
    console.log('App:onPageNotFound========', opts)
  },
  onShow(opts) {
    xhs?.showToast({ title: 'App:onShow' })
    console.log('App:onShow=======', opts)
  },
  onHide(opts) {
    xhs?.showToast({ title: 'App:onHide' })
    console.log('App:onHide=======', opts)
  },
  globalData: {
    hasLogin: false,
    openid: null,
    iconTabbar: '/page/weui/example/images/icon_tabbar.png',
  },
  // lazy loading openid
  getUserOpenId(callback) {
    const self = this
    if (self.globalData.openid) {
      callback(null, self.globalData.openid)
    } else {
      xhs?.login({
        success(data) {
          console.log('login success:', data)
        },
        fail(err) {
          console.log('xhs?.login 接口调用失败，将无法正常使用开放接口等服务', err)
          callback(err)
        },
      })
    }
  },
})
