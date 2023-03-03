import React from 'react';
import { useAuthorization } from '../../hooks/useAuthorization';
import Loading from '../../components/loading/Loading';

function SettingPage(props) {
    const { user } = useAuthorization();

    return(
        <Loading />
    )
}

export default SettingPage;