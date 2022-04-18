import React, { useState } from 'react'
import './AskName.css'

const AskName = ({setPlayer, setScore, setGameOver}) => {
  const [playerName, setPlayerName] = useState("");
  function savePlayer() {
    setScore(0);
    setGameOver(false);
    localStorage.removeItem('highscore');
    localStorage.setItem('player', playerName);
    setPlayer(playerName);
  }

  return (
    <div className='askName'>
      <h1>Enter your name</h1>
      <div className='subcon'>
        <input type='text' onChange={(e) => { setPlayerName(e.target.value) }} />
        <div className="save-btn" onClick={savePlayer}>Save</div>
      </div>
    </div>
  )
}

export default AskName