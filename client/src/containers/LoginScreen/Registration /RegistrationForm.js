import React, { useState } from 'react';
import { useDispatch }     from 'react-redux';
import { signUp }           from '../../../actions/session';
import { WhiteInput }      from '../../../components/WhiteInput/WhiteInput';
import { CustomButton }     from '../../../components/CustomButton/CustomButton';
import styles              from './RegistrationForm.module.css';

export function RegistrationForm(props) {
    const [registrationForm, setRegistrationForm ] = useState({ username: '', password: '', repeatPassword: '' });
    const dispatch = useDispatch();

    function onInputChange(e, field) {
        setRegistrationForm({...registrationForm, [field] : e.target.value });
    }

    function onSubmit() {
        dispatch(signUp(registrationForm));
    }

    const { onChangeForm } = props;

    return(
        <div className={styles.formContainer}>
            <div className={styles.title}>REGISTRATION</div>
            <WhiteInput
                className    = {styles.input}
                style        = {{width: '250px'}}
                onChange     = {(e) => onInputChange(e, 'username')}
                value        = {registrationForm.username}
                label        = 'Username'
                variant      = 'outlined'
                defaultValue = ''
                id           = 'validation-outlined-input'
            />
            <WhiteInput
                className    = {styles.input}
                style        = {{width: '250px'}}
                onChange     = {(e) => onInputChange(e, 'password')}
                value        = {registrationForm.password}
                label        = 'Password'
                variant      = 'outlined'
                type         = 'password'
                defaultValue = ''
                id           = 'validation-outlined-input'
            />
            <WhiteInput
                className    = {styles.input}
                style        = {{width: '250px'}}
                onChange     = {(e) => onInputChange(e, 'repeatPassword')}
                value        = {registrationForm.repeatPassword}
                label        = 'Repeat Password'
                variant      = 'outlined'
                type         = 'password'
                defaultValue = ''
                id           = 'validation-outlined-input'
            />
            <div className={styles.signUpContainer}>
                <div className={styles.question}>Already have account ?</div>
                <div className={styles.signUp} onClick={() => onChangeForm('login')} >Log in</div>
            </div>
            <CustomButton
                style   = {{ marginTop: '20px' }}
                onClick = {onSubmit}
                variant = 'outlined'
                color   = 'secondary'
            >
            CREATE ACCOUNT
            </CustomButton>
        </div>
    );
}
