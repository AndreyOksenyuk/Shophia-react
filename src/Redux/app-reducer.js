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
      },
      {
         id: 2,
         img: imgRecent2,
         discount: true,
         discountValue: 40,
      },
      {
         id: 3,
         img: imgRecent3,
         discount: true,
         discountValue: 30,
      },
      {
         id: 4,
         img: imgRecent4,
         discount: false,
         discountValue: 55,
      },
      {
         id: 5,
         img: imgRecent5,
         discount: true,
         discountValue: 70,
      },
      {
         id: 6,
         img: imgRecent6,
         discount: false,
         discountValue: 40,
      },
      {
         id: 7,
         img: imgRecent7,
         discount: false,
         discountValue: 40,
      },
      {
         id: 8,
         img: imgRecent8,
         discount: true,
         discountValue: 10,
      },
   ],
   footerBrendImg: [imgAmericanExpress, imgDiscover, imgMastercard, imgVisaImg]
}

const APP_REDUSER = (state = initialState, action) => {
   switch (action.type) {
      default:
         return state
   }
}

export default APP_REDUSER;