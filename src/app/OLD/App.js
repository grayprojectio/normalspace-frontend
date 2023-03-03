import classes from './App.module.css';
import Profile from './pages/common/a-profile/Profile';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/login/Login';
import NotFoundPage from './pages/404/NotFoundPage';
import ThingsPanel from './components/profile-tabs/things/ThingsPanel';
import CollectionsPanel from './components/profile-tabs/collections/CollectionsPanel';
import ArchivePanel from './components/profile-tabs/archive/ArchivePanel';
import React from 'react';
import Register from './pages/register/Register';

function App() {
    return (
        <div className={ classes.box }>
            <Routes>
                <Route path={ '/login' } element={ <Login/> }/>
                <Route path={ '/register' } element={ <Register/> }/>

                <Route path={ '/my' } element={ <Profile/> }>
                    <Route path={ 'things' } element={ <ThingsPanel/> }/>
                    <Route path={ 'collections' } element={ <CollectionsPanel/> }/>
                    <Route path={ 'archive' } element={ <ArchivePanel/> }/>
                </Route>

                <Route path={ '/my/setting' } element={ <Profile/> }/>
                <Route path={ '/*' } element={ <NotFoundPage/> }/>
            </Routes>
        </div>
    );
}

export default App;