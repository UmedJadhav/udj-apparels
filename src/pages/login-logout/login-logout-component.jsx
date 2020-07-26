import React from 'react';
import './login-logout-styles.scss';
import SignIn from '../../components/sign-in/sign-in-component';
import SignUp from '../../components/sign-up/sign-up-component';

const LoginLogoutPage = () => (
  <div className='login-logout'>
    <SignIn/>
    <SignUp/> 
  </div>
);

export default LoginLogoutPage;
