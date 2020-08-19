import React from 'react';
import Login from '.';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { setAuthAC, setLoginAndPasswordAC } from '../../Redux/auth-reducer'
import { Redirect } from 'react-router';

const LoginContainer = (props) => {
   return (
      props.isAuth
         ? <Redirect to='/myAccount' />
         : <Login {...props} />
   )
}

const mapStateToProps = (state) => ({
   isAuth: state.auth.isAuth,
   login: state.auth.login,
   password: state.auth.password,
})

export default compose(
   connect(mapStateToProps, {
      setAuthAC, setLoginAndPasswordAC
   })
)(LoginContainer)
