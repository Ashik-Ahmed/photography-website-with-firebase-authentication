import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';

const Signup = () => {

    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const confirmPasswordRef = useRef();

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);


    const handleCreateUserWithEmailAndPassword = (e) => {
        e.preventDefault();

        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const confirmPassword = confirmPasswordRef.current.value;

        if (password === confirmPassword) {
            createUserWithEmailAndPassword(email, password);
        }

        else {
            console.log("Password mismatch");
        }
    }

    useEffect(() => {
        if (user) {
            console.log(user);
        }
        else {
            console.error(error);
        }
    }, [user])

    return (
        <div className='bg-gray-700 h-screen flex items-center justify-center'>
            <div className='md:w-1/4 mx-auto pt-6'>
                <h1 className='text-lg font-semibold my-4 text-white'>Please Sign up</h1>
                <form onSubmit={handleCreateUserWithEmailAndPassword} className='bg-gray-800 p-6 shadow-xl rounded-md'>
                    <div className="mb-6">
                        <input type="text" id="name" ref={nameRef} className="shadow-sm bg-gray-400 border-0 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Name" required />
                    </div>
                    <div className="mb-6">
                        <input type="email" id="email" ref={emailRef} className="shadow-sm bg-gray-400 border-0 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Email" required />
                    </div>
                    <div className="mb-6">
                        <input type="password" id="password" ref={passwordRef} className="shadow-sm bg-gray-400 border-0 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder='Password' required />
                    </div>
                    <div className="mb-6">
                        <input type="password" id="repeat-password" ref={confirmPasswordRef} className="shadow-sm bg-gray-400 border-0 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder='Confirm Password' required />
                    </div>
                    <div className="flex items-start mb-6">
                        <div className="flex items-center h-5">
                            <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 bg-gray-400 rounded focus:ring-3 focus:ring-blue-300 " required />
                        </div>
                        <div className="ml-3 text-sm">
                            <label for="terms" className="font-medium text-gray-50 dark:text-gray-300">I agree with the <a href="#" className="text-pink-500 hover:underline dark:text-blue-500 italic">terms and conditions</a></label>
                        </div>
                    </div>
                    <button type="submit" className="mb-6 text-white bg-pink-600 hover:bg-pink-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Register new account</button>
                    <br />
                    <small className='text-sm text-gray-50'>Already have an account?<Link to='/login'> <span className='text-pink-500 hover:underline italic'>Please Sign in.</span></Link> </small>

                </form>
            </div>
        </div >
    );
};

export default Signup;