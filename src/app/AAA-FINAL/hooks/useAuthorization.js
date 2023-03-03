import { AuthorizationContext } from '../hoc/AuthorizationContext';
import { useContext } from 'react';

export function useAuthorization() {
    return useContext(AuthorizationContext);
}