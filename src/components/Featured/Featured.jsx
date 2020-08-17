import React from 'react';
import img1 from '../../assets/img/featured/1.jpg'
import img2 from '../../assets/img/featured/2.jpg'
import img3 from '../../assets/img/featured/3.jpg'
import img4 from '../../assets/img/featured/4.jpg'
import imgCenter from '../../assets/img/featured/center.jpg'

const Featured = () => {
   return (
      <div className="container">
         <div className="featured">

            <div className="featured__item featured__item-1">
               <img src={img1} alt="clothes" />
               <div className="featured__item-inner">
                  <a href="/" className="btn slider__btn-featured">Shop now</a>
               </div>
            </div>

            <div className="featured__item featured__item-2">
               <img src={img2} alt="clothes" />
               <div className="featured__item-inner">
                  <a href="/" className="btn slider__btn-featured">Shop now</a>
               </div>
            </div>

            <div className="featured__item featured__item-3">
               <img src={imgCenter} alt="clothes" />
               <div className="featured__item-inner">
                  <a href="/" className="btn slider__btn-featured">Shop now</a>
               </div>
            </div>

            <div className="featured__item featured__item-4">
               <img src={img3} alt="clothes" />
               <div className="featured__item-inner">
                  <a href="/" className="btn slider__btn-featured">Shop now</a>
               </div>
            </div>

            <div className="featured__item featured__item-5">
               <img src={img4} alt="" />
               <div className="featured__item-inner">
                  <a href="/" className="btn slider__btn-featured">Shop now</a>
               </div>
            </div>

         </div>
      </div>
   );
}

export default Featured;
