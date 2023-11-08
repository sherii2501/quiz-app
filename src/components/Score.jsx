import React from 'react';
import '../App.css';

const Score = ({score}) => {
    return (
        <span className="quiz score">Score: {score}</span>
    );
}



export default Score;