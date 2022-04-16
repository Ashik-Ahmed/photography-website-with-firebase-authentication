import React, { useEffect, useRef } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Login = () => {

    const navigate = useNavigate();

    const emailRef = useRef();
    const passwordRef = useRef();

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);


    const handleSignInWithEmailAndPassword = (e) => {
        e.preventDefault();

        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email, password);
    }

    useEffect(() => {
        if (user) {
            navigate('/');
        }
    }, [user])

    if (error) {
        console.error(error);
    }
    return (
        <div className='flex items-center justify-center bg-gray-700 h-screen'>
            <div className='md:w-1/4 w-3/4'>

                <h2 className='text-lg font font-semibold mb-4 text-white'>Please Login</h2>

                <form onSubmit={handleSignInWithEmailAndPassword} className=' bg-gray-500 p-6 shadow-xl rounded-md'>
                    <div class="mb-6">
                        <input type="email" id="email" ref={emailRef} class="bg-gray-400 border-0 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Email" required />
                    </div>
                    <div class="mb-6">
                        <input type="password" id="password" ref={passwordRef} class="bg-gray-400 border-0 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder='Password' required />
                    </div>
                    <div class="flex items-start mb-6">
                        <div class="flex items-center h-5">
                            <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 bg-gray-400 rounded focus:ring-3 focus:ring-blue-300 " required="" />
                        </div>
                        <div class="ml-3 text-sm">
                            <label for="remember" class="font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                        </div>
                    </div>
                    <button type="submit" class="mb-6 text-white bg-pink-600 hover:bg-pink-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Login</button>
                    <br />

                    <button className='text-white hover:underline italic'> <small>Forgot Password?</small></button>
                    <br />

                    <Link to='/signup'> <small>New here? <span className='text-white font-semibold hover:underline italic'>Please Register.</span></small></Link>
                </form>
            </div>

        </div>
    );
};

export default Login;