import React from 'react';

const Nav = (props) => {
   return (
      <nav className="mobile-menu">
         <input type="checkbox" id="checkbox" className="mobile-menu__checkbox" />
         <label htmlFor="checkbox" className="mobile-menu__btn">
            <div className="mobile-menu__icon"></div>
         </label>
         <div className="mobile-menu__container">
            <ul className="mobile-menu__list">
               <li className="mobile-menu__item"><a href='/' className="mobile-menu__link">Home</a></li>
               <li className="mobile-menu__item"><a href="/" className="mobile-menu__link">Gallery</a></li>
               <li className="mobile-menu__item"><a href="/" className="mobile-menu__link">Categories</a></li>
               <li className="mobile-menu__item"><a href="/" className="mobile-menu__link">Pages</a></li>
            </ul>
         </div>
      </nav>
   );
}

export default Nav;
