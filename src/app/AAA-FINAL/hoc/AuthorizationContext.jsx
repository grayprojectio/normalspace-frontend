import { createContext, useState } from 'react';
import axios from 'axios';

export const AuthorizationContext = createContext(null);

export const AuthorizationProvider = ({ children }) => {
    const [profile, setProfile] = useState();

    const register = async (authData, invCode, redirectSuccessfully, redirectError) => {
        await axios
            .post('http://localhost:8080/api/register', {
                invCode: authData.invitationCode,
                username: authData.username,
                password: authData.password
            })
            .then(response => {
                if (response.status !== 200) {
                    new Error('registration error');
                }
                localStorage.setItem('ns-urn', authData.username);
                localStorage.setItem('ns-pwd', btoa(authData.password));

                setProfile();
                redirectSuccessfully();
            })
            .catch(error => {
                redirectError(error.message());
            });
    };

    const login = async (authData, redirectSuccessfully, redirectError) => {
        await axios
            .get('http://localhost:8080/api/profile', {
                headers: {
                    Authorization: btoa(authData.username + ':' + authData.password)
                }
            })
            .then(response => {
                if (response.status !== 200) {
                    new Error('login error');
                }
                localStorage.setItem('ns-urn', authData.username);
                localStorage.setItem('ns-pwd', btoa(authData.password));
                setProfile(response.data);
                redirectSuccessfully();
            })
            .catch(error => {
                redirectError(error.message());
            });
    };

    const logout = (callback) => {
        localStorage.removeItem('ns-urn');
        localStorage.removeItem('ns-pwd');
        setProfile(null);
        callback();
    };

    const getAuthProfile = () => {

    };

    return (
        <AuthorizationContext.Provider value={ { user, register, login, logout } }>
            { children }
        </AuthorizationContext.Provider>
    );
};