import React from 'react';
import classes from './Cell.module.css';
import EmptyCell from './empty-cell/EmptyCell';
import FilledCell from './filled-cell/FilledCell';

function Cell({ funcShowModal, modalVisible, hover, taskResult, ...props }) {

    return (
        <div
            { ...props }
            className={ classes.box + ' ' + (modalVisible || hover ? classes.box_hover : '') }>

            {
                taskResult.thing
                    ? <FilledCell
                        modalVisible={ modalVisible }
                        funcShowModal={ funcShowModal }
                        hover={ hover }
                        thing={ taskResult.thing }
                    />
                    : <EmptyCell hover={ hover }/>
            }
        </div>
    );
}

export default Cell;
