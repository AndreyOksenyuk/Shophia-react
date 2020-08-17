import React from 'react';

const Header = () => {
   return (
      <header className="header">



         <div className="container">
            <div className="header__nav">
               <nav className="nav">
                  <ul>
                     <li>Home</li>
                     <li>Gallery</li>
                     <li>Categories</li>
                     <li>Pages</li>
                  </ul>
               </nav>
               <h1 className="header__title">Shophia</h1>
               <div className="header__social">
                  <div className="header__social-nav">
                     <a href="http://localhost:3000" className="fa fa-facebook" aria-hidden="true"> </a>
                     <a href="http://localhost:3000" className="fa fa-twitter" aria-hidden="true"> </a>
                     <a href="http://localhost:3000" className="fa fa-pinterest" aria-hidden="true"> </a>
                     <a href="http://localhost:3000" className="fa fa-instagram" aria-hidden="true"> </a>
                  </div>
                  <div className="select-wrapper">
                     <select className="header__select">
                        <option value="USD">USD</option>
                        <option value="UAH">UAH</option>
                        <option value="Rupiah">Rupiah</option>
                        <option value="EUR">EUR</option>
                     </select>
                  </div>

               </div>
            </div>
         </div>
      </header>
   );
}

export default Header;
