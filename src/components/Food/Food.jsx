import React from 'react';
import './Food.css';
import food from '../../assets/apple.png';

const Food = ({ foodPos }) => {
    const style = {
        left: `${foodPos[0]}%`,
        top: `${foodPos[1]}%`
    };
    return (
        <div className="food" style={style}>
            <img src={food} alt="food" />
        </div>
    )
}

export default Food
