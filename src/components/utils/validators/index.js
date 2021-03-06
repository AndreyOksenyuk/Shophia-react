const maxLength = max => value =>
   value && value.length > max ? `Must be ${max} characters or less` : undefined
export const maxLength15 = maxLength(15)

export const minLength = min => value =>
   value && value.length < min ? `Must be ${min} characters or more` : undefined
export const minLength4 = minLength(4)

export const email = value =>
   value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
      ? 'Invalid email address'
      : undefined

export const alphaNumeric = value =>
   value && /[^a-zA-Z0-9 ]/i.test(value)
      ? 'Only alphanumeric characters'
      : undefined

export const repeatPassword = value =>
   value && value.length < 1 ? `enter your password again` : undefined

export const phoneNumber = value =>
   value && !/^(0|[1-9][0-9]{9})$/i.test(value)
      ? 'Invalid phone number, must be 10 digits'
      : undefined