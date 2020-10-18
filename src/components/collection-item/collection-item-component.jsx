import React from 'react';
import { connect } from 'react-redux';
import { addItemToCart } from '../../redux/cart/cart-action'

import { CollectionItemContainer, CollectionFooterContainer, AddButton, BackgroundImage, NameContainer, PriceContainer } from './collection-item-styles';

const CollectionItem = ({ item, addItemToCart }) => {
  const { name, price, imageUrl} = item;
  return (
    <CollectionItemContainer>
    <BackgroundImage className='image' imageUrl={imageUrl} />
    <CollectionFooterContainer>
      <NameContainer>{name}</NameContainer>
      <PriceContainer>{price}</PriceContainer>
    </CollectionFooterContainer>
    <AddButton onClick={() => addItemToCart(item)} inverted>
      Add to cart
    </AddButton>
  </CollectionItemContainer>
);}

const mapDispatchToProps = (dispatch) => ({
  addItemToCart: item => dispatch(addItemToCart(item)) 
});

export default connect(null,mapDispatchToProps)(CollectionItem) ;