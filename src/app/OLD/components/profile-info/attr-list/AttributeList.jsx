import React from 'react';
import classes from './AttributeList.module.css';
import { attributeList } from '../../../data/pseudo-api';
import Attr from './attr/Attr';

function AttributeList({ profileId }) {
    return (
        <div className={ classes.box }>
            {
                attributeList.map(attr => <Attr key={ attr.id } attr={ attr }/>)
            }
        </div>
    );
}

export default AttributeList;