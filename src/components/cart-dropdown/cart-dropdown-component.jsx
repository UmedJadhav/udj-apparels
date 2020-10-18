import React from 'react';
import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {withRouter } from 'react-router-dom';

import { selectCartItems } from '../../redux/cart/cart-selectors';
import { toggleCartHidden } from '../../redux/cart/cart-action';

import { CartDropdownContainer, CartDropdownButton, EmptyMessageContainer, CartItemsContainer } from './cart-dropdown-styles';

import CartItem from '../cart-item/cart-item-component';

const CartDropddown = ({ cartItems, history, dispatch }) => (
  <CartDropdownContainer>
    <CartItemsContainer>
      {
        cartItems.length?
        cartItems.map(cartItem => <CartItem key={cartItem.id} item={ cartItem }/>)
        :<EmptyMessageContainer className='empty-msg'>Your cart is empty</EmptyMessageContainer>
      }
    </CartItemsContainer>
    <CartDropdownButton onClick={()=> { 
         history.push('/checkout');
         dispatch(toggleCartHidden());}
         }>
    Go to Checkout
    </CartDropdownButton>
  </CartDropdownContainer>
)

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropddown));