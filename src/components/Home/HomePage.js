import React, { useState } from 'react'
import GameForm from '../Forms/GameForm'

export default function Home() {
  const [gameForm, setGameForm] = useState('')

  //function to close form
  function closeForm() {
    setGameForm('')
  }

  return (
    <div className="app-container">
      <div className='container'>
        <div className="select-jeu">
          <div className="select-jeu-text">Sélectionnez votre jeu à recharger</div>
          <div className='line'></div>
        </div>
        <div className='jeux-block'>
          <div className="jeu" onClick={() => { setGameForm('Free_Fire') }}>
            <img src="https://cdngarenanow-a.akamaihd.net/gop/app/0000/100/067/icon.png" alt="free fire" />
            <span>Free Fire</span>
          </div>
          <div className="jeu" onClick={() => { setGameForm('PUBG') }}>
            <img src="https://akm-img-a-in.tosshub.com/sites/btmt/images/stories/pub_660x450_120318045802.jpg" alt="pubg" />
            <span>PUBG</span>
          </div>
          <div className="jeu" onClick={() => { setGameForm('Fortnite') }}>
            <img src="https://cdn2.unrealengine.com/battle-pass-chapter-2-season-6-1920x1080-dc8eb73dc494.jpg" alt="fortnite" />
            <span>Fortnite</span>
          </div>
          <div className="jeu" onClick={() => { setGameForm('Call_Of_Duty') }}>
            <img src="https://www.cnet.com/a/img/l8RbnOsHzo6C0fHx-A7yGCDZxGI=/1200x675/2019/09/18/c07d7cfa-5cc7-4d64-a3bb-aabf6b778dcc/call-of-duty-mobile.jpg" alt="call of duty" />
            <span>Call of Duty</span>
          </div>
        </div>
        {gameForm !== '' ? <GameForm closeForm={closeForm} gameName={gameForm} /> : ''}
      </div>
    </div>
  )
}
