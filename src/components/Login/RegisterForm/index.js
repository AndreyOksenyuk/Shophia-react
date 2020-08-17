import React from 'react';

const RegisterForm = () => {
   return (
      <form>
         <input type="text" id="login" className="fadeIn second" name="login" placeholder="login" />
         <input type="text" id="password" className="fadeIn third" name="login" placeholder="password" />
         <input type="text" id="password" className="fadeIn third" name="login" placeholder="password" />
         <button type="submit" className="submitBtn fadeIn fourth">Log In</button>
      </form>
   );
}

export default RegisterForm;
