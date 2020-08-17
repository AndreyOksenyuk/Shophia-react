import React from 'react';
import { useSelector } from 'react-redux';

const Footer = () => {
   let footerBrendImg = useSelector(state => state.app.footerBrendImg)
   return (
      <>
         <footer className="footer">
            <div className="container">
               <div className="footer__top">
                  <div className="footer__top-item">
                     <h5 className="footer-title">Shop</h5>
                     <ul>
                        <li><a href="/">New In</a></li>
                        <li><a href="/">Women</a></li>
                        <li><a href="/">Men</a></li>
                        <li><a href="/">Shoes</a></li>
                        <li><a href="/">Bags & Accessories</a></li>
                        <li><a href="/">Top Brands</a></li>
                        <li><a href="/">Sale & Special Offers</a></li>
                        <li><a href="/">Lookbook</a></li>
                     </ul>
                  </div>
                  <div className="footer__top-item">
                     <h5 className="footer-title">information</h5>
                     <ul>
                        <li><a href="/">About us</a></li>
                        <li><a href="/">Customer Service</a></li>
                        <li><a href="/">New Collection</a></li>
                        <li><a href="/">Best Sellers</a></li>
                        <li><a href="/">Manufacturers</a></li>
                        <li><a href="/">Privacy policy</a></li>
                        <li><a href="/">Terms & condition</a></li>
                        <li><a href="/">Blog</a></li>
                     </ul>
                  </div>
                  <div className="footer__top-item">
                     <h5 className="footer-title">Customer service</h5>
                     <ul>
                        <li><a href="/">Search Terms</a></li>
                        <li><a href="/">Advanced Search</a></li>
                        <li><a href="/">Orders and Returns</a></li>
                        <li><a href="/">Contact Us</a></li>
                        <li><a href="/">RSS</a></li>
                        <li><a href="/">Help & FAQs</a></li>
                        <li><a href="/">Consultant</a></li>
                        <li><a href="/">Store Locations</a></li>
                     </ul>
                  </div>
                  <div className="footer__top-social">
                     <h5 className="footer-title">STAY CONNECTED</h5>
                     <div className="footer__top-social-ico">
                        <a href="http://localhost:3000" className="fa fa-facebook" aria-hidden="true"> </a>
                        <a href="http://localhost:3000" className="fa fa-twitter" aria-hidden="true"> </a>
                        <a href="http://localhost:3000" className="fa fa-pinterest" aria-hidden="true"> </a>
                        <a href="http://localhost:3000" className="fa fa-instagram" aria-hidden="true"> </a>
                        <a href="http://localhost:3000" className="fa fa-rss" aria-hidden="true"> </a>
                     </div>
                     <div className="footer__top-social-form">
                        <form action="">
                           <label htmlFor="email" className="footer-title">SUBSCRIBE <i>&nbsp;in&nbsp;</i> OUR NEWS LETTER</label>
                           <div className="input-wrapper">
                              <input type="email" id="email" name="email" placeholder="Enter Your Email Address" />
                              <button type="submit" >Subscribe</button>
                           </div>

                        </form>
                     </div>
                  </div>
               </div>

               <div className="footer__bottom">
                  <div className="footer__bottom-line"></div>
                  <p className="footer__bottom-text">© 2015 Shopia Fashion Store Shopify.
                  All Rights Reserved. Ecommerce Software by Shopify.
                  Designed by MoccaLabs.com
                  </p>

                  <div className="footer__bottom-card">
                     {
                        footerBrendImg.map(url => {
                           return <img src={url} alt="card" key={url} />
                        })
                     }
                  </div>

               </div>

            </div>
         </footer>
         <div className="footer__end"></div>
      </>
   );
}

export default Footer;
