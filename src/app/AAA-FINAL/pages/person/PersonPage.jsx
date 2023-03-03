import React, { useEffect } from 'react';
import classes from './PersonPage.module.css';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import Header from '../../components/header/Header';
import PersonInfo from '../../components/person-info/PersonInfo';
import PersonNavBar from '../../components/person-nav-bar/PersonNavBar';

function PersonPage(props) {
    const { nickname } = useParams();
    let location = useLocation();
    let navigateFunction = useNavigate();

    useEffect(() => {
        if (
            location.pathname === '/person' ||
            location.pathname === '/person/things' ||
            location.pathname === '/person/collections' ||
            location.pathname === '/person/archive'
        ) {
            // todo authorized user username
            return navigateFunction(`/person/${ 'username' }/things`);
        }
    }, [location.pathname, navigateFunction]);

    return (
        <>
            <Header/>
            <div className={ classes.container }>
                <p style={ { fontStyle: 'bold ', color: 'blue' } }>{ nickname }</p>
                <PersonInfo/>
                <PersonNavBar/>
            </div>
        </>
    );
}

export default PersonPage;