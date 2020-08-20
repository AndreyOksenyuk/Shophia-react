import React from 'react';
import ShoppingCart from './ShoppingCart';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { removeFromCart, changeCountProduct} from '../../Redux/cart-reducer'
import { setIsAdded } from '../../Redux/app-reducer'
const ShoppingCartContainer = (props) => {
   return <ShoppingCart {...props} />
}

const mapStateToProps = (state) => ({
   productCards: state.cart.productCards
})

export default compose(
   connect(mapStateToProps, {
      removeFromCart, setIsAdded, changeCountProduct
   })
)(ShoppingCartContainer);
