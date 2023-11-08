import React from 'react';
import '../App.css';


const Progress = ({progress, total}) => {
    return (
        <span className="quiz progress">Question {progress + 1} of {total}</span>
    );
}


export default Progress;