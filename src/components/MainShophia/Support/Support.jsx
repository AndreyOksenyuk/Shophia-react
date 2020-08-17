import React from 'react';

const Support = () => {
   return (
      <div className="container">
         <div className="support">
            <div className="support__left">
               <div className="support__icon"><i className="fa fa-plane " aria-hidden="true"></i></div>
               <div className="suppurt__content">
                  <h3>FREE SHIPPING</h3>
                  <p>In Order Min $200</p>
               </div>
            </div>
            <div className="support__center">
               <div className="support__icon support__icon-margin"><i className="fa fa-clock-o " aria-hidden="true"></i></div>
               <div className="suppurt__content">
                  <h3>30-DAYS RETURNS</h3>
                  <p>Money Back Guarantee</p>
               </div>
            </div>
            <div className="support__rigth">
               <div className="support__icon support__icon-margin"><i className="fa fa-life-ring" aria-hidden="true"></i></div>
               <div className="suppurt__content">
                  <h3>24/7 SUPPORT</h3>
                  <p>Lifestyme Support</p>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Support;
