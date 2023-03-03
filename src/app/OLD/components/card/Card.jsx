import React, { useState } from 'react';
import classes from './Card.module.css';
import Cell from '../cell/Cell';
import CellDescription from '../cell-description/CellDescription';

function Card({ taskResult, ...props }) {
    const [hover, setHover] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);

    const showModal = (flag) => {
        setHover(false);
        setModalVisible(flag);
    };

    return (
        <div
            { ...props }
            className={ classes.box }
            onMouseEnter={ () => setHover(true) }
            onMouseLeave={ () => setHover(false) }
        >
            <Cell
                taskResult={ taskResult }
                funcShowModal={ showModal }
                modalVisible={ modalVisible }
                hover={ modalVisible || hover }
            />
            <CellDescription
                taskResult={ taskResult }
                hover={ modalVisible || hover }
            />
        </div>
    );
}

export default Card;