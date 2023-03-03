import React from 'react';
import { useParams } from 'react-router-dom';

function CollectionPage(props) {
    const { collectionId } = useParams();

    return (
        <div>
            { collectionId }
        </div>
    );
}

export default CollectionPage;