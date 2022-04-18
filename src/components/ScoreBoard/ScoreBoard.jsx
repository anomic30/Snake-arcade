import React, { useState } from 'react';
import './ScoreBoard.css';

const ScoreBoard = () => {
    const [scores, setScores] = useState([]);

    return (
        <div className="scoreBoard">
            <div className="high-scores">
                <p>High Scores</p>
            </div>
            <table>
                <thead>
                    <tr>
                        <td className="tdhead">Rank</td>
                        <td className="tdhead">Name</td>
                        <td className="tdhead">Score</td>
                    </tr>
                </thead>
                <tbody>
                    {scores.map((val, idx) => {
                        return (
                            <tr key={idx}>
                                <td className="tdbody">{idx + 1}</td>
                                <td className="tdbody">{val.player}</td>
                                <td className="tdbody">{val.score}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default ScoreBoard
