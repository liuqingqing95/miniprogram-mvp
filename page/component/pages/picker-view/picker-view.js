const date = new Date()
const years = []
const months = []
const days = []

for (let i = 1990; i <= date.getFullYear(); i++) {
  years.push(i)
}

for (let i = 1; i <= 12; i++) {
  months.push(i)
}

for (let i = 1; i <= 31; i++) {
  days.push(i)
}

Page({
  onShareAppMessage() {
    return {
      title: 'picker-view',
      path: 'page/component/pages/picker-view/picker-view',
    }
  },

  data: {
    years,
    year: date.getFullYear(),
    months,
    month: 2,
    days,
    day: 2,
    value: [9999, 1, 1],
    isDaytime: true,
    indicatorStyle: 'height: 50px;',
    maskStyle: '',
    bindpickstartTime: '',
    bindpickendTime: '',
  },

  setDefaultValue() {
    this.setData({
      value: [1, 1, 1],
    })
  },

  setChangeIndicatorHeight() {
    this.setData({
      indicatorStyle: 'height: 70px;',
    })
  },

  setChangeMaskStyle() {
    this.setData({
      maskStyle: 'background-image: none;',
    })
  },

  bindChange(e) {
    const val = e.detail.value
    this.setData({
      year: this.data.years[val[0]],
      month: this.data.months[val[1]],
      day: this.data.days[val[2]],
      isDaytime: !val[3],
    })
  },

  bindpickstart(e) {
    this.setData({
      bindpickstartTime: e.timeStamp,
    })
  },

  bindpickend(e) {
    this.setData({
      bindpickendTime: e.timeStamp,
    })
  },
})
