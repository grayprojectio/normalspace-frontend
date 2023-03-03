import React from 'react';
import classes from './PersonAttributesList.module.css';
import PersonAttribute from './person-attr/PersonAttribute';

function PersonAttributesList(props) {
    return (
        <div className={ classes.container }>
            {
                [...Array(10)].map(item => <PersonAttribute />)
            }
        </div>
    );
}

export default PersonAttributesList;