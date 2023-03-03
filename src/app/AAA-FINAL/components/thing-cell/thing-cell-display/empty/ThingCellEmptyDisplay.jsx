import React, { useEffect } from 'react';
import classes from './ThingCellEmptyDisplay.module.css';
import icon from './icon-add-new-thing.svg';

function ThingCellEmptyDisplay({ isHovering, isStronger }) {

    return (
        <>
            { isHovering &&
                <div className={ classes.container_add_new_thing }>
                    <img
                        alt={ '?' }
                        src={ icon }
                    />
                </div>
            }
        </>
    );
}

export default ThingCellEmptyDisplay;