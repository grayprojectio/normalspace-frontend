import React from 'react';
import { useParams } from 'react-router-dom';

function ThingPage(props) {
    const { thingId } = useParams();

    return (
        <div>{ thingId }</div>
    );
}

export default ThingPage;