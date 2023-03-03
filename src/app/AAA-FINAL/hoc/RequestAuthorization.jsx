import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuthorization } from '../hooks/useAuthorization';

function RequestAuthorization({ children }) {
    const location = useLocation();
    const { user } = useAuthorization();

    if (!user?.username && !user?.password) {
        return <Navigate to={ '/login' } state={ { from: location } }/>;
    }

    return (
        <>
            { children }
        </>
    );
}

export default RequestAuthorization;