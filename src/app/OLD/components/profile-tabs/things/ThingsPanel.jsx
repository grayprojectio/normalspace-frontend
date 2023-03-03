import React from 'react';
import classes from './ThingsPanel.module.css';
import Card from '../../card/Card';
import { taskResults } from '../../../data/pseudo-api';
import { profile } from '../../../data/pseudo-api';

function ThingsPanel(props) {

    // todo filter by profile
    return (
        <div className={ classes.box }>
            {
                taskResults.map(tr => <Card key={ tr.id } taskResult={ tr }/>)
            }
        </div>
    );
}

export default ThingsPanel;