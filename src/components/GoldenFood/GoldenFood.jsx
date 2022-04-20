import React from 'react';
import './GoldenFood.css';
import food from '../../assets/golden-apple.png';

const GoldenFood = ({ goldenFoodPos }) => {
    const style = {
        left: `${goldenFoodPos[0]}%`,
        top: `${goldenFoodPos[1]}%`
    };
    return (
        <div className={`specialfood ${goldenFoodPos.length===0? 'hide':''}`} style={style}>
            <img src={food} alt="food" />
        </div>
    )
}

export default GoldenFood
