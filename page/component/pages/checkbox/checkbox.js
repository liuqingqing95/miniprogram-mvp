Page({
  onShareAppMessage() {
    return {
      title: 'checkbox',
      path: 'page/component/pages/checkbox/checkbox',
    }
  },

  data: {
    items: [
      { value: 'USA', name: '美国' },
      { value: 'CHN', name: '中国', checked: 'true' },
      { value: 'BRA', name: '巴西' },
      { value: 'JPN', name: '日本' },
      { value: 'ENG', name: '英国' },
      { value: 'FRA', name: '法国' },
    ],
    curValue: '',
    checked: false,
    disabled: false,
    color: '#09BB07',
  },

  checkboxChange(e) {
    const items = this.data.items
    const values = e.detail.value
    for (let i = 0, lenI = items.length; i < lenI; ++i) {
      items[i].checked = false

      for (let j = 0, lenJ = values.length; j < lenJ; ++j) {
        if (items[i].value === values[j]) {
          items[i].checked = true
          break
        }
      }
    }

    // 这里 this.setData({items}) 没有反应
    console.log(this.data.items)
    this.setData({
      curValue: e.detail.value.join(','),
    })
  },

  changeChecked() {
    this.setData({
      checked: !this.data.checked,
    })
  },

  changeDisabled() {
    this.setData({
      disabled: !this.data.disabled,
    })
  },

  changeColor({ detail }) {
    this.setData({
      color: detail.value,
    })
  },
})
