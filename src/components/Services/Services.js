import React from 'react';
import useServices from '../../Hooks/useServices';
import ServiceCard from './ServiceCard';

const Services = () => {

    const [services, setServices] = useServices();

    return (
        <div className='bg-gray-700 h-fit mt-16'>
            <div className='py-6'>
                <h2 className='text-white text-3xl border-b-4'>Choose the best match for you</h2>

            </div>
            <div className='md:grid grid-cols-3 gap-4 py-4 md:mx-32'>
                {
                    services.map(service => <ServiceCard key={service.id} service={service}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;