import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

document.querySelectorAll('link[rel="icon"]').forEach((icon) => icon.remove())
const favicon = document.createElement('link')
favicon.rel = 'icon'
favicon.type = 'image/png'
favicon.href = `${import.meta.env.BASE_URL}assets/favicon%201.png`.replace(/\/{2,}/g, '/')
document.head.appendChild(favicon)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
