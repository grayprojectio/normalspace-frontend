import React, { useEffect, useState } from 'react';
import classes from './ProfileTabs.module.css';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import ThingsPanel from './things/ThingsPanel';
import CollectionsPanel from './collections/CollectionsPanel';
import ArchivePanel from './archive/ArchivePanel';
import { Link, NavLink, Outlet, Route, Routes, useLocation } from 'react-router-dom';

function ProfileTabs({ profile }) {

    const setActive = ({ isActive }) => isActive && classes.active;

    return (
        <div className={ classes.box }>

            <div className={ classes.list }>
                <NavLink
                    to={ 'things' }
                    className={ setActive }
                >
                    <span>/things</span>
                </NavLink>
                <NavLink
                    to={ 'collections' }
                    className={ setActive }
                >
                    <span>/collections</span>
                </NavLink>
                <NavLink
                    to={ 'archive' }
                    className={ setActive }
                >
                    <span>/archive</span>
                </NavLink>
            </div>
            <div>
                <Outlet />
            </div>

        </div>
    );
}

export default ProfileTabs;