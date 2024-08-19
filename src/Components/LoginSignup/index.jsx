import React, { useState } from 'react'
import './LoginSignup.css'

import user_icon from '../Assets/user-icon.png'
import email_icon from '../Assets/email-icon.png'
import password_icon from '../Assets/password-icon.png'

const LoginSignup =() =>{

    const [action,setAction] = useState("Sign up");

    return(
        <div className='container-login'>
            <div className='container-login-small'>
                <div className='header-login'>
                    <div className='text-login'>{action}</div>
                    <div className='underline-login'></div>
                </div>
                <div className='inputs-login'>
                    {action ==="Login"?<div></div>:<div className='input'>
                        <img src={user_icon} alt="" />
                        <input type="text-login" placeholder='Username'/>
                    </div>}
                    

                    <div className='input'>
                        <img src={email_icon} alt="" />
                        <input type="email" placeholder='Email'/>
                    </div>

                    <div className='input'>
                        <img src={password_icon} alt="" />
                        <input type="password" placeholder='Password'/>
                    </div>
                </div>
                {action === "Sign up" ? <div></div> : <div className="forgot-password">Forgot Password? <span>Click here!</span></div>}

                
                <div className='submit-container-login'>
                    <div 
                        className={action === "Sign up" ? "submit gray" : "submit"} 
                        onClick={() => setAction("Sign up")}
                    >
                        Sign up
                    </div>
                    <div 
                        className={action === "Login" ? "submit gray" : "submit"} 
                        onClick={() => setAction("Login")}
                    >
                        Login
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginSignup