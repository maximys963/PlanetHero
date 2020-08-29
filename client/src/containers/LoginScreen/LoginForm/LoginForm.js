import React, { useState } from 'react';
import { useDispatch }     from 'react-redux';
import { useHistory }      from 'react-router-dom';
import { login }           from '../../../actions/session';
import { WhiteInput }      from '../../../components/WhiteInput/WhiteInput';
import { CustomButton }     from '../../../components/CustomButton/CustomButton';
import styles              from './LoginForm.module.css';

export function LoginForm(props) {
    const [loginForm, setLoginForm ] = useState({ username: '', password: '' });
    const dispatch = useDispatch();
    const history = useHistory();

    function onInputChange(e, field) {
        setLoginForm({...loginForm, [field] : e.target.value });
    }

    async function onSubmit() {
        await dispatch(login(loginForm, history));
        history.push('/event');
    }

    const { onChangeForm } = props;

    return(
        <div className={styles.formContainer}>
            <div className={styles.title}>LOGIN</div>
            <WhiteInput
                color              = 'white'
                focusedColor       = 'yellow'
                focusedBorderColor = '#bdc3c7'
                className          = {styles.input}
                style              = {{width: '250px'}}
                onChange           = {(e) => onInputChange(e, 'username')}
                value              = {loginForm.username}
                label              = 'Username'
                variant            = 'outlined'
                defaultValue       = ''
                id                 = 'validation-outlined-input'
            />
            <WhiteInput
                color              = 'white'
                focusedColor       = 'yellow'
                focusedBorderColor = '#bdc3c7'
                className          = {styles.input}
                style              = {{width: '250px'}}
                onChange           = {(e) => onInputChange(e, 'password')}
                value              = {loginForm.password}
                label              = 'Password'
                type               = 'password'
                variant            = 'outlined'
                defaultValue       = ''
                id                 = 'validation-outlined-input'
            />
            <div className={styles.signUpContainer}>
                <div className={styles.question}>Dont have account ?</div>
                <div className={styles.signUp} onClick={() => onChangeForm('registration')} >Sign up</div>
            </div>
            <CustomButton
                style      = {{ marginTop: '20px' }}
                onClick    = {onSubmit}
                variant    = 'outlined'
                color      = 'white'
                hoverColor = 'yellow'
            >
                LOGIN
            </CustomButton>
        </div>
    );
}
