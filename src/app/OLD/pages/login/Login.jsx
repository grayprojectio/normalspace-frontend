import React, { useEffect, useState } from 'react';
import Form from '../../components/form/Form';
import classes from './Login.module.css';
import { useNavigate } from 'react-router-dom';

function Login(props) {
    const usernameErrorMessage = 'bad username';
    const passwordErrorMessage = 'bad password';
    const commonErrorMessage = 'check your nickname and password again .｡･ﾟﾟ･(＞_＜)･ﾟﾟ･｡.';

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorAtUsername, setErrorAtUsername] = useState(false);
    const [errorAtPassword, setErrorAtPassword] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const [redirect, setRedirect] = useState(false);

    const navigate = useNavigate();
    useEffect(() => {
        if (redirect) {
            return navigate('/my');
        }
    }, [navigate, redirect]);


    const handleClickStart = () => {
        /**
         * Попытка получить профиль из базы по данным аутентификации
         * Если профиль получен, сохраняем его в localStorage
         * Иначе выбрасываем ошибку
         */
        const raw = username + ':' + password;
        const authString = btoa(raw);



        setRedirect(true);
    };


    return (
        <div className={ classes.box }>
            <Form
                valueUsername={ username }
                valuePassword={ password }
                placeholderUsername={ 'username' }
                placeholderPassword={ 'password' }
                onChangeUsername={ setUsername }
                onChangePassword={ setPassword }
                onClickStart={ handleClickStart }
                errorAtUsername={ errorAtUsername }
                errorAtPassword={ errorAtPassword }
                errorMessage={ errorMessage }
            />
        </div>
    );
}

export default Login;