import React from 'react';
import './App.scss';
import 'font-awesome/css/font-awesome.min.css';
import HeaderBarLink from './components/HeaderBarLink';
import MainShophia from './components/MainShophia';
import { Route, Switch } from 'react-router';
import Login from './components/Login';
import myAccount from './components/MyAccount';
import ShoppingCart from './components/ShoppingCart';


function App(props) {

  return (
    <div className="App">
      <HeaderBarLink />
      <Switch>
        <Route exact path='/' component={MainShophia} />
        <Route path='/login' component={Login} />
        <Route path='/myAccount' component={myAccount} />
        <Route path='/cart' component={ShoppingCart} />
      </Switch>
    </div>
  );
}

export default App;
