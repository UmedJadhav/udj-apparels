import React from 'react';
import { connect } from 'react-redux';

import { SignInContainer, SignInTitle, ButtonsBarContainer } from './sign-in-styles';

import { googleSignInStart, emailSignInStart } from '../../redux/user/user-actions'

import FormInput from '../form-input/form-input-component';
import CustomButton from '../custom-button/custom-button-component';

class SignIn extends React.Component {
  state = {
      email: '',
      password: ''
    }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { emailSignInStart } = this.props;
    const { email, password}  = this.state;

    emailSignInStart(email, password );
  }

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    
    const { googleSignInStart } = this.props ;

    return(
      <SignInContainer className='sign-in'>
        <SignInTitle>I already have an account</SignInTitle>
        <span>Sign in with your email and password</span>
        <form onSubmit={ this.handleSubmit } >
          <FormInput name='email' type='email' value={this.state.email} handleChange={ this.handleChange } required label='Email'/>
          <FormInput name='password' type='password' value={this.state.password} handleChange={ this.handleChange } required label='Password'/>
          <ButtonsBarContainer className='buttons'>
            <CustomButton type='submit' > Sign in </CustomButton>
            <CustomButton type='button' onClick={ googleSignInStart } isGoogleSignIn> 
              Sign in with Google 
            </CustomButton>
          </ButtonsBarContainer>
        </form>
      </SignInContainer>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
});

export default connect(null, mapDispatchToProps)(SignIn);