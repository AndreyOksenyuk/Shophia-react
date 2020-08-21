
const SET_PRODUCT_CART = 'cart-reducer/SET_PRODUCT_CART'
const REMOVE_FROM_CART = 'cart-reducer/REMOVE_FROM_CART'
const CHANGE_COUNT_PRODUCT = 'app-reducer/CHANGE_COUNT_PRODUCT'
const CLEAR_SHOPING_CART = 'app-reducer/CLEAR_SHOPING_CART'
const SET_ORDER = 'app-reducer/SET_ORDER'

let initialState = {
   productCards: [
      // {
      //    id: 5,
      //    img: '/Shophia-react/static/media/5.d2c8fa24.jpg',
      //    discount: true,
      //    discountValue: 70,
      //    title: 'Cool and not expensive stuff',
      //    isAdded: false,
      //    price: 130,
      //    count: 1,
      // },
   ],

   order: []
}

const PRODUCT_CART_REDUCER = (state = initialState, action) => {
   switch (action.type) {
      case SET_PRODUCT_CART:
         return{
            ...state,
            productCards: [...state.productCards, action.item]
         }
      case REMOVE_FROM_CART:
         return{
            ...state,
            productCards: state.productCards.filter(e => e.id !== action.id)
         }
      case CHANGE_COUNT_PRODUCT:
         return {
            ...state,
            productCards: state.productCards.map(e => e.id === action.id
               ? { ...e, count: action.symbol === "+" ? e.count + 1 : e.count - 1 }
               : e
            )
         }
      case CLEAR_SHOPING_CART:
         return{
            ...state,
            productCards: []
         }
      case SET_ORDER:
         return{
            ...state,
            order: action.obj
         }
      default:
         return state;
   }
}

export const setProductCartAC = (item) => ({
   type: SET_PRODUCT_CART,
   item
})

export const removeFromCart = (id) => ({
   type: REMOVE_FROM_CART,
   id
})

//symbol = '+' or '-'
export const changeCountProduct = (id, symbol) => ({
   type: CHANGE_COUNT_PRODUCT,
   id, symbol
})

export const clearShopingCart = () => ({
   type: CLEAR_SHOPING_CART
})

export const setOrder = (obj) => ({
   type: SET_ORDER,
   obj,
})

export default PRODUCT_CART_REDUCER;