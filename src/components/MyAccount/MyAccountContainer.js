import React from 'react';
import MyAccount from './index';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';

const MyAccountContainer = (props) => {
   return (
      props.isAuth 
      ? <MyAccount {...props}/>
      : <Redirect to='/login' />
   )
}

let mapStateToProps = (state) => ({
   isAuth: state.auth.isAuth,
})


let MyAccountContainerRedux = connect(mapStateToProps, {

})(MyAccountContainer)

export default MyAccountContainerRedux

