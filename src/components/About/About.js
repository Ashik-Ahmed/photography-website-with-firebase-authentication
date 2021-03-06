import React from 'react';
import cover from '../../Images/myPic.png';
import { GiTrophyCup } from 'react-icons/gi'
import './About.css'


const About = () => {
    return (
        <div className='mt-16 h-fit bg-gray-600 text-white'>
            <div className='md:flex md:justify-around items-center banner'>
                <div className='md:w-1/3 h-full'>
                    <img className='' src={cover} alt="" />
                </div>
                <div className='h-full font-bold text-pink-600 md:text-white'>
                    <div>
                        <h1 className='text-7xl italic border-b-4'>Ashik Ahmed</h1>
                        <p className='text-xl italic font-mono mt-2'>- a professional photographer</p>
                    </div>
                    <div>
                        <p className='flex items-center mt-16 border-y-2 p-3 text-pink-600'> <span className='text-3xl text-yellow-300 rounded-full border-2 p-2'><GiTrophyCup /></span>  <span className='ml-2 text-lg'>I WAS AWARDED AS BEST PHOTOGRAPHER OF THE YEAR</span></p>
                    </div>
                </div>
            </div>

            <div className='py-10 md:mx-20'>
                <h2 className='text-3xl font-bold border-b-4 mb-4'>My Vision</h2>
                <p className='italic'>I am working as a photographer for the last 15 years. I am aiming to be on top 5 photographer of the world. I always try to do my best according to my clients requirement. Although, I have achieved so many awards, I am working hard to improve myself day by day. I am also doing wild photographies, sports photographies, event photographies and also sometime work for different journals to get experience in different photographies. I wish this hardwork will help me to achieve my goal one day.</p>
            </div>

            <div className='py-8 flex justify-center'>
                <div className='text-left'>
                    <h2 className='text-3xl font-semibold mb-4 border-b-4'>Contact Me</h2>
                    <p>Phone: +8801521464568</p>
                    <p>Email: ashikahmed121@gmail.com</p>
                    <p>Office Hours:</p>
                    <p>Sun -Thu : 9:00AM - 5:00PM</p>
                </div>
            </div>


        </div>
    );
};

export default About;