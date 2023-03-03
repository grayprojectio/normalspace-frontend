import React from 'react';
import classes from './LetterButton.module.css';

function LetterButton({ letter, onClick }) {

    return (
        <input
            type={ 'button' }
            value={ letter.trim().charAt(0) }
            onClick={ onClick }
            className={ classes.btn }
        />
    );
}

export default LetterButton;