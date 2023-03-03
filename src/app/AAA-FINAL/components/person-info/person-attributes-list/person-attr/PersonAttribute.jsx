import React from 'react';
import classes from './PersonAttribute.module.css';

function PersonAttribute(props) {
    return (
        <div className={ classes.container }>
            <div className={ classes.name }>
                { '???' }
            </div>
            <div className={ classes.value }>
                { '0' }&#65285;
            </div>
        </div>
    );
}

export default PersonAttribute;