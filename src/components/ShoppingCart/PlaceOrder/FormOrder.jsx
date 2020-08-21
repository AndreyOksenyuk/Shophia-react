import React from 'react';
import style from './PlaceOrder.module.scss'
import 'antd/dist/antd.css';
import { reduxForm, Field } from 'redux-form';
import InputFormValidation from '../../modules/InputForm';
import { phoneNumber } from '../../utils/validators';


let FormOrder = (props) => {
   return (
      <form onSubmit={props.handleSubmit}>
         <Field
            type="text"
            name="name"
            placeholder="Your name"
            component={InputFormValidation}
         />
         <Field
            type="text"
            name="phone"
            placeholder="Your phone"
            component={InputFormValidation}
            validate={[phoneNumber]}
         />
         
         <button className={style.orderBtn}>Confirm order</button>
      </form>
   );
}

FormOrder = reduxForm({
   form: 'placeOrderForm'
})(FormOrder)


export default FormOrder;
