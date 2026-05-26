import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

const rootElement = document.getElementById('root')
if (!rootElement) throw new Error('根元素 #root 不存在')

try {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
} catch (error) {
  // 将错误显示在页面上，而不是空白
  rootElement.innerHTML = `
    <div style="padding: 1rem; color: #dc2626; background: #fee2e2; font-family: monospace; white-space: pre-wrap;">
      <strong>React 渲染错误：</strong><br/>
      ${error.message}<br/>
      ${error.stack ? error.stack.split('\n').slice(0, 5).join('<br/>') : ''}
    </div>
  `
  console.error(error)
}
