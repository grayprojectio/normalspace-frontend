import React from 'react';
import classes from './Logo.module.css';
import logo from './logo.svg'

function Logo(props) {
    return (
        <div className={ classes.container }>
            <img
                alt={ '?' }
                className={ classes.img }
                src={ logo }
            />
        </div>
    );
}

export default Logo;