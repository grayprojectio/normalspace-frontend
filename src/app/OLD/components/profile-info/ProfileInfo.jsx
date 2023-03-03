import React from 'react';
import classes from './ProfileInfo.module.css';
import Nickname from './nickname/Nickname';
import ProfileDescription from './description/ProfileDescription';
import AttributeList from './attr-list/AttributeList';

function ProfileInfo({ profile }) {

    return (
        <div className={ classes.box }>
            <div className={ classes.username_box }>
                <Nickname nickname={ profile.username }/>
            </div>
            <div className={ classes.description_and_attr_list_box }>
                <div className={ classes.description_box }>
                    <ProfileDescription description={ profile.description }/>
                </div>
                <div className={ classes.attr_list_box }>
                    <AttributeList profileId={ profile.id }/>
                </div>
            </div>
        </div>
    );
}

export default ProfileInfo;