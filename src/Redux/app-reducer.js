import imgOurBrand1 from '../assets/img/OurBrand/1.png'
import imgOurBrand2 from '../assets/img/OurBrand/2.png'
import imgOurBrand3 from '../assets/img/OurBrand/3.png'
import imgOurBrand4 from '../assets/img/OurBrand/4.png'
import imgOurBrand5 from '../assets/img/OurBrand/5.png'
import imgOurBrand6 from '../assets/img/OurBrand/6.png'

import imgRecent1 from '../assets/img/recent/1.jpg'
import imgRecent2 from '../assets/img/recent/2.jpg'
import imgRecent3 from '../assets/img/recent/3.jpg'
import imgRecent4 from '../assets/img/recent/4.jpg'
import imgRecent5 from '../assets/img/recent/5.jpg'
import imgRecent6 from '../assets/img/recent/6.jpg'
import imgRecent7 from '../assets/img/recent/7.jpg'
import imgRecent8 from '../assets/img/recent/8.jpg'

import imgAmericanExpress from '../assets/img/Footer/American-Express.png'
import imgDiscover from '../assets/img/Footer/Discover.png'
import imgMastercard from '../assets/img/Footer/Mastercard.png'
import imgVisaImg from '../assets/img/Footer/Visa.png'

import imgSlider1 from '../assets/img/main-slider/1.jpg'

const SET_IS_ADDED_PRODUCT_IN_CART = 'app-reducer/SET_IS_ADDED_PRODUCT_IN_CART'

let initialState = {
   brendImg: [imgOurBrand1, imgOurBrand2, imgOurBrand3, imgOurBrand4, imgOurBrand5, imgOurBrand6],
   meinSlider: [
      {
         id: 1,
         img: imgSlider1,
         discount: 50,
      },
      {
         id: 2,
         img: imgSlider1,
         discount: 10,
      },
      {
         id: 3,
         img: imgSlider1,
         discount: 65,
      },
      {
         id: 4,
         img: imgSlider1,
         discount: 70,
      },
   ],
   recent: [
      {
         id: 1,
         img: imgRecent1,
         discount: true,
         discountValue: 50,
         title: 'Cool and not expensive stuff',
         isAdded: false,
         price: 250,
         count: 1,
      },
      {
         id: 2,
         img: imgRecent2,
         discount: true,
         discountValue: 40,
         title: 'Cool and not expensive stuff',
         isAdded: false,
         price: 200,
         count: 1,
      },
      {
         id: 3,
         img: imgRecent3,
         discount: true,
         discountValue: 30,
         title: 'Cool and not expensive stuff',
         isAdded: false,
         price: 600,
         count: 1,
      },
      {
         id: 4,
         img: imgRecent4,
         discount: false,
         discountValue: 55,
         title: 'Cool and not expensive stuff',
         isAdded: false,
         price: 240,
         count: 1,
      },
      {
         id: 5,
         img: imgRecent5,
         discount: true,
         discountValue: 70,
         title: 'Cool and not expensive stuff',
         isAdded: false,
         price: 130,
         count: 1,
      },
      {
         id: 6,
         img: imgRecent6,
         discount: false,
         discountValue: 40,
         title: 'Cool and not expensive stuff',
         isAdded: false,
         price: 90,
         count: 1,
      },
      {
         id: 7,
         img: imgRecent7,
         discount: false,
         discountValue: 40,
         title: 'Cool and not expensive stuff',
         isAdded: false,
         price: 100,
         count: 1,
      },
      {
         id: 8,
         img: imgRecent8,
         discount: true,
         discountValue: 10,
         title: 'Cool and not expensive stuff',
         isAdded: false,
         price: 310,
         count: 1,
      },
   ],
   footerBrendImg: [imgAmericanExpress, imgDiscover, imgMastercard, imgVisaImg]
}

const APP_REDUSER = (state = initialState, action) => {
   switch (action.type) {
      case SET_IS_ADDED_PRODUCT_IN_CART:
         return {
            ...state,
            recent: state.recent.map(e => e.id === action.id 
               ? { ...e, isAdded: action.boolean } 
               : e
            )
         }
      default:
         return state
   }
}

export const setIsAdded = (boolean, id) => ({
   type: SET_IS_ADDED_PRODUCT_IN_CART,
   boolean, id
})



export default APP_REDUSER;