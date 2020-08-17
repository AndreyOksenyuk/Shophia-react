import React from 'react';
import Nav from './Nav';
import { connect } from 'react-redux';

const NavContainer = (props) => {
   return <Nav {...props}/>
}

let mapStateToProps = (state) => ({
   
})

let Navigation = connect(mapStateToProps, {

})(NavContainer)

export default Navigation;
