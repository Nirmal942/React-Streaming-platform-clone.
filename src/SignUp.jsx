import React, { useRef } from 'react';


const SignUp = () => {


    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    // alert(emailRef.current.value);

    const register = (e) => {
        e.preventDefault();
        alert(emailRef.current.value)

    }

    const signIn = (e) => {
        e.preventDefault();
        alert(emailRef.current.value)


    }

    return (
        <div className='SignUpScreen'>
            <form>
                <h1>Sign In </h1>
                <input ref={emailRef} type='email' placeholder='Email' />
                <input ref={passwordRef} type='password' placeholder='Passwword' />
                <button onClick={signIn}>Sign In</button>

                <h4>New to NetFlix ? <span onClick={register}>Sign Up Now.</span> </h4>
            </form>
        </div >
    )
}

export default SignUp