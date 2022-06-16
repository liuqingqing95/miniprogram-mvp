function getRandomColor() {
  const rgb = []
  for (let i = 0; i < 3; ++i) {
    let color = Math.floor(Math.random() * 256).toString(16)
    color = color.length === 1 ? `0${color}` : color
    rgb.push(color)
  }
  return `#${rgb.join('')}`
}

Page({
  onShareAppMessage() {
    return {
      title: 'video',
      path: 'page/component/pages/video/video',
    }
  },

  onReady() {
    setTimeout(() => {
      this.videoContext = xhs?.createVideoContext('myVideo')
      // this.videoContext.sendDanmu({
      //   time: 10,
      //   text: 'fandeji',
      //   color: 'red',
      // })
      this.setData({
        height: 180,
      })
    }, 5000)
  },

  inputValue: '',
  data: {
    enableAutoRotation: true,
    src: '',
    danmuList: [
      {
        text: '第 1s 出现的弹幕',
        color: '#ff0000',
        time: 1,
      },
      {
        text: '第 3s 出现的弹幕',
        color: '#ff00ff',
        time: 3,
      },
    ],
    height: 200,
  },

  bindInputBlur(e) {
    this.inputValue = e.detail.value
  },

  bindButtonTap() {
    const that = this
    xhs?.chooseVideo({
      sourceType: ['album', 'camera'],
      maxDuration: 60,
      camera: ['front', 'back'],
      success(res) {
        that.setData({
          src: res.tempFilePath,
        })
      },
    })
  },

  bindVideoEnterPictureInPicture() {
    console.log('进入小窗模式')
  },

  bindVideoLeavePictureInPicture() {
    console.log('退出小窗模式')
  },

  bindPlayVideo() {
    this.videoContext.play()
  },
  bindSendDanmu() {
    this.videoContext.sendDanmu({
      text: this.inputValue,
      color: getRandomColor(),
    })
  },

  videoErrorCallback(e) {
    console.log('视频错误信息:')
    console.log(e.detail.errMsg)
  },
  handleSwitchChange(e) {
    this.setData({
      enableAutoRotation: e.detail.value,
    })
  },
  handleVideoEnd() {
    console.log('----------lemon video end')
  },
  handleVideoTimeUpdate() {
    console.log('----------lemon video time update')
  },
  handFullscreen() {
    console.log('----------lemon video full screen')
  },
  handleWaiting() {
    console.log('----------lemon video handleWaiting')
  },
  handleError() {
    console.log('----------lemon video handleError')
  },
  handleProgress() {
    console.log('----------lemon video handleProgress')
  },
  handleLoadedMetadata() {
    console.log('----------lemon video handleLoadedMetadata')
  },
})
