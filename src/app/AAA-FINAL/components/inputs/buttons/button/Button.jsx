import React from 'react';
import classes from './Button.module.css';

function Button({ tit, onClick, ...props }) {
    return (
        <input
            { ...props }
            className={ classes.btn }
            type={ 'button' }
            value={ tit }
            onClick={ onClick }
        />
    );
}

export default Button;