const demoImageFileId = require('../../config').demoImageFileId

Page({
  onShareAppMessage() {
    return {
      title: '下载文件',
      path: 'packageAPI/pages/download-file/download-file',
    }
  },

  downloadImage() {
    const self = this

    xhs?.cloud.downloadFile({
      fileID: demoImageFileId, // 文件 ID
      success: res => {
        console.log('downloadFile success, res is', res)

        self.setData({
          imageSrc: res.tempFilePath,
        })
      },
      fail: console.error,
    })
  },
})
