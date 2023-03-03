import React from 'react';
import classes from './Header.module.css';
import Logo from '../logo/Logo';
import { NavLink } from 'react-router-dom';
import LetterButton from '../inputs/buttons/letter-button/LetterButton';

function Header() {

    const clickHandler = (event) => {

    };

    return (
        <div className={ classes.container }>
            <NavLink
                to={ '/space' }
                replace={ false }>
                <Logo/>
            </NavLink>

            <LetterButton
                letter={ '?' }
                onClick={ clickHandler }/>
        </div>
    );
}

export default Header;