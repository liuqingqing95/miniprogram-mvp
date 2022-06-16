Page({
  onShareAppMessage() {
    return {
      title: 'input',
      path: 'page/component/pages/input/input',
    }
  },

  data: {
    inputValue: '',
    inputChangeValue: '',
    password: false,
    focus: false,
    value: '',
    type: 'text',
    placeholder: '',
    placeholderStyle: 'color:red;',
    placeholderClass: 'input-placeholder',
    disabled: false,
    maxlength: 140,
    autoFocus: false,
    cursor: -1,
    selectionStart: -1,
    selectionEnd: -1,
    focusTime: 0,
    blurTime: 0,
  },

  bindKeyInput(e) {
    this.setData({
      inputValue: e.detail.value,
    })
  },

  bindReplaceInput(e) {
    const value = e.detail.value
    let pos = e.detail.cursor
    let left
    if (pos !== -1) {
      // 光标在中间
      left = e.detail.value.slice(0, pos)
      // 计算光标的位置
      pos = left.replace(/11/g, '2').length
    }

    // 直接返回对象，可以对输入进行过滤处理，同时可以控制光标的位置
    return {
      value: value.replace(/11/g, '2'),
      cursor: pos,
    }

    // 或者直接返回字符串,光标在最后边
    // return value.replace(/11/g,'2'),
  },

  bindHideKeyboard(e) {
    if (e.detail.value === '123') {
      // 收起键盘
      xhs?.hideKeyboard()
    }
  },

  changeValue({ detail }) {
    this.setData({
      value: detail.value,
    })
  },

  changePlaceholder({ detail }) {
    this.setData({
      placeholder: detail.value,
    })
  },

  changePlaceholderStyle({ detail }) {
    this.setData({
      placeholderStyle: detail.value,
    })
  },

  changePlaceholderClass({ detail }) {
    this.setData({
      placeholderClass: detail.value,
    })
  },

  changeDisabled() {
    this.setData({
      disabled: !this.data.disabled,
    })
  },

  changePassword() {
    this.setData({
      password: !this.data.password,
    })
  },

  changeMaxlength({ detail }) {
    this.setData({
      maxlength: detail.value,
    })
  },

  changeFocus() {
    this.setData({
      focus: !this.data.focus,
    })
  },

  changeCursor({ detail }) {
    this.setData({
      cursor: detail.value,
    })
  },

  changeType({ detail }) {
    this.setData({
      type: detail.value,
    })
  },

  changeSelectionStart({ detail }) {
    this.setData({
      selectionStart: detail.value,
    })
  },

  changeSelectionEnd({ detail }) {
    this.setData({
      selectionEnd: detail.value,
    })
  },

  bindTextFocus({ timeStamp }) {
    this.setData({
      focusTime: timeStamp,
    })
  },

  bindTextBlur({ timeStamp }) {
    this.setData({
      blurTime: timeStamp,
    })
  },

  bindTextInput({ detail }) {
    this.setData({
      inputChangeValue: detail.value,
    })
  },

  onChange(e) {
    console.log('onChange', e)
  },
})
