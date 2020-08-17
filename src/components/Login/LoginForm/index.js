import React from 'react';
import '../Login.scss'

const LoginForm = () => {
   return (
      <form>
         <input type="text" id="login" className="fadeIn second" name="login" placeholder="login" />
         <input type="text" id="password" className="fadeIn third" name="login" placeholder="password" />
         <button type="submit" className="submitBtn fadeIn fourth">Log In</button>
      </form>
   );
}

export default LoginForm;
