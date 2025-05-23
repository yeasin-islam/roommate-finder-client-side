import React from 'react';
import { Link } from 'react-router';
import { Tooltip } from 'react-tooltip';

const FeaturedCard = ({ post }) => {
    const PLACES = ['top-end']
    const { title, location, rentAmount, photo, availability } = post;
    return (
        <div className="card bg-base-300 shadow-sm">
            <div className="flex mx-auto justify-center mt-6 rounded-xl w-72 h-48 overflow-hidden group">
                <img
                    src={photo}
                    alt="Image"
                    className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                />
            </div>
            <div className="card-body ml-5 text-center">
                <h2 className="card-title text-center">{title}</h2>
                <div className='text-left mb-2'>
                    <h3>Location: {location}</h3>
                    <h3>Availablity: {availability}</h3>
                    <h4>Rent: {rentAmount} Taka</h4>
                </div>
                <div className="card-actions justify-end">
                    <Link to={`/details/${post._id}`}>
                        <button id="clickable"
                            className="btn btn-xs md:btn-sm btn-outline  w-full"
                        >
                            See_More
                        </button>
                        {PLACES.map(place => (
                            <Tooltip key={place} anchorSelect="#clickable" place={place} clickable>
                                <button>Click me for see details!</button>
                            </Tooltip>
                        ))}
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default FeaturedCard;