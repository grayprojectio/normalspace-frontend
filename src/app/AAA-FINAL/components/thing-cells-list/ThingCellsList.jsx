import React from 'react';
import classes from './ThingCellsList.module.css';
import ThingCell from '../thing-cell/ThingCell';

function ThingCellsList({ }) {
    return (
        <div className={ classes.container }>
            { [...Array(8)].map(item => <ThingCell/>) }
        </div>
    );
}

export default ThingCellsList;