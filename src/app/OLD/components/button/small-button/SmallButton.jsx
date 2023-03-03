import React from 'react';
import classes from './SmallButton.module.css';

function SmallButton({ value, onClick }) {
    return (
        <input
            type={ 'button' }
            className={ classes.box }
            value={ value }
            onClick={ onClick }
        />
    );
}

export default SmallButton;