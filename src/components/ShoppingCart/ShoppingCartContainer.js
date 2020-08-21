import React from 'react';
import ShoppingCart from './ShoppingCart';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { removeFromCart, changeCountProduct, clearShopingCart, setOrder} from '../../Redux/cart-reducer'
import { setIsAdded } from '../../Redux/app-reducer'
const ShoppingCartContainer = (props) => {
   return <ShoppingCart {...props} />
}

const mapStateToProps = (state) => ({
   productCards: state.cart.productCards,
   order: state.cart.order
})

export default compose(
   connect(mapStateToProps, {
      removeFromCart, setIsAdded, changeCountProduct, 
      clearShopingCart, setOrder,
   })
)(ShoppingCartContainer);
