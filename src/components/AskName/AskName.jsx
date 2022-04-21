import React, { useState } from 'react'
import { api } from '../../functions/api'
import './AskName.css'

const AskName = ({ setPlayer, setScore, setGameOver }) => {
  const [playerName, setPlayerName] = useState("");

  async function createPlayer() {
    setScore(0);
    setGameOver(false);
    localStorage.removeItem('cookieFallback')
    localStorage.removeItem('highscore');
    await api.account.createAnonymousSession();
    await api.account.updateName(playerName);
    localStorage.setItem('player', playerName);
    setPlayer(playerName);
    console.log("Player successfully created");
    const res = await api.account.getSessions();
    localStorage.setItem('userId', res.sessions[0].userId);
  }

  return (
    <div className='askName'>
      <h1>Enter your name</h1>
      <div className='subcon'>
        <input type='text' onChange={(e) => { setPlayerName(e.target.value) }} />
        <div className="save-btn" onClick={createPlayer}>Save</div>
      </div>
    </div>
  )
}

export default AskName