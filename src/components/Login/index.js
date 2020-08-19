import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Tabs } from 'antd';
import { Alert } from 'antd';
import { UserAddOutlined, LoginOutlined } from '@ant-design/icons';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

const { TabPane } = Tabs;

const Login = (props) => {
   let [isErrorAut, setIsErrorAuth] = useState(false)
   let [passwordIsCorrect, setPasswordIsCorrect] = useState(true)

   let onSubmitLogin = (value) => {
      if (value.login === props.login && value.password === props.password) {
         props.setAuthAC(true)
         setIsErrorAuth(false)
      }
      else {
         setIsErrorAuth(true)
      }
   }

   let onSubmitRegister = (value) => {
      if (value.registerPasswordRepeat !== value.registerPassword) {
         setPasswordIsCorrect(false)
      }
      else if (value.registerPasswordRepeat !== undefined ) {
         props.setLoginAndPasswordAC(value.registerLogin, value.registerPasswordRepeat)
         props.setAuthAC(true)
      }

   }

   return (
      <div className="Login">
         <div className="wrapper fadeInDown">
            <div id="formContent">
               <Tabs defaultActiveKey="2">

                  <TabPane
                     tab={<span><LoginOutlined />Sign In</span>}
                     key="2"
                  >
                     <LoginForm onSubmit={onSubmitLogin} />

                     {isErrorAut && <Alert
                        type="error" 
                        description='Invalid username or password'
                        showIcon
                     />
                     }

                  </TabPane>

                  <TabPane
                     tab={<span><UserAddOutlined />Sign Up</span>}
                     key="1"
                  >
                     <RegisterForm onSubmit={onSubmitRegister} />
                     {
                        !passwordIsCorrect && <Alert
                           type="error"
                           description='The password does not match the confirmation'
                           showIcon
                        />
                     }
                  </TabPane>

               </Tabs>
               <div id="formFooter">
                  <a className="underlineHover" href="/">Forgot Password?</a>
               </div>
            </div>
         </div>
      </div>

   );
}

export default Login;
