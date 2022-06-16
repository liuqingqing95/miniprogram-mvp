const types = ['default', 'primary', 'warn']
const pageObject = {
  data: {
    size: 'default',
    type: 'default',
    plain: false,
    disabled: false,
    loading: false,
    formType: '',
    hoverClass: 'button-hover',
    hoverStopPropagation: false,
    hoverStartTime: 20,
    hoverStayTime: 70,
  },

  onShareAppMessage() {
    return {
      title: 'button',
      path: 'page/component/pages/button/button',
    }
  },

  onShow() {
    xhs
      ?.hideHomeButton()
      .then(e => {
        console.log('hideHomeButton show then:', e)
      })
      .catch(e => {
        console.log('hideHomeButton show catch:', e)
      })
  },

  setDisabled() {
    this.setData({
      disabled: !this.data.disabled,
    })
  },

  setPlain() {
    this.setData({
      plain: !this.data.plain,
    })
  },

  setLoading() {
    this.setData({
      loading: !this.data.loading,
    })
  },

  handleContact(e) {
    console.log(e.detail)
  },

  handleGetPhoneNumber(e) {
    console.log('handleGetPhoneNumber: ', e.detail)
  },

  handleGetUserInfo(e) {
    console.log(e.detail)
  },

  handleOpenSetting(e) {
    console.log(e.detail.authSetting)
  },

  changeSize({ detail }) {
    this.setData({
      size: detail.value,
    })
  },

  changeType({ detail }) {
    this.setData({
      type: detail.value,
    })
  },

  changePlain() {
    this.setData({
      plain: !this.data.plain,
    })
  },

  changeDisabled() {
    this.setData({
      disabled: !this.data.disabled,
    })
  },

  changeLoading() {
    this.setData({
      loading: !this.data.loading,
    })
  },

  changeHoverStopPropagation() {
    this.setData({
      hoverStopPropagation: !this.data.hoverStopPropagation,
    })
  },

  changeHoverStartTime({ detail }) {
    this.setData({
      hoverStartTime: detail.value,
    })
  },

  changeHoverStayTime({ detail }) {
    this.setData({
      hoverStayTime: detail.value,
    })
  },
}

for (let i = 0; i < types.length; ++i) {
  ;(function (type) {
    pageObject[type] = function () {
      const key = `${type}Size`
      const changedData = {}
      changedData[key] = this.data[key] === 'default' ? 'mini' : 'default'
      this.setData(changedData)
    }
  })(types[i])
}

Page(pageObject)
