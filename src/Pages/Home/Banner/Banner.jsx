import React from 'react';
import Image1 from "../../../assets/images/banner/1.jpg"
import Image2 from "../../../assets/images/banner/2.jpg"
import Image3 from "../../../assets/images/banner/3.jpg"
import Image4 from "../../../assets/images/banner/4.jpg"
import Image5 from "../../../assets/images/banner/5.jpg"
import Image6 from "../../../assets/images/banner/6.jpg"

const Banner = () => {
    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={Image1} className="w-full rounded-lg" />
                <div className="absolute items-center flex bg-gradient-to-r from-black h-full w-full rounded-lg">
                    <div className='text-white md:pl-20 pl-5 space-y-5 md:w-1/2 sm:w-full'>
                        <h1 className='md:text-6xl font-bold'>Affordable Price For Car Servicing</h1>
                        <p className='md:text-2xl'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='space-x-5 md:flex'>
                            <button class="btn btn-primary">Discover More</button>
                            <button className="btn btn-outline btn-secondary">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end  transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={Image2} className="w-full rounded-lg" />
                <div className="absolute items-center flex bg-gradient-to-r from-black h-full w-full rounded-lg">
                    <div className='text-white md:pl-20 pl-5 space-y-5 md:w-1/2 sm:w-full'>
                        <h1 className='md:text-6xl font-bold'>Affordable Price For Car Servicing</h1>
                        <p className='md:text-2xl'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='space-x-5 md:flex'>
                            <button class="btn btn-primary">Discover More</button>
                            <button className="btn btn-outline btn-secondary">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={Image3} className="w-full rounded-lg" />
                <div className="absolute items-center flex bg-gradient-to-r from-black h-full w-full rounded-lg">
                    <div className='text-white md:pl-20 pl-5 space-y-5 md:w-1/2 sm:w-full'>
                        <h1 className='md:text-6xl font-bold'>Affordable Price For Car Servicing</h1>
                        <p className='md:text-2xl'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='space-x-5 md:flex'>
                            <button class="btn btn-primary">Discover More</button>
                            <button className="btn btn-outline btn-secondary">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide2" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={Image4} className="w-full rounded-lg" />
                <div className="absolute items-center flex bg-gradient-to-r from-black h-full w-full rounded-lg">
                    <div className='text-white md:pl-20 pl-5 space-y-5 md:w-1/2 sm:w-full'>
                        <h1 className='md:text-6xl font-bold'>Affordable Price For Car Servicing</h1>
                        <p className='md:text-2xl'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='space-x-5 md:flex'>
                            <button class="btn btn-primary">Discover More</button>
                            <button className="btn btn-outline btn-secondary">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide3" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;