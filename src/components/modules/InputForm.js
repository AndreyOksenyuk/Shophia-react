import React from 'react';

const InputFormValidation = ({ input, meta, ...props }) => {
   const styleErrorText = {
      color: 'red'
   }
   const styleErrorInput = {
      border: '1px red solid'
   }

   return (
      <div>
         <input {...props} {...input} style={(meta.error || (!meta.dirty && meta.touched)) ? styleErrorInput : null} />
         {meta.error !== undefined &&
            <p style={styleErrorText}>{meta.error}</p>
         }
         {(!meta.dirty && meta.touched) &&
            <p style={styleErrorText}>Required field!</p>
         }
      </div>
   );
}

export default InputFormValidation;
