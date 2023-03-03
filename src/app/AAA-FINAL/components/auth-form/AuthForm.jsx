import React from 'react';
import classes from './AuthForm.module.css';
import Button from '../inputs/buttons/button/Button';
import Field from '../inputs/fields/field/Field';
import Logo from '../logo/Logo';

function AuthForm({
                      usnVal,
                      pwdVal,
                      usnPhd,
                      pwdPhd,
                      usnOnChange,
                      pwdOnChange,
                      btnOnClick,
                      errorAtUsn,
                      errorAtPwd,
                      errorMsg
                  }) {
    return (
        <>
            <div className={ classes.container }>
                <div className={ classes.logo }>
                    <Logo/>
                </div>
                <div className={ classes.usn_fld }>
                    <Field
                        value={ usnVal }
                        onChange={ usnOnChange }
                        placeholder={ usnPhd }
                        error={ errorAtUsn }/>
                </div>
                <div className={ classes.pwd_fld }>
                    <Field
                        value={ pwdVal }
                        onChange={ pwdOnChange }
                        placeholder={ pwdPhd }
                        error={ errorAtPwd }
                        type={ 'password' }/>
                </div>
                <Button tit={ 'start' } onClick={ btnOnClick }/>
            </div>
            {
                errorMsg &&
                <div className={ classes.error_msg }>
                    <p style={ { color: '#FA4C25' } }> { errorMsg }</p>
                </div>
            }
        </>
    );
}

export default AuthForm;