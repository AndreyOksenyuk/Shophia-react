const SET_AUTHORIZATION = 'auth-reduser/SET_AUTHORIZATION'
const SET_LOGIN_AND_PASSWORD = 'auth-reduser/SET_LOGIN_AND_PASSWORD'

let initialState = {
   isAuth: false,
   login: 'user',
   password: 'user123',
}

const AUTH_REDUSER = (state = initialState, action) => {
   switch (action.type) {
      case SET_AUTHORIZATION:
         return {
            ...state,
            isAuth: action.boolean,
         }
      case SET_LOGIN_AND_PASSWORD:
         return {
            ...state,
            login: action.login,
            password: action.password,
         }

      default:
         return state
   }
}

export const setAuthAC = (boolean) => ({
   type: SET_AUTHORIZATION,
   boolean
})

export const setLoginAndPasswordAC = (login, password) => ({
   type: SET_LOGIN_AND_PASSWORD,
   login, password
})

export default AUTH_REDUSER;