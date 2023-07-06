(function() {
  const scrollTop = function () {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  const tipBox = document.createElement('div') // 创建提示框元素
  tipBox.innerHTML = '文章链接已复制到剪贴板！' // 设置提示框内容
  tipBox.style.display = 'none' // 隐藏提示框
  tipBox.style.position = 'fixed'
  tipBox.style.top = '20px'  // 将 bottom 属性修改为 top 属性
  tipBox.style.right = '20px' // 将 right 属性修改为 left 属性
  tipBox.style.backgroundColor = '#fff'
  tipBox.style.border = '1px solid #ccc'
  tipBox.style.borderRadius = '4px'
  tipBox.style.boxShadow = '0px 0px 10px #ccc'
  tipBox.style.padding = '10px'
  tipBox.style.zIndex = '9999'
  document.body.appendChild(tipBox) // 将提示框添加到页面中

  const share = function () {
    const url = window.location.href // 获取当前页面链接
    navigator.clipboard.writeText(url)
    tipBox.style.display = 'block' // 显示提示框
    setTimeout(() => {
      tipBox.style.display = 'none' // 2秒后隐藏提示框
    }, 200)
  }
  window.onload = function () {
    let backTopBtn = document.getElementById('backTop')

    // 文章页面，回到顶部按钮点击事件
    backTopBtn && backTopBtn.addEventListener('click', e => {
      e.preventDefault()
      scrollTop()
    })

    let shareBtn = document.getElementById('share')

    // 分享事件
    shareBtn && shareBtn.addEventListener('click', e => {
      e.preventDefault()
      share()
    })
  }

})(window)
