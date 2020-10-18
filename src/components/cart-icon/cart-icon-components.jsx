import React from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import { toggleCartHidden }  from '../../redux/cart/cart-action';
import { selectCartItemsCount } from '../../redux/cart/cart-selectors'
import { CartContainer , ShoppingIcon, ItemCountContainer } from './cart-icon-styles';



const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <CartContainer onClick={ toggleCartHidden }>
    <ShoppingIcon className='shopping-icon' />
    <ItemCountContainer className='item-count'>{ itemCount }</ItemCountContainer>
  </CartContainer>
);

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount
})

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);