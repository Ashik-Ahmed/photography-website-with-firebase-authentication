import React, { useState } from 'react';

const ReviewCard = (props) => {
    const { name, img, description, rating } = props.review;


    // state for see More button 
    const [seeMore, setSeeMore] = useState(false);
    const handleSeeMore = () => {
        setSeeMore(!seeMore);
    }

    return (
        <div className='text-left bg-gray-500 text-gray-100 mx-auto  md:mx-6 mt-4'>
            <div className='flex items-center gap-4 mb-2 p-3 border-b-4'>
                <img className='w-8 h-8 rounded-full' src={img} alt="" />
                <h4 className='font-semibold'>{name}</h4>
            </div>
            <div className='px-4 pb-3'>
                <p className='font-bold mr-20'>Rating: {rating}</p>

                {/* Showing blog details full/short on button click */}
                {
                    description.length > 200 ? (
                        seeMore ? (<p className='italic  text-sm'>{description}<button onClick={handleSeeMore} className='text-pink-700 font-bold'>...See Less</button></p>) : <p className='italic  text-sm'>{description.slice(0, 200)}<button onClick={handleSeeMore} className='text-pink-700 font-bold'>...See More</button></p>
                    )
                        :
                        <p className='italic text-sm' >{description}</p>
                }

                {/* <p>{description.slice(0, 200)}<button className='text-yellow-600'>...See More</button></p> */}
            </div>
        </div>
    );
};

export default ReviewCard;