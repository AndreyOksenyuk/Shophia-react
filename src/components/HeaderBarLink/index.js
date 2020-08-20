import React from 'react';
import style from './HeaderBarLink.module.scss';
import { Redirect, NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setAuthAC } from '../../Redux/auth-reducer';

const HeaderBarLink = () => {
   let dispatch = useDispatch()

   let isAuth = useSelector(state => state.auth.isAuth)
   const productCount = useSelector(state => state.cart.productCards)

   let onLogOut = () => {
      dispatch(setAuthAC(false))
      return <Redirect to='/login' />
   }
   return (
      <div className={style.header__bar}>                  

                 
         <div className="container">
            <div className={style.header__bar_inner}>
               <div className={style.header__bar_phone}>
                  <i className="fa fa-phone" aria-hidden="true"></i>
                  <a href="/">&nbsp; Call +001 555 801</a>
               </div>
               <div className={style.header__bar_link}>
                  <NavLink to="/" exact activeClassName={style.active}>Home</NavLink>

                  <NavLink to="/cart" activeClassName={style.active} >
                     shopping cart
                     {
                        productCount.length > 0 && 
                        <i className={style.badge}>
                           {productCount.length < 100 
                              ? `${productCount.length}`
                              : '99+'
                           }
                        </i>
                     }
                  </NavLink>

                  <NavLink to="/myAccount" activeClassName={style.active}>MY ACCOUNT</NavLink>
                  {isAuth
                     ? <span onClick={onLogOut}>Exit</span>
                     : <NavLink to="/login" activeClassName={style.active}>LOGIN</NavLink>
                  }
               </div>
            </div>
         </div>
      </div>
   );
}

export default HeaderBarLink;
