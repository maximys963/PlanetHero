import React, { useState }  from 'react';
import { useHistory }       from 'react-router';
import { LoginForm }        from './LoginForm/LoginForm';
import { RegistrationForm } from './Registration /RegistrationForm';
// import { checkToken }    from '../../helpers/checkToken';
import forest               from '../../assets/images/thumb-1920-473154.jpg';
import styles               from './LoginScreen.module.css';

export function LoginScreen() {
    const [ activeForm, setActiveForm ] = useState('login');
    // const history = useHistory();
    //
    // checkToken(history);
    return(
        <div className={styles.loginContainer}>
            <img
                className={styles.loginImage}
                src = {forest}
            />
            <div className={styles.filter}/>
            <div className={styles.mainContainer}>
                {
                    activeForm === 'login'
                        ? <LoginForm onChangeForm = {setActiveForm} />
                        : <RegistrationForm onChangeForm = {setActiveForm} />
                }
            </div>
        </div>
    );
}

