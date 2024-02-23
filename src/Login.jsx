import React, { useState } from 'react'
import SignUp from './SignUp';


const Login = () => {
    const [signIn, SetSignIn] = useState(false);

    const showSignUp = (e) => {
        e.preventDefault();
        alert('Hi')
        SetSignIn(true);
    }

    return (
        <div className='login'>
            <div className='login_header'>
                <img src='Images/Netflix-Logo.png' className='login__logo' />
                
                <button className='login_button' >Sign in</button>
            </div>
            <div className='login_body'>
                {
                    signIn ? (<SignUp />) : (
                        <>
                            <h1>Unlimited movies, TV shows and more </h1>
                            <h2>Watch anywhere. Cancel anytime.</h2>
                            <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
                            <form className='login_form' onSubmit={ showSignUp}>
                                <input type='text' placeholder='Email Address' />
                                <button >Get started</button>
                            </form>
                        </>
                    )
                }
            </div>


            <div className='login_gradient'></div>
        </div >

    )
}

export default Login