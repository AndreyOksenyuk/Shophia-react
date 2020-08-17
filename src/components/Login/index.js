import React from 'react';
import 'antd/dist/antd.css';
import { Tabs } from 'antd';
import { AppleOutlined, AndroidOutlined } from '@ant-design/icons';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

const { TabPane } = Tabs;

const Login = () => {
   return (
      <div className="Login">
         <div className="wrapper fadeInDown">
            <div id="formContent">
               <Tabs defaultActiveKey="2">

                  <TabPane
                     tab={<span><AppleOutlined />Sign In</span>}
                     key="2"
                  >
                     <LoginForm />
                  </TabPane>

                  <TabPane
                     tab={<span><AndroidOutlined />Sign Up</span>}
                     key="1"
                  >
                     <RegisterForm />
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
