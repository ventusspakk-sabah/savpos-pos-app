import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

const root = document.getElementById('root')
if (!root) throw new Error('根元素 #root 不存在')

try {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
} catch (err) {
  root.innerHTML = `
    <div style="padding: 20px; background: #fee; color: #c00; font-family: monospace;">
      <h3>React 渲染错误：</h3>
      <pre>${err.message}\n${err.stack?.slice(0, 500)}</pre>
    </div>
  `
  console.error(err)
}
