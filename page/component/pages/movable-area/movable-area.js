Page({
  data: {
    x: 0,
    y: 0,
    x1: 30,
    y1: 30,
  },
  move() {
    this.setData({
      x1: 50,
      y1: 50,
    })
  },
  scale() {
    this.setData({
      scale: 0.5 + Math.random() * 2.5,
    })
  },
  onChange(e) {
    console.log(e.detail)
  },
  onScale(e) {
    console.log(e.detail)
  },
})
