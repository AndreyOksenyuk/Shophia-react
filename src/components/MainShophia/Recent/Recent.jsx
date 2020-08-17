import React from 'react';
import { useSelector } from 'react-redux';

const Recent = () => {
   let recent = useSelector(state => state.app.recent)

   return (
      <div className="container">
         <div className="recent">
            {
               recent.map(item => {
                  return (
                     <div className="recent__item" key={item.id}>
                        <img src={item.img} alt="clothes" />
                        <div className="recent__item-discount" 
                           style={item.discount ? {display: 'flex'} : { display: 'none' }}>
                           <p>{item.discountValue}<span>%</span></p>
                        </div>

                        <div className="recent__item-blackout"></div>
                        <a href="/" className="btn recent__item-btn">+ Add to cart</a>
                     </div>
                  )
               })
            }
         </div>
      </div>
   );
}

export default Recent;
