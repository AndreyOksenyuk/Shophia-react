import React from 'react';
import '../Login.scss'
import { reduxForm, Field } from 'redux-form';
import InputForm from '../../modules/InputForm'
import { minLength4, alphaNumeric, maxLength15 } from '../../utils/validators';

let LoginForm = (props) => {
   return (
      <form onSubmit={props.handleSubmit}>
         <Field 
            type="text" 
            id="login" 
            className="fadeIn second" 
            name="login" 
            placeholder="login" 
            component={InputForm}
            validate={[ minLength4, maxLength15, alphaNumeric]}
         />

         <Field
            type="text" 
            id="password" 
            className="fadeIn third" 
            name="password" 
            placeholder="password" 
            component={InputForm}
            validate={[ minLength4, alphaNumeric]}
         />
         <button type="submit" className="submitBtn fadeIn fourth">Log In</button>
      </form>
   );
}
LoginForm = reduxForm({
   form: 'login'
})(LoginForm)

export default LoginForm;
