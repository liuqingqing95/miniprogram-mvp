Page({
  // onShow() {
  //   console.log('onShow======')
  //   xhs?.reportAnalytics('enter_home_programmatically', {})
  // },
  // onHide() {
  //   console.log('onHide======')
  // },
  // onUnload() {
  //   console.log('onUnload======')
  // },
  onShareAppMessage() {
    return {
      title: '小程序官方组件展示',
      path: 'page/component/index',
    }
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
        pages: ['view', 'scroll-view', 'swiper'],
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
  },
  complete(res) {
    console.log('=======complete:invoke', res)
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
})
