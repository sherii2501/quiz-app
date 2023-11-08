import React from 'react';
import '../App.css';

const Questions = ({questionText}) => {
    return (
        <p className="quiz question">{questionText}</p>
    );
}

export default Questions;