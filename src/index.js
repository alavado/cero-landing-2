import React from 'react'
import ReactDOM from 'react-dom'
import './reset.css'
import './index.css'
import App from './components/App'
import reportWebVitals from './reportWebVitals'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

reportWebVitals()
