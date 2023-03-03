import React from 'react';
import classes from './PersonNavBar.module.css';
import { NavLink, Outlet } from 'react-router-dom';

function PersonNavBar(props) {
    return (
        <>
            <div className={ classes.container }>
                <NavLink to={ 'things' }>/things</NavLink>
                <NavLink to={ 'collections' }>/collections</NavLink>
                <NavLink to={ 'archive' }>/archive</NavLink>
            </div>
            <Outlet/>
        </>
    );
}

export default PersonNavBar;