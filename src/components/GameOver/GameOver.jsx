import React from 'react';
import './GameOver.css';

const GameOver = ({gameOver, setGameOver}) => {
    return (
        <div className="gameover">
            <div className="over">
                <h2>Game</h2>
                <h2>Over!</h2>
            </div>
            <button onClick={() => {setGameOver(!gameOver)}}><h3>Restart</h3></button>
        </div>
    )
}

export default GameOver
