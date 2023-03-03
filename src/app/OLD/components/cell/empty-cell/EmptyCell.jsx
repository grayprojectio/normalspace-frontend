import React from 'react';
import classes from './EmptyCell.module.css';
import addIcon from '../../../../AAA-FINAL/components/thing-cell/thing-cell-display/empty/icon-add-new-thing.svg';

function EmptyCell({ hover, ...props }) {

    return (
        <div
            { ...props }
            className={ classes.box + ' ' + (hover ? classes.box_hover : '') }>
            <img
                className={ classes.icon }
                alt={ '?' } src={ addIcon }
            />
        </div>
    );
}

export default EmptyCell;