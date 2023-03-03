import React from 'react';
import classes from './MenuButton.module.css';
import { profile } from '../../../data/pseudo-api';

function MenuButton(props) {
    return (
        <div className={ classes.box }>
            <button className={ classes.btn }>
                { profile.username.charAt(0).toUpperCase() }
            </button>
        </div>
    );
}

export default MenuButton;