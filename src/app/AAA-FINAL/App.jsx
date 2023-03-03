import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import RequestAuthorization from './hoc/RequestAuthorization';
import NotFoundPage from './pages/not-found/NotFoundPage';
import LoginPage from './pages/login/LoginPage';
import RegisterPage from './pages/register/RegisterPage';
import PersonPage from './pages/person/PersonPage';
import SettingPage from './pages/setting/SettingPage';
import ThingPage from './pages/thing/ThingPage';
import CollectionPage from './pages/collection/CollectionPage';
import SpacePage from './pages/space/SpacePage';
import { AuthorizationProvider } from './hoc/AuthorizationContext';
import classes from './App.module.css';
import ThingsPanel from './components/panels/things/ThingsPanel';
import CollectionsPanel from './components/panels/collections/CollectionsPanel';
import ArchivePanel from './components/panels/archive/ArchivePanel';

function App() {

    function setRequestAuthorization(children) {
        return (
            <RequestAuthorization>
                { children }
            </RequestAuthorization>
        );
    }

    return (
        <div className={ classes.container }>
            <AuthorizationProvider>
                <Routes>
                    <Route path={ '/' } element={ <Navigate to={ '/space' } replace={ true }/> }/>
                    <Route path={ '/space' } element={ <SpacePage/> }/>
                    <Route path={ '/login' } element={ <LoginPage/> }/>
                    <Route path={ '/register/:invCode' } element={ <RegisterPage/> }/>

                    <Route path={ '/person/:nickname?' } element={ setRequestAuthorization(<PersonPage/>) }>
                        <Route path={ 'things' } element={ setRequestAuthorization(<ThingsPanel/>) }/>
                        <Route path={ 'collections' } element={ setRequestAuthorization(<CollectionsPanel/>) }/>
                        <Route path={ 'archive' } element={ setRequestAuthorization(<ArchivePanel/>) }/>
                    </Route>

                    <Route path={ '/settings' } element={ setRequestAuthorization(<SettingPage/>) }/>
                    <Route path={ '/thing/:thingId' } element={ setRequestAuthorization(<ThingPage/>) }/>
                    <Route path={ '/collection/:collectionId' } element={ setRequestAuthorization(<CollectionPage/>) }/>

                    <Route path={ '*' } element={ <NotFoundPage/> }/>
                </Routes>
            </AuthorizationProvider>
        </div>
    );
}

export default App;