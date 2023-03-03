import React from 'react';
import classes from './ThingCellDescription.module.css';

function ThingCellDescription({ tit, description, isHovering, ...props }) {
    return (
        <div className={ classes.container } {...props}>
            <p style={ {
                cursor: 'pointer',
                textDecoration: isHovering ? 'underline' : 'none',
                marginBottom: '4px'
            } }>
                { tit ? tit : '???' }
            </p>
            {
                description &&
                <p style={ {
                    cursor: 'pointer',
                    textDecoration: isHovering ? 'underline' : 'none'
                } }>
                    { description }
                </p>
            }
        </div>
    );
}

export default ThingCellDescription;