Page({
  onLoad() {
    console.log('onLoad 1')
  },
  onShow() {
    console.log('onShow 1')
  },
  onReady() {
    console.log('onReady 1')
  },
  onHide() {
    console.log('onHide 1')
  },
  onPullDownRefresh() {
    console.log('onPullDownRefresh')
  },
  onUnload() {
    console.log('onUnload 1')
  },
  onTabItemTap(item) {
    console.log('====component:', item)
  },
  onShareAppMessage() {
    return {}
    // return this.shareInfo
  },

  reLaunch() {
    console.log('re launch')
    // xhs.reLaunch({
    //   url: '/page/component/pages/navigator/navigate?na=navigate',
    // })
  },

  onClick() {
    const fromSource = {
      kdt_id: 16719442,
      source: 'goods',
      endpoint: 'h5',
      detail: {
        name: '【勿拍】bmy小红书001-不发货',
        alias: '3nqff3na6em5uis',
        price: '19.80-20.00',
        imgs: ['https://img01.yzcdn.cn/upload_files/2021/11/10/FkNchYEr_xbhFzYXUK5qbxnPT7sB.jpeg'],
      },
      shopName: 'YZ测试-心怡画坊旗舰店',
      price: '19.80-20.00',
    }

    const imConfig = {
      kdtId: 16719442,
      fs: JSON.stringify({ name: 123 }),
      origin: '',
      target: 'index',
      pageType: 'goods',
      alias: '3nqff3na6em5uis',
    }

    const params = obj =>
      Object.keys(obj)
        .reduce((p, c) => {
          obj[c] && p.push(`${encodeURIComponent(c)}=${encodeURIComponent(obj[c])}`)
          return p
        }, [])
        .join('&')

    const webviewUrl = `https://h5.youzan.com/v3/im/index?${params(imConfig)}`
    console.log('-----------------------url---------------------:', webviewUrl)
    this.setData({ webviewSrc: webviewUrl })
  },

  data: {
    list: [
      {
        id: 'event',
        name: 'wxml事件',
        open: false,
        pages: ['event', 'event-transition'],
      },
      {
        id: 'view',
        name: '视图容器',
        open: false,
        pages: ['view', 'scroll-view', 'swiper', 'movable-area'],
      },
      {
        id: 'content',
        name: '基础内容',
        open: false,
        pages: ['text', 'icon', 'progress', 'rich-text'],
      },
      {
        id: 'form',
        name: '表单组件',
        open: false,
        pages: [
          'button',
          'checkbox',
          'form',
          'input',
          'label',
          'picker',
          'picker-view',
          'radio',
          'slider',
          'switch',
          'textarea',
          'editor',
        ],
      },
      {
        id: 'nav',
        name: '导航',
        open: false,
        pages: ['navigator'],
      },
      {
        id: 'media',
        name: '媒体组件',
        open: false,
        pages: ['image', 'video', 'camera'],
      },
      {
        id: 'open',
        name: '开放能力',
        open: false,
        pages: ['webview'],
      },
      {
        id: 'map',
        name: '地图',
        open: false,
        pages: ['map'],
      },
    ],
    inputVal: '',
    webviewSrc: 'x',
    inputMargin: 0,
  },
  complete(res) {
    console.log('=======complete:invoke', res)
  },
  onLoad() {
    // xhs?.request({
    //   url: 'https://suggest.taobao.com/sug?code=utf-8&q=%E5%95%86%E5%93%81%E5%85%B3%E9%94%AE%E5%AD%97&callback=cb',
    //   method: 'GET',
    // })
    xhs.prefetch({
      url: 'https://www.xiaohongshu.com',
      complete: () => {
        xhs.showToast({ title: 'prefetch success' })
      },
    })
  },

  reLaunch() {
    xhs.reLaunch({
      url: '/page/component/pages/navigator/navigate?na=navigate',
    })
  },

  // onLoad(query) {
  //   console.log('onLoad======', query)
  // },

  // onReady() {
  //   console.log('onReady======')
  // },

  kindToggle(e) {
    const id = e.currentTarget.id
    const list = this.data.list
    for (let i = 0, len = list.length; i < len; ++i) {
      if (list[i].id === id) {
        list[i].open = !list[i].open
      } else {
        list[i].open = false
      }
    }
    this.setData({
      list,
    })
    xhs?.reportAnalytics('click_view_programmatically', {})
  },
  onMessage(e) {
    this.shareInfo = e.detail.data
  },
  bindInput(e) {
    this.setData({ inputMargin: (this.data.inputMargin += 10) })
  },
})
