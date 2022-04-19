import React from 'react'
import keyboard_help from '../../assets/keyboard.svg'
import './Help.css'

const Help = () => {
    return (
        <div className="help-con">
            <span>How to play!</span>
            <p>Use the arrow keys to move the snake. Avoid hitting the walls or yourself.</p>
            <p>Eat the food to increase your score.</p>
            <p>As you eat the food, the snake's movement speed increases.</p>
            <img src={keyboard_help} alt="Arrow-keys" />

        </div>
    )
}

export default Help