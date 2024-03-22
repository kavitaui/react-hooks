import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import Player from './Player'
import RefComponent from './RefComponent'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>

    <Player />
    <RefComponent />
  </React.StrictMode>,
)
