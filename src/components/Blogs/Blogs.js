import React from 'react';

const Blogs = () => {
    return (
        <div className='mt-16 bg-gray-600'>
            <div className='md:mx-20 pt-8'>
                <div>
                    <h3 className='text-2xl text-left my-4 text-white font-semibold'>1.	Difference between Authentication and Authorization:</h3>

                    <div class="shadow-md rounded-lg ">
                        {/* <table class="w-full table-auto md:w-3/4 text-left text-gray-200 border "> */}
                        <table className='table-auto border-2 w-full text-gray-200 text-left'>
                            <thead class="bg-gray-800 uppercase">
                                <tr>
                                    <th scope="col" class="px-6 py-3">
                                        Authentication
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Authorization
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class=" border-b hover:bg-gray-700 ">
                                    <td scope="row" class="px-6 py-4 whitespace-nowrap">
                                        Confirms users are who they say they are
                                    </td>
                                    <td class="px-6 py-4">
                                        Give users permission to access a resource
                                    </td>
                                </tr>
                                <tr class="border-b hover:bg-gray-700 ">
                                    <td scope="row" class="px-6 py-4 whitespace-nowrap">
                                        It works through PIN, OTP, password biometrics or apps
                                    </td>
                                    <td class="px-6 py-4">
                                        It works through settings maintained by security teams
                                    </td>
                                </tr>
                                <tr class=" hover:bg-gray-700 ">
                                    <td scope="row" class="px-6 py-4 whitespace-nowrap">
                                        Transmits info through an ID Token
                                    </td>
                                    <td class="px-6 py-4">
                                        Transmits info through an Access Token
                                    </td>
                                </tr>
                                <tr class=" hover:bg-gray-700 border">
                                    <td scope="row" class="px-6 py-4 whitespace-nowrap">
                                        Partially changeable by user
                                    </td>
                                    <td class="px-6 py-4">
                                        Not changeable by user
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className='text-white text-left mt-12'>
                    <h3 className='text-2xl my-4 text-white font-semibold'>2.	Why are you using firebase? What other options do you have to implement authentication?</h3>

                    <p>Firebase is maintained by Google and is a popular platform for authentication and so many backend services. It provides ready-made UI libraries to authenticate users. It is easy to use and supports almost all types of authentication like; email, password, phone number, and also popular social media platforms like; Google, Facebook, Github Microsoft, Apple etc. That’s why I am using Firebase for authentication.
                        <br />
                        Also, there are so many other options for authentication like; Auth0, MongoDB, Passport, Octa, Amazon Cognito etc.
                    </p>
                </div>

                <div className='text-gray-300 text-left py-12'>
                    <h3 className='text-2xl my-4 text-white font-semibold'>3.	What other services does firebase provide other than authentication?</h3>
                    <p>
                        Firebase provides different services.
                        <br />
                        <ol className='list-disc pl-5'>
                            <li>
                                <span className='font-semibold text-white'>Realtime Database:</span> Realtime database stores and sync data between users in realtime.
                            </li>
                            <li><span className='font-semibold text-white'>Remote Config:</span> Set up feature flags during prototyping and development.</li>
                            <li>
                                <span className='font-semibold text-white'>Firebase ML:</span> Add powerful machine learning features to apps with ready-to-use APIs and support for custom model deployment.

                            </li>
                            <li>
                                <span className='font-semibold text-white'>Cloud functions:</span> Write and run app logic server-side without needing to setup own server.
                            </li>
                            <li>
                                <span className='font-semibold text-white'>Cloud Messaging:</span> Infrastructure to reliably send and receive push messages between server and devices.
                            </li>
                            <li>
                                <span className='font-semibold text-white'>Hosting:</span> Provides a fast-loading and secure hosting service.
                            </li>
                            <li>
                                <span className='font-semibold text-white'>Cloud Storage:</span> Stores and serve user-generated content.
                            </li>
                        </ol>



                    </p>
                </div>

            </div>
        </div >
    );
};

export default Blogs;