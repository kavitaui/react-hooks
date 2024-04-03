import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import CountNumb from './CountNumb'
import './index.css'
import Model from './Model'
import Player from './Player'
import RefComponent from './RefComponent'
import TimerChallenge from './TimerChallenge'
import Workout from './Workout'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>

    <Player />
    <RefComponent />
    <div id="challenges">
      <TimerChallenge title="Easy" targetTime={1} />
      <TimerChallenge title="Not Easy" targetTime={5} />
      <TimerChallenge title="Getting Tough" targetTime={10} />
      <TimerChallenge title="Pros only" targetTime={15} />

    </div>
    <Workout />
    <CountNumb />
    <Model />


  </React.StrictMode>,
)
