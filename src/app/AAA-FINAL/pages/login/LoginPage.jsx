import React, { useState } from 'react';
import AuthForm from '../../components/auth-form/AuthForm';
import classes from './LoginPage.module.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuthorization } from '../../hooks/useAuthorization';

function LoginPage() {
    const errorMsgForUsername = '';
    const errorMsgForPassword = '';
    const errorMsg = 'check your nickname and password again .｡･ﾟﾟ･(＞_＜)･ﾟﾟ･｡.';

    const [usn, setUsn] = useState('');
    const [pwd, setPwd] = useState('');
    const [errorAtUsn, setErrorAtUsn] = useState(false);
    const [errorAtPwd, setErrorAtPwd] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');


    const navigate = useNavigate();
    const location = useLocation();
    const { signIn } = useAuthorization();

    const handleClickBtn = (event) => {
        event.preventDefault();

        // делаем попытку получить юзера с сервера


    };


    return (
        <div className={ classes.container }>
            <AuthForm
                usnVal={ usn }
                pwdVal={ pwd }
                usnPhd={ 'username' }
                pwdPhd={ 'password' }
                usnOnChange={ setUsn }
                pwdOnChange={ setPwd }
                errorAtUsn={ errorAtUsn }
                errorAtPwd={ errorAtPwd }
                errorMsg={ errorMessage }
                btnOnClick={ handleClickBtn }
            />
        </div>
    );
}

export default LoginPage;


// const navigate = useNavigate();
// const location = useLocation();
// const { signIn } = useAuthorization();
// const fromPage = location.state?.from?.pathname || '/';
//
// const handleSubmit = (event) => {
//     event.preventDefault();
//
//     const user = {
//         username: 'papa',
//         password: '12345'
//     };
//
//     signIn(user, () => navigate(fromPage, { replace: true }));
// };
