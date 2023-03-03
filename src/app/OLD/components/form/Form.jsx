import React, { useEffect, useState } from 'react';
import Logo from '../logo/Logo';
import GenericInput from '../input/generic-input/GenericInput';
import LongButton from '../button/long-button/LongButton';
import classes from './Form.module.css';

function Form(
    {
        valueUsername,
        valuePassword,
        placeholderUsername,
        placeholderPassword,
        onChangeUsername,
        onChangePassword,
        onClickStart,
        errorAtUsername,
        errorAtPassword,
        errorMessage
    }) {

    const [disabledBtnStart, setDisabledBtnStart] = useState(false);

    useEffect(() => {
        if (valueUsername?.length !== 0 && valuePassword?.length !== 0) {
            setDisabledBtnStart(false);
        } else {
            setDisabledBtnStart(true);
        }
    }, [valueUsername, valuePassword]);

    return (
        <div className={ classes.box }>
            <div className={ classes.form }>
                <div className={ classes.logo }>
                    <Logo/>
                </div>
                <div className={ classes.usn_inp }>
                    <GenericInput
                        value={ valueUsername }
                        placeholder={ placeholderUsername }
                        error={ errorAtUsername }
                        onChange={ onChangeUsername }
                    />
                </div>
                <div className={ classes.pwd_inp }>
                    <GenericInput
                        value={ valuePassword }
                        placeholder={ placeholderPassword }
                        error={ errorAtPassword }
                        onChange={ onChangePassword }
                    />
                </div>
                <div className={ classes.start_btn }>
                    <LongButton
                        disabled={ disabledBtnStart }
                        value={ 'start ' }
                        onClick={ onClickStart }
                    />
                </div>
            </div>
            <div className={ classes.error_message }>
                <p>{ errorMessage }</p>
            </div>
        </div>
    );
}

export default Form;