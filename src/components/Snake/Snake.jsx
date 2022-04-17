import React from 'react';
import './Snake.css';

const Snake = ({ snakePos }) => {
    return (
        <div>
            {snakePos.map((pos, key) => {
                const style = {
                    left: `${pos[0]}%`, //x-axis
                    top: `${pos[1]}%`   //y-axis
                }
                return (
                    <div className="head" key={key} style={style}></div>
                )
            })}
        </div>
    )
}

export default Snake