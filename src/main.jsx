import React from 'react'
import ReactDOM from 'react-dom/client'

// 极简测试：不导入 App，直接显示文字
const root = document.getElementById('root')
if (root) {
  ReactDOM.createRoot(root).render(
    <div style={{ padding: '2rem', textAlign: 'center', fontFamily: 'sans-serif' }}>
      <h1 style={{ color: 'green' }}>✅ React 渲染成功！</h1>
      <p>如果看到这个，说明基础环境正常，空白是 App 组件的问题。</p>
    </div>
  )
} else {
  root.innerHTML = '错误：找不到 #root 元素'
}
