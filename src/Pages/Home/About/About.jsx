import React from 'react';
import person from '../.../../../../assets/images/about_us/person.jpg'
import parts from '../.../../../../assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div className="hero mt-20 mb-20">
            <div className="hero-content flex-col lg:flex-row">
                <div className='lg:w-1/2 md:relative'>
                    <img src={person} className="md:w-3/4 md:border-white rounded-lg shadow-2xl" />
                    <img src={parts} className="md:w-1/2 left-60 top-2/4 border-white md:border-8 md:absolute rounded-lg shadow-2xl" />
                </div>
                <div className='lg:w-1/2 space-y-5'>
                    <h1 className='text-2xl font-bold text-orange-500'>About Us</h1>
                    <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
                    <p className="text-xl">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                    <p className="text-xl">The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                    <button className="btn btn-primary">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;