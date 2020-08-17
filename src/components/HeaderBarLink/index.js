import React from 'react';
import { Link } from 'react-router-dom';

const HeaderBarLink = () => {
   return (
      <div className="header__bar">
         <div className="container">
            <div className="header__bar-inner">
               <div className="header__bar-phone">
                  <i className="fa fa-phone" aria-hidden="true"></i>
                  <a href="/">  Call +001 555 801</a>
               </div>
               <div className="header__bar-link">
                  <Link to="/">Home</Link>
                  <Link to="/cart">shopping cart</Link>
                  <Link to="/myAccount">MY ACCOUNT</Link>
                  <Link to="/login">LOGIN</Link>
               </div>
            </div>
         </div>
      </div>
   );
}

export default HeaderBarLink;
