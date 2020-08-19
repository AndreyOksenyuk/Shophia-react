import React from 'react';
import style from './HeaderBarLink.module.scss';
import { Link, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setAuthAC } from '../../Redux/auth-reducer';

const HeaderBarLink = () => {
   let dispatch = useDispatch()

   let isAuth = useSelector(state => state.auth.isAuth)
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
                  <a href="/">  Call +001 555 801</a>
               </div>
               <div className={style.header__bar_link}>
                  <Link to="/">Home</Link>
                  <Link to="/cart">shopping cart</Link>
                  <Link to="/myAccount">MY ACCOUNT</Link>
                  {isAuth 
                     ? <span onClick={onLogOut}>Exit</span>
                     : <Link to="/login">LOGIN</Link>
                  } 
               </div>
            </div>
         </div>
      </div>
   );
}

export default HeaderBarLink;
