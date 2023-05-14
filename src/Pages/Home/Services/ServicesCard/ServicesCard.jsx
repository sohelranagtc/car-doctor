import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const ServicesCard = ({ service }) => {
    const { title, img, price } = service
    return (
        <div>
            <div className="card w-96 h-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={img} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <div className="card-actions">
                        <p className='text-xl text-orange-600'>Price ${price}</p>
                        <Link><FaArrowRight className='text-orange-600'></FaArrowRight></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesCard;