import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import classes from '../login/Login.module.css';
import Form from '../../components/form/Form';
import axios from 'axios';
import Loading from '../loading/Loading';

function Register(props) {
    const navigate = useNavigate();

    const usernameIsTooShortErrorMessage = 'nickname is too short (6 symbols minimum)〣(ºΔº)〣';
    const usernameIsTakenErrorMessage = 'nickname is taken .｡･ﾟﾟ･(＞_＜)･ﾟﾟ･｡.';
    const passwordIsTooShortErrorMessage = 'password is too short (8 symbols minimum)〣(ºΔº)〣';
    const passwordContainErrorMessage = 'password must contain both letters and numbers 〣(ºΔº)〣';

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorAtUsername, setErrorAtUsername] = useState(false);
    const [errorAtPassword, setErrorAtPassword] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [redirect, setRedirect] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (username.length < 6) {
            setErrorAtUsername(true);
            setErrorMessage(usernameIsTooShortErrorMessage);
        } else {
            setErrorAtUsername(false);
            setErrorMessage('');
        }
    }, [username]);

    useEffect(() => {
        if (password.length < 8) {
            setErrorAtPassword(true);
            setErrorMessage(passwordIsTooShortErrorMessage);
        } else {
            setErrorAtPassword(false);
            setErrorMessage('');
        }
    }, [password]);

    useEffect(() => {
        if (redirect) {
            navigate('/my');
        }
    }, [navigate, redirect]);

    async function registerRequestToServer(body) {
        await axios.post("http://localhost:8080/api/register/", body);
    }

    const handleClickStart = () => {
        if (!errorAtUsername && !errorAtPassword) {
            setLoading(true);
            const registerRequestBody = {
                username,
                password
            };
            let promise = registerRequestToServer(registerRequestBody);
            promise
                .then(() => {
                    setLoading(false);
                    localStorage.setItem('ns-auth', JSON.stringify({
                        username,
                        password
                    }));
                    setRedirect(true);
                })
                .catch(errorMessage => {
                    setLoading(false);
                    console.log(errorMessage);
                    setErrorMessage('server error >_<');
                });
        }
    };

    return (
        <div className={ classes.box }>
            {
                loading
                    ? <Loading/>
                    : <Form
                        valueUsername={ username }
                        valuePassword={ password }
                        placeholderUsername={ 'create username' }
                        placeholderPassword={ 'create password' }
                        onChangeUsername={ setUsername }
                        onChangePassword={ setPassword }
                        onClickStart={ handleClickStart }
                        errorAtUsername={ errorAtUsername }
                        errorAtPassword={ errorAtPassword }
                        errorMessage={ errorMessage }
                    />
            }

        </div>
    );
}

export default Register;