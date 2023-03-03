import React from 'react';
import classes from './LongButton.module.css';

function LongButton({ disabled, value, onClick, ...props }) {
    return (
        <input
            disabled={ disabled }
            type={ 'button' }
            value={ value }
            className={ classes.box }
            onClick={ onClick }
        />
    );
}

export default LongButton;