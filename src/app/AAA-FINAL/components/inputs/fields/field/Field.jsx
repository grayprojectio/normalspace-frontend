import React from 'react';
import classes from './Field.module.css';

function Field({ type, value, placeholder, onChange, error }) {

    const fieldClasses = [classes.fld, error && classes.error];
    return (
        <input
            type={ type ? type : 'text' }
            value={ value }
            placeholder={ placeholder }
            className={ fieldClasses.join(' ') }
            onChange={ e => onChange(e.target.value) }
        />
    );
}

export default Field;