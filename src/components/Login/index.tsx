import React from 'react';

const Login = () => {
    return (
        <div className='h-screen flex justify-center items-center px-5'>
            <div className='flex flex-col gap-y-5 custom-container max-w-md w-full'>
                <h1 className='text-center text-2xl font-bold'>Login</h1>
                <input className='custom-input ' type="text" name='login' required placeholder='Username'/>
                <input className='custom-input ' type="password" name='login' required placeholder='Username'/>
                <button className='custom-button-apply'>Login</button>
            </div>
        </div>
    );
};

export default Login;