import React from 'react';
import { Link } from 'react-router-dom';
import useReviews from '../../Hooks/useReviews';
import useServices from '../../Hooks/useServices';
import ReviewCard from '../ReviewCard/ReviewCard';
import ServiceCard from '../Services/ServiceCard';
import banner from '../../Images/HomeBanner.jpg';
import './Home.css';

const Home = () => {

    const [reviews, setReviews] = useReviews();
    const [services, setServices] = useServices();

    return (
        <div className='pt-16 bg-gray-800 md:h-fit text-white'>
            <div className='bg-white md:h-fit text-left md:flex md:items-center justify-around text-gray-700'>
                <div className='md:w-1/4'>
                    <img src={banner} alt="" />
                </div>
                <div className='md:w-1/2 text-center font-mono pb-4 md:pb-0'>
                    <h4 className='text-xl md:mb-10'>Welcome</h4>
                    <h1 className='text-5xl font-bold md:mb-4'>Ashik's Click</h1>
                    <h3 className='text-3xl italic md:mb-20'>Photography</h3>

                    <div className='bg-pink-500 text-white shadow-2xl rounded-3xl mt-6 md:mt-0 font-semibold hover:bg-pink-600 hover:-translate-y-1 inline-block duration-500'>
                        <Link className='py-2 px-4' to='/about'>Explore Me</Link>
                    </div>
                </div>
            </div>

            <div>
                <h2 className='text-3xl font-semibold font-mono my-6 border-b-4'>Wedding Packages</h2>
                <div className=' justify-center md:px-36'>
                    <div className='md:grid grid-cols-3 gap-4 my-4 md:mx-20'>
                        {
                            services.slice(0, 3).map(service => <ServiceCard key={service.id} service={service}></ServiceCard>)
                        }
                    </div>

                    <div className='text-right'>
                        <Link to='/services' class="inline-flex items-center mt-4 p-2 px-3 text-sm font-medium text-center text-white bg-pink-500 rounded-lg hover:bg-pink-600 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Explore All Package
                            <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </Link>
                    </div>
                </div>
            </div>


            <div className='mt-8'>
                <h3 className='text-3xl font-semibold font-mono border-b-4'>What People Say About My Work</h3>

                <div className='md:grid grid-cols-2 py-4 md:mx-32'>
                    {
                        reviews.slice(0, 2).map(review => <ReviewCard key={review.id} review={review}></ReviewCard>)
                    }
                </div>

            </div>

        </div>
    );
};

export default Home;