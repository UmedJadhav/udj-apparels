import React from 'react';
import { HeaderContainer, LogoContainer, OptionsContainer, OptionDiv, OptionLink } from './header-styles';
import { auth } from '../../firebase/firebase.utils';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import { ReactComponent as Logo } from '../../assets/crown.svg'
import  CartIcon from '../cart-icon/cart-icon-components';
import CartDropddown from '../cart-dropdown/cart-dropdown-component';
import { selectCartHidden } from '../../redux/cart/cart-selectors';
import { selectCurrentUser } from '../../redux/user/user-selectors';

const Header = ({ currentUser, hidden }) => (
  <HeaderContainer>
    <LogoContainer to='/' >
      <Logo className="logo"/>
    </LogoContainer>
    <OptionsContainer >
      <OptionLink to='/shop' >SHOP</OptionLink>
      <OptionLink to='/contact' >CONTACT</OptionLink>
      {
        currentUser ? 
        <OptionDiv  onClick={ () => auth.signOut() }> SIGN OUT</OptionDiv> : 
        <OptionLink  to='/signin'>SIGN IN</OptionLink>
      }
      <CartIcon />
    </OptionsContainer>
    { 
      hidden? null :  <CartDropddown /> 
    }
  </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);