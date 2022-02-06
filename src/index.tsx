import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'

const script = document.createElement("script")
script.async = true
script.text = `
<script async src="https://www.googletagmanager.com/gtag/js?id=G-GR99QS3PLS"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  windows.gtag = gtag;
  gtag("js", new Date());
  gtag("config", "G-GR99QS3PLS");
</script>`
document.body.appendChild(script)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
