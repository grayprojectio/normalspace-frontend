import React from 'react';
import classes from './ProfileDescription.module.css';

function ProfileDescription({ description }) {
    return (
        <div className={ classes.box }>
            { description }
        </div>
    );
}

export default ProfileDescription;