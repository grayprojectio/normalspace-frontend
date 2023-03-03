import React from 'react';
import classes from './Attr.module.css';

function Attr({ attr, ...props }) {
    return (
        <div className={ classes.box }>
            <div className={ classes.name }>{
                attr.name ? attr.name : '???'
            }</div>
            <div className={ classes.value }>{
                attr.value ? attr.value : '0'
            }&#65285;</div>
        </div>
    );
}

export default Attr;