import React from 'react';
import { Link } from 'react-router';
import { Tooltip } from 'react-tooltip';

const AllPostCard = ({ post }) => {
  const { _id, title, location, rentAmount, photo, availability, createdAt } = post;

  return (
    <div className="card bg-base-300 shadow hover:shadow-md rounded-xl h-full flex flex-col justify-between">
      {/* Image Section */}
      <div className="px-4 pt-4">
        <div className="h-48 overflow-hidden rounded-xl group">
          <img
            src={photo}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </div>

      {/* Card Body */}
      <div className="card-body flex flex-col justify-between text-center space-y-3 flex-grow">
        <div>
          <h2 className="card-title text-center">{title}</h2>
          <div className="text-left text-sm mt-2 space-y-1">
            <p><strong>Location:</strong> {location}</p>
            <p>
              <strong>Availability:</strong>{' '}
              <span className={availability === 'Available' ? 'text-green-600' : 'text-red-500'}>
                {availability}
              </span>
            </p>
            <p><strong>Rent:</strong> {rentAmount} ৳</p>
            <p><strong>Posted:</strong> {new Date(createdAt).toLocaleDateString()}</p>
          </div>
        </div>

        {/* Button + Tooltip */}
        <div className="card-actions justify-end mt-auto">
          <Link to={`/details/${_id}`}>
            <button
              id={`tooltip-${_id}`}
              className="btn btn-primary btn-xs md:btn-sm btn-outline w-full mt-4"
            >
              See More
            </button>
          </Link>

          <Tooltip
            anchorSelect={`#tooltip-${_id}`}
            place="top-end"
            clickable
            className="z-50"
          >
            Click to view full post details!
          </Tooltip>
        </div>
      </div>
    </div>
  );
};

export default AllPostCard;
