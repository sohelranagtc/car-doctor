import React, { useEffect, useState } from 'react';
import ServicesCard from './ServicesCard/ServicesCard';

const Services = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div>
            <div className='text-center space-y-5'>
                <h1 className='text-2xl font-bold text-orange-600'>Service</h1>
                <h1 className='text-4xl font-bold'>Our Service Area</h1>
                <h1 className='text-lg'>The majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable.</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5 mt-5 mb-10'>
                {
                    services.map(service => <ServicesCard key={service.service_id} service={service}></ServicesCard>)
                }
            </div>
        </div>
    );
};

export default Services;