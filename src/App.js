import React from 'react';
import './App.scss';
import 'font-awesome/css/font-awesome.min.css';
import HeaderBarLink from './components/HeaderBarLink';
import MainShophia from './components/MainShophia';
import { Route, Switch } from 'react-router';
import Login from './components/Login/LoginContainer';
import myAccountContainer from './components/MyAccount/MyAccountContainer';
import ShoppingCart from './components/ShoppingCart/ShoppingCartContainer';


function App(props) {

  return (
    <div className="App">
      <HeaderBarLink />
      <Switch>
        <Route exact path='/' component={MainShophia} />
        <Route path='/login' component={Login} />
        <Route path='/myAccount' component={myAccountContainer} />
        <Route path='/cart' component={ShoppingCart} />
      </Switch>
    </div>
  );
}

export default App;
