Page({
  onShareAppMessage() {
    return {
      title: 'editor',
      path: 'page/component/pages/editor/editor',
    }
  },
  data: {
    formats: {},
    readOnly: false,
    placeholder: '开始输入...',
    editorHeight: 300,
    keyboardHeight: 0,
    isIOS: false,
    safeHeight: 0,
    toolBarHeight: 50,
  },
  readOnlyChange() {
    this.setData({
      readOnly: !this.data.readOnly,
    })
  },
  onLoad() {
    const {
      platform, safeArea, model, screenHeight,
    } = xhs?.getSystemInfoSync()
    let safeHeight
    if (safeArea) {
      safeHeight = (screenHeight - safeArea.bottom)
    } else {
      safeHeight = 32
    }
    this._safeHeight = safeHeight
    const isIOS = platform === 'ios'
    this.setData({ isIOS, safeHeight, toolBarHeight: isIOS ? safeHeight + 50 : 50 })
    const that = this
    this.updatePosition(0)
    let keyboardHeight = 0
    xhs?.onKeyboardHeightChange(res => {
      if (res.height === keyboardHeight) {
        return
      }
      const duration = res.height > 0 ? res.duration * 1000 : 0
      keyboardHeight = res.height
      setTimeout(() => {
        xhs?.pageScrollTo({
          scrollTop: 0,
          success() {
            that.updatePosition(keyboardHeight)
            that.editorCtx.scrollIntoView()
          },
        })
      }, duration)
    })
  },
  updatePosition(keyboardHeight) {
    const toolbarHeight = 50
    const { windowHeight, platform } = xhs?.getSystemInfoSync()
    const editorHeight = keyboardHeight > 0 ? (windowHeight - keyboardHeight - toolbarHeight) : windowHeight
    if (keyboardHeight === 0) {
      this.setData({
        editorHeight,
        keyboardHeight,
        toolBarHeight: this.data.isIOS ? 50 + this._safeHeight : 50,
        safeHeight: this._safeHeight,
      })
    } else {
      this.setData({
        editorHeight,
        keyboardHeight,
        toolBarHeight: 50,
        safeHeight: 0,
      })
    }
  },
  calNavigationBarAndStatusBar() {
    const systemInfo = xhs?.getSystemInfoSync()
    const { statusBarHeight, platform } = systemInfo
    const isIOS = platform === 'ios'
    const navigationBarHeight = isIOS ? 44 : 48
    return statusBarHeight + navigationBarHeight
  },
  onEditorReady() {
    const that = this
    xhs?.createSelectorQuery().select('#editor').context(res => {
      that.editorCtx = res.context
    }).exec()
  },
  blur() {
    this.editorCtx.blur()
  },
  format(e) {
    const { name, value } = e.target.dataset
    if (!name) return
    // console.log('format', name, value)
    this.editorCtx.format(name, value)
  },
  onStatusChange(e) {
    const formats = e.detail
    this.setData({ formats })
  },
  insertDivider() {
    this.editorCtx.insertDivider({
      success() {
        console.log('insert divider success')
      },
    })
  },
  clear() {
    this.editorCtx.clear({
      success(res) {
        console.log('clear success')
      },
    })
  },
  removeFormat() {
    this.editorCtx.removeFormat()
  },
  insertDate() {
    const date = new Date()
    const formatDate = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`
    this.editorCtx.insertText({
      text: formatDate,
    })
  },
  insertImage() {
    const that = this
    xhs?.chooseImage({
      count: 1,
      success(res) {
        that.editorCtx.insertImage({
          src: res.tempFilePaths[0],
          data: {
            id: 'abcd',
            role: 'god',
          },
          width: '80%',
          success() {
            console.log('insert image success')
          },
        })
      },
    })
  },
})
