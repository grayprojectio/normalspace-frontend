import React from 'react';
import classes from './GenericInput.module.css';

function GenericInput({ type, value, placeholder, error, onChange }) {

    return (
        <input
            type={ type ? type : 'text' }
            value={ value }
            placeholder={ placeholder }
            className={ classes.box + ' ' + (error ? classes.err : '') }
            onChange={ e => onChange(e.target.value) }
        />
    );
}

export default GenericInput;