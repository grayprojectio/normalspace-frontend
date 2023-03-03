import React, { useEffect, useState } from 'react';
import classes from './ThingCell.module.css';
import ThingCellDescription from './thing-cell-description/ThingCellDescription';
import ThingCellFilledDisplay from './thing-cell-display/filled/ThingCellFilledDisplay';
import { useAuthorization } from '../../hooks/useAuthorization';

/*
* Принимает item, это может быть как taskResult (содержит thing), так и thing
*
* Определяет, кому принадлежит item (свой или чужой)
* А так же, определяет лежит ли в item thing
* В зависимости от этого рендерит компоненты и функции
* */
function ThingCell({ item }) {
    useAuthorization();

    const [hovering, setHovering] = useState(false);
    const [stranger, setStranger] = useState(false);

    const username = 'ilya'; // for testing!!!
    useEffect(() => {

    }, [item]);

    const thingCellClasses
        = [classes.thing_cell, hovering && classes._hover];
    return (
        <div className={ classes.container }
             onMouseEnter={ () => setHovering(true) }
             onMouseLeave={ () => setHovering(false) }>

            <div className={ thingCellClasses.join(' ') }>
                <ThingCellFilledDisplay/>
            </div>

            <ThingCellDescription
                isHovering={ hovering }
                description={ 'The thing you spend the most time with every day' }
            />
        </div>
    );
}

export default ThingCell;