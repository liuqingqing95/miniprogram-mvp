const htmlSnip = `<div class="div_class">
  <h1>Title</h1>
  <p class="p">
    Life is&nbsp;<i>like</i>&nbsp;a box of
    <b>&nbsp;chocolates</b>.
  </p>
</div>
`

const nodeSnip = `Page({
  data: {
    nodes: [{
      name: 'div',
      attrs: {
        class: 'div_class',
        style: 'line-height: 60rpx; color: #1AAD19;'
      },
      children: [{
        type: 'text',
        text: 'You never know what you're gonna get.'
      }]
    }]
  }
})
`

Page({
  onShareAppMessage() {
    return {
      title: 'rich-text',
      path: 'page/component/pages/rich-text/rich-text',
    }
  },

  data: {
    htmlSnip,
    nodeSnip,
    renderedByHtml: false,
    renderedByNode: false,
    nodes: [
      {
        name: 'div',
        attrs: {
          class: 'div_class',
          style: 'line-height: 60rpx; color: #1AAD19;',
        },
        children: [
          {
            type: 'text',
            text: "You never know what you're gonna get.",
          },
        ],
      },
    ],
    rt1: `
      <a href="https://www.xiaohongshu.com">a</a>
      <br />
      <abbr>abbr</abbr>
      <br />
      <b style="width: 100rpx">b width 100rpx</b>
      <br />
      <blockquote>blockquote</blockquote>
      <br />
      <code>code</code>
      <br />
      <del>del</del>
      <br />
      <div>div</div>
      <br />
      <em>em</em>
      <br />
      <fieldset>fieldset</fieldset>
      <br />
      <h1 style="height: 100rpx">h1 height 100rpx</h1>
      <h2>h2</h2>
      <h3>h3</h3>
      <h4>h4</h4>
      <h5>h5</h5>
      <h6>h6</h6>
      <hr />
      <i>i</i>
      <br />
      <img alt="alt" src="http://www.3xiayou.com/upload/upload/1528174589.jpg" width="100px" height="100px" />
      <ol>
        <li>ol1</li>
        <li>ol2</li>
      </ol>

      <br />
      <p>p</p>
      <br />
      <q>q</q>
      <br />
      <span>span</span>
      <br />
      <strong>strong</strong>
      <br />
      <sub>sub</sub>
      <br />
      <sup>sup</sup>
      <br />
      <table>
        <thead>
          <tr>
            <th>Table Header content 1</th>
            <th>Table Header content 2</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Table Body content 1</td>
            <td>Table Body content 2</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td>Table Footer content 1</td>
            <td>Table Footer content 2</td>
          </tr>
        </tfoot>
      </table>
      <br />
      <ul>
        <li>ul1</li>
        <li>ul2</li>
      </ul>
    `,
  },
  renderHtml() {
    this.setData({
      renderedByHtml: true,
    })
  },
  renderNode() {
    this.setData({
      renderedByNode: true,
    })
  },
  enterCode(e) {
    console.log(e.detail.value)
    this.setData({
      htmlSnip: e.detail.value,
    })
  },
})
