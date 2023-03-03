import React, { useEffect, useState } from 'react';
import classes from './Profile.module.css';
import ProfileInfo from '../../../components/profile-info/ProfileInfo';
import ProfileTabs from '../../../components/profile-tabs/ProfileTabs';
import { useLocation, useNavigate } from 'react-router-dom';
import Logo from '../../../components/logo/Logo';
import MenuButton from '../../../components/button/menu-button/MenuButton';
import axios from 'axios';


function Profile(props) {

    const [profile, setProfile] = useState({});

    let location = useLocation();
    let navigateFunction = useNavigate();
    useEffect(() => {
        if (location.pathname === '/my') {
            return navigateFunction('/my/things');
        }
    }, [location.pathname, navigateFunction]);

    useEffect(() => {
        getProfileRequestToServer();
    }, [profile]);


    async function getProfileRequestToServer() {
        const nsAuth = localStorage.getItem('ns-auth');
        if (nsAuth) {
            const rawAuthData = JSON.parse(nsAuth);
            const auth = btoa(rawAuthData.username + ':' + rawAuthData.password);
            await axios
                .get('http://localhost:8080/api/profile/', {
                    headers: { 'Authorization': 'Basic ' + auth }
                })
                .then(function (response) {
                    setProfile(response.data);
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }

    return (
        <div className={ classes.box }>
            <header className={ classes.header }>
                <Logo/>
                <MenuButton/>
            </header>

            <ProfileInfo profile={ profile }/>
            <ProfileTabs profile={ profile }/>
        </div>
    );
}

export default Profile;