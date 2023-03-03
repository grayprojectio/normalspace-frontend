import React from 'react';
import classes from './Nickname.module.css';

function Nickname({ nickname }) {
    return (
        <div className={ classes.box }>
            <span>@{ nickname ? nickname : '???' }</span>
        </div>
    );
}

export default Nickname;