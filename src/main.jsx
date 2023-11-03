import React from 'react'
import ReactDOM from 'react-dom/client'
import App from "./routes"
import './index.css'
import { TokenProvider } from './utils/states/token'

ReactDOM.createRoot(document.getElementById('root')).render(
  <TokenProvider>
    <App />
  </TokenProvider>,
)
