import React from 'react';
import classes from './PesronInfo.module.css';
import PersonDescription from './person-description/PersonDescription';
import PersonAttributesList from './person-attributes-list/PersonAttributesList';

function PersonInfo(props) {
    return (
        <div className={ classes.column_container }>
            <div className={ classes.username }>
                <span>{ '@username' }</span>
            </div>
            <div className={ classes.row_container }>
                <PersonDescription/>
                <PersonAttributesList />
            </div>
        </div>
    );
}

export default PersonInfo;