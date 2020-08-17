import React from 'react';
import imgWoman from '../../assets/img/testimonial/Layer-12.png'
import imgMan from '../../assets/img/testimonial/Layer-13.png'

const Testimonial = () => {
   return (
      <div className="testimonal">
         <div className="container">
            <div className="testimonial__inner">

               <div className="testimonial__item">
                  <img src={imgWoman} alt="img" className="testimonial__item-img1" />
                  <div className="testimonial__item-content">
                     <i>Sed ut perspiciatis<br />
               unde omnis iste natus error sit<br />
               voluptatem accusantium doloremque</i>
                     <h4>Sandra Dewi</h4>
                     <p>FASHION STYLISH</p>
                  </div>
               </div>

               <div className="testimonial__item testimonial__item-2">
                  <div className="testimonial__item-content testimonial__item-content-rigth">
                     <i>Sed ut perspiciatis<br />
               unde omnis iste natus error sit<br />
               voluptatem accusantium doloremque</i>
                     <h4>Shaheer Sheikh</h4>
                     <p>designer</p>
                  </div>
                  <img src={imgMan} alt="img" className="testimonial__item-img2" />
               </div>

            </div>
         </div>
      </div>
   );
}

export default Testimonial;
