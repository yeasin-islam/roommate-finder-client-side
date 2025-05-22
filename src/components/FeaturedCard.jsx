import React from 'react';
import { Link } from 'react-router';

const FeaturedCard = ({ post }) => {
    const { title, location, rentAmount, description, photo, availability } = post;
    return (
        <div className="card bg-base-100 shadow-sm">
            <div className="flex mx-auto justify-center mt-6 rounded-xl w-72 h-48 overflow-hidden group">
                <img
                    src={photo}
                    alt="Image"
                    className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                />
            </div>
            <div className="card-body ml-5 text-center">
                <h2 className="card-title text-center">{title}</h2>
                <div className='text-left'>
                    <h3>Location: {location}</h3>
                    <h3>Availablity: {availability}</h3>
                    <h4>Rent: {rentAmount} Taka</h4>
                    <p>Description: {description}</p>
                </div>
                <div className="card-actions justify-end">
                    <Link to={`/details/${post._id}`}>
                        <button
                            className="btn btn-xs md:btn-sm btn-outline btn-primary w-full"
                        >
                            See_More
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default FeaturedCard;