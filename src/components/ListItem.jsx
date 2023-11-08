import React from 'react';

const ListItem = ({answerItem, answerCallback, index}) => {
    function onClickAnswer() {
        answerCallback(index);
    }

    return (
        <li onClick={onClickAnswer}>{answerItem}</li>
    );
}


export default ListItem;