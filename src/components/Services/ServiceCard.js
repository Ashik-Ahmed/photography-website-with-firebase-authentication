import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = (props) => {

    const { name, img, price, description } = props.service;
    return (
        <div>

            <div className="bg-gray-300 rounded-lg mb-4 md:mb-0 over border-gray-200 shadow-md hover:scale-110 duration-500">

                <img className="rounded-t-lg h-60 w-full" src={img} alt="" />

                <div className="p-5">
                    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
                    <p className="mb-3 text-3xl font-bold text-pink-500 dark:text-gray-400">$ {price}</p>
                    <div className='flex justify-center text-black'>
                        <ol className='list-disc text-gray-600'>
                            {
                                description.map(desc => <li className='text-left'>{desc}</li>)
                            }
                        </ol>
                    </div>

                    <Link to='/checkout' className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-pink-500 rounded-lg hover:bg-pink-600 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Book Now
                        <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default ServiceCard;