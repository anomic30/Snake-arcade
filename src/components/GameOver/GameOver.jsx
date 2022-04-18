import React from 'react';
import './GameOver.css';

const GameOver = ({setGameOver}) => {
    return (
        <div className="gameover">
            <div className="over">
                <h2>Game</h2>
                <h2>Over!</h2>
            </div>
            <button onClick={() => {setGameOver(false)}}><h3>Restart</h3></button>
        </div>
    )
}

export default GameOver
