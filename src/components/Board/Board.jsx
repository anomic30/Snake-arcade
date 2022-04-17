import React, { useState } from 'react'
import './Board.css'
import Snake from '../Snake/Snake'
import Food from '../Food/Food'
import getRandom from '../../functions/getRandom'

const Board = () => {
    const [snakePos, setSnakePos] = useState([[44, 44]]);
    const [foodPos, setFoodPos] = useState(getRandom());
    const [score, setScore] = useState(0);
    return (
        <div className='board'>
            <div className="name-input">
                <p>Player name:</p>
                <input type="text"/>
            </div>
            <div className="snake-board">
                <Snake snakePos={snakePos} />
                <Food foodPos={foodPos} />
            </div>
            <div className="scores">
                <p>Your Highscore: <span className="dig">{score}</span></p>
                <p>Current Score: <span className="dig">{(snakePos.length - 1) * 10}</span></p>
            </div>
        </div>
    )
}

export default Board