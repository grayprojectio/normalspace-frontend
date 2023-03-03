import React from 'react';
import classes from './ThingCellFilledDisplay.module.css';


function ThingCellFilledDisplay({ item, isStronger }) {
    return (
        <div className={ classes.container }>
            <img
                draggable={ 'false' }
                alt={ '?' }
                className={ classes.img }
                src={ 'https://upload.wikimedia.org/wikipedia/ru/4/4c/Neo2.jpg' }
            />
        </div>
    );
}

export default ThingCellFilledDisplay;