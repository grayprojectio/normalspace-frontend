import React, { useEffect } from 'react';
import classes from './CellDescription.module.css';
import { tasks } from '../../data/pseudo-api';

function CellDescription({ taskResult, modalVisible, hover, header, text, ...props }) {

    const taskByTaskResult = tasks.find(t => t.id === taskResult.taskId);

    return (
        <div
            { ...props }
            className={ classes.box + ' ' + (modalVisible || hover ? classes.box_hover : '') }>
            {
                taskResult.thing
                    ? <span>0000{ taskResult.thing.id }</span>
                    : <span>Task { taskByTaskResult.number }</span>
            }
            {
                [<br/>, <span>{ taskByTaskResult.description }</span>]
            }
        </div>
    );
}

export default CellDescription;