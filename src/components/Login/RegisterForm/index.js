import React from 'react';
import InputForm from '../../modules/InputForm';
import { reduxForm, Field } from 'redux-form';
import { minLength4, alphaNumeric, maxLength15, repeatPassword } from '../../utils/validators';

let RegisterForm = (props) => {
   return (
      <form onSubmit={props.handleSubmit}> 
         <Field 
            type="text" 
            id="loginRegister" 
            className="fadeIn second" 
            name="registerLogin" 
            placeholder="login" 
            component={InputForm}
            validate={[minLength4, maxLength15, alphaNumeric]}
         />
         <Field
            type="text" 
            id="password" 
            className="fadeIn third" 
            name="registerPassword" 
            placeholder="password" 
            component={InputForm}
            validate={[minLength4, alphaNumeric]}
         />
         <Field 
            type="text" 
            id="passwordRepeat" 
            className="fadeIn third" 
            name="registerPasswordRepeat" 
            placeholder="password" 
            component={InputForm}
            validate={[repeatPassword]}
         />
         <button type="submit" className="submitBtn fadeIn fourth">Log In</button>
      </form>
   );
}

RegisterForm = reduxForm({
   form: 'register',
})(RegisterForm)

export default RegisterForm;
