import React from 'react';
import { useParams } from 'react-router-dom';
import AuthForm from '../../components/auth-form/AuthForm';

function RegisterPage(props) {
    const { invCode } = useParams();

    return (
        <>
            <div>{ invCode }</div>
            <AuthForm

            />
        </>
    );
}

export default RegisterPage;