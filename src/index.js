import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App'
import { HashRouter } from 'react-router-dom'
import Socials from './Socials'
import Footer from './footer'

const appJsx = (
  <HashRouter>
    <App />
  
  </HashRouter>
  
 
)


ReactDOM.render(appJsx, document.getElementById('root'))
