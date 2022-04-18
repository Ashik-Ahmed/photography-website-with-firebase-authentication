import React from 'react';
import { Link } from 'react-router-dom';
import useReviews from '../../Hooks/useReviews';
import ReviewCard from '../ReviewCard/ReviewCard';
import './Home.css'

const Home = () => {

    const [reviews, setReviews] = useReviews();

    return (
        <div className='pt-16 bg-gray-700 md:h-fit text-white'>
            <div className='home-banner md:h-96 text-left md:flex md:items-center'>
                <div className='md:w-1/2 text-center'>
                    <h4 className='text-xl md:mb-10'>Welcome</h4>
                    <h1 className='text-5xl font-bold italic md:mb-4'>Ashik's Click</h1>
                    <h3 className='text-3xl italic font-mono md:mb-20'>Photography</h3>

                    <div className='bg-pink-500 py-2 px-4 rounded-3xl font-semibold hover:bg-pink-600 hover:-translate-y-1 inline-block duration-500'>
                        <Link to='/about'>Explore Me</Link>
                    </div>
                </div>
            </div>

            <div className=' justify-center md:px-36 bg-gray-800 py-6'>
                <h2 className='text-3xl font-semibold font-mono my-6'>Wedding Packages</h2>
                <div className='md:flex'>
                    <div class="mx-4 max-w-sm bg-white rounded-lg border mb-4 md:mb-0 hover:bg-pink-100 hover:scale-110 duration-500 border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                        <a href="#">
                            <img class="rounded-t-lg" src="https://resize.indiatvnews.com/en/resize/newbucket/715_-/2021/12/pjimage-2021-12-09t211615-1639064783.jpg" alt="" />
                        </a>
                        <div class="p-5">
                            <a href="#">
                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Package 1</h5>
                            </a>
                            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                            <Link to='/checkout' class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-pink-500 rounded-lg hover:bg-pink-600 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Book Now
                                <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            </Link>
                        </div>
                    </div>



                    <div class="mx-4 max-w-sm bg-white rounded-lg border mb-4 md:mb-0 hover:bg-pink-100 hover:scale-110 duration-500 border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                        <a href="#">
                            <img class="rounded-t-lg" src="https://resize.indiatvnews.com/en/resize/newbucket/715_-/2021/12/pjimage-2021-12-09t211615-1639064783.jpg" alt="" />
                        </a>
                        <div class="p-5">
                            <a href="#">
                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Package 2</h5>
                            </a>
                            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                            <Link to='/checkout' class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-pink-500 rounded-lg hover:bg-pink-600 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Book Now
                                <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            </Link>
                        </div>
                    </div>



                    <div class="mx-4 max-w-sm bg-white rounded-lg border mb-4 md:mb-0 hover:bg-pink-100 hover:scale-110 duration-500 border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                        <a href="#">
                            <img class="rounded-t-lg" src="https://resize.indiatvnews.com/en/resize/newbucket/715_-/2021/12/pjimage-2021-12-09t211615-1639064783.jpg" alt="" />
                        </a>
                        <div class="p-5">
                            <a href="#">
                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Package 3</h5>
                            </a>
                            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                            <Link to='/checkout' class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-pink-500 rounded-lg hover:bg-pink-600 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Book Now
                                <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            </Link>
                        </div>
                    </div>

                </div>

                <div className='text-right'>
                    <Link to='/services' class="inline-flex items-center mt-4 p-2 px-3 text-sm font-medium text-center text-white bg-pink-500 rounded-lg hover:bg-pink-600 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Explore All Package
                        <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </Link>
                </div>
            </div>


            <div className='md:grid grid-cols-3 my-4 md:mx-32'>
                {
                    reviews.map(review => <ReviewCard key={review.id} review={review}></ReviewCard>)
                }
            </div>


        </div>
    );
};

export default Home;