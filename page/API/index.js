Page({
  onShareAppMessage() {
    return {
      title: '小程序接口能力展示',
      path: 'page/API/index',
    }
  },

  onTabItemTap(item) {
    console.log('====API:', item)
  },
  onShow() {
    console.log('--------onShow')
  },
  data: {
    list: [
      {
        id: 'base',
        name: '基础',
        open: false,
        pages: [
          {
            zh: 'canIUse',
            url: 'caniuse/caniuse',
          },
          {
            zh: 'base64ToArrayBuffer/arrayBufferToBase64',
            url: 'base64arraybuffer/base64arraybuffer',
          },
        ],
      },
      {
        id: 'api',
        name: '开放接口',
        open: false,
        pages: [
          {
            zh: '微信登录',
            url: 'login/login',
          },
          {
            zh: '检查登录状态是否过期',
            url: 'check-session/check-session',
          },
          {
            zh: '获取用户信息',
            url: 'get-user-info/get-user-info',
          },
          {
            zh: '发起支付',
            url: 'request-payment/request-payment',
          },
          {
            zh: '转发',
            url: 'share/share',
          },
          {
            zh: '转发按钮',
            url: 'share-button/share-button',
          },
          {
            zh: '收货地址',
            url: 'choose-address/choose-address',
          },
          {
            zh: '设置',
            url: 'setting/setting',
          },
          {
            zh: '第三方平台 extConfig',
            url: 'ext-config/ext-config',
          },
          {
            zh: 'getAccountInfoSync',
            url: 'get-account-info-sync/get-account-info-sync',
          },
        ],
      },
      {
        id: 'page',
        name: '界面',
        open: false,
        pages: [
          {
            zh: '设置界面标题',
            url: 'set-navigation-bar-title/set-navigation-bar-title',
          },
          {
            zh: '设置界面标题颜色',
            url: 'set-navigation-bar-color/set-navigation-bar-color',
          },
          {
            zh: '设置TabBar',
            url: 'set-tab-bar-item/set-tab-bar-item',
          },
          {
            zh: '设置TabBarStyle',
            url: 'set-tab-bar-style/set-tab-bar-style',
          },
          {
            zh: '标题栏加载动画',
            url: 'navigation-bar-loading/navigation-bar-loading',
          },
          {
            zh: '页面跳转',
            url: 'navigator/navigator',
          },
          {
            zh: 'start/stop pull-down-refresh',
            url: 'pull-down-refresh/pull-down-refresh',
          },
          {
            zh: '显示操作菜单',
            url: 'action-sheet/action-sheet',
          },
          {
            zh: '显示模态弹窗',
            url: 'modal/modal',
          },
          {
            zh: '显示消息提示框',
            url: 'toast/toast',
          },
          {
            zh: '显示loading提示框',
            url: 'loading/loading',
          },
          {
            zh: 'hideHomeButton',
            url: 'hide-home-button/hide-home-button',
          },
          {
            zh: 'getMenuButtonBoundingClientRect',
            url: 'menu-button/menu-button',
          },
          {
            zh: '动画',
            url: 'animation/animation',
          },
        ],
      },
      {
        id: 'device',
        name: '设备',
        open: false,
        pages: [
          {
            zh: '获取手机网络状态',
            url: 'get-network-type/get-network-type',
          },
          {
            zh: '监听手机网络变化',
            url: 'on-network-status-change/on-network-status-change',
          },
          {
            zh: '获取手机系统信息',
            url: 'get-system-info/get-system-info',
          },
          {
            zh: '获取手机设备电量',
            url: 'get-battery-info/get-battery-info',
          },
          {
            zh: '监听罗盘数据',
            url: 'on-compass-change/on-compass-change',
          },
          {
            zh: '打电话',
            url: 'make-phone-call/make-phone-call',
          },
          {
            zh: '扫码',
            url: 'scan-code/scan-code',
          },
          {
            zh: '剪切板',
            url: 'clipboard-data/clipboard-data',
          },
          {
            zh: 'iBeacon',
            url: 'ibeacon/ibeacon',
          },
          {
            zh: '屏幕亮度',
            url: 'screen-brightness/screen-brightness',
          },
          {
            zh: '用户截屏事件',
            url: 'capture-screen/capture-screen',
          },
          {
            zh: '振动',
            url: 'vibrate/vibrate',
          },
          {
            zh: '手机联系人',
            url: 'add-contact/add-contact',
          },
          {
            zh: '内存告警',
            url: 'memory-warn/memory-warn',
          },
        ],
      },
      {
        id: 'performance',
        name: '性能',
        open: false,
        pages: [
          {
            zh: '获取性能数据',
            url: 'get-performance/get-performance',
          },
        ],
      },
      {
        id: 'network',
        name: '网络',
        open: false,
        pages: [
          {
            zh: '发起一个请求',
            url: 'request/request',
          },
          {
            zh: 'upload-file',
            url: 'upload-file/upload-file',
          },
          {
            zh: 'websocket',
            url: 'websocket/websocket',
          },
        ],
      },
      {
        id: 'media',
        name: '媒体',
        open: false,
        pages: [
          {
            zh: '图片',
            url: 'image/image',
          },
          {
            zh: '音频',
            url: 'audio/audio',
          },
          {
            zh: '录音',
            url: 'voice/voice',
          },
          {
            zh: '背景音频',
            url: 'background-audio/background-audio',
          },
          {
            zh: '文件',
            url: 'file/file',
          },
          {
            zh: '视频',
            url: 'video/video',
          },
          {
            zh: '动态加载字体',
            url: 'load-font-face/load-font-face',
          },
          {
            zh: '蓝牙',
            url: 'bluetooth/bluetooth',
          },
          {
            zh: 'downloadFile',
            url: 'download-file/download-file',
          },
        ],
      },
      {
        id: 'location',
        name: '位置',
        open: false,
        pages: [
          {
            zh: '获取当前位置',
            url: 'get-location/get-location',
          },
        ],
      },
      {
        id: 'storage',
        name: '数据',
        pages: [
          {
            zh: '同步存储',
            url: 'storage/storage',
          },
          {
            zh: '异步存储',
            url: 'storage-async/storage',
          },
        ],
      },
      {
        id: 'framework',
        name: '框架',
        pages: [
          {
            zh: '双向绑定',
            url: 'two-way-bindings/two-way-bindings',
          },
          {
            zh: '定时器',
            url: 'timer/timer',
          },
          {
            zh: 'eval',
            url: 'eval/eval',
          },
          {
            zh: 'lifecycle',
            url: 'lifecycle/lifecycle',
          },
          {
            zh: 'getLaunchOptionsSync/getEnterOptionsSync',
            url: 'getLaunchOptionsSync/getLaunchOptionsSync',
          },
        ],
      },
    ],
    isSetTabBarPage: false,
    theme: 'light',
  },
  kindToggle(e) {
    const id = e.currentTarget.id
    const list = this.data.list
    for (let i = 0, len = list.length; i < len; ++i) {
      if (list[i].id === id) {
        if (list[i].url) {
          xhs?.navigateTo({
            url: `../../pages/${list[i].url}`,
          })
          return
        }
        list[i].open = !list[i].open
      } else {
        list[i].open = false
      }
    }
    this.setData({
      list,
    })
  },
  enterSetTabBarPage() {
    this.setData({
      isSetTabBarPage: true,
    })
  },
  handleTab() {
    const title = []
    xhs.setTabBarStyle({
      color: '#00ff00',
      success: () => {
        title.push('success')
      },
      fail: () => {
        title.push('fail')
      },
      complete: () => {
        title.push('complete')
        xhs.showToast({ title: title.join('-') })
      },
    })
  },
})
