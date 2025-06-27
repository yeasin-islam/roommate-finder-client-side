import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLoaderData } from 'react-router';

const DetailsPage = () => {
  const postData = useLoaderData();
  const {
    _id,
    photo,
    title,
    location,
    rentAmount,
    roomType,
    description,
    contactNumber,
    availability,
    lifestyle,
    createdAt,
    name,
    email,
  } = postData;

  const [showContact, setShowContact] = useState(false);

  const date = createdAt ? new Date(createdAt) : null;
  const isValidDate = date instanceof Date && !isNaN(date);

  return (
    <section className='mx-4'>
      <Helmet>
        <title>Post Details | Find RoomMate</title>
      </Helmet>

      <div className="popins w-full container mx-auto p-4 sm:p-6 lg:p-8 my-8 bg-base-300 rounded-xl">
        <h2 className="text-3xl font-bold text-center mb-2 underline">Post Details</h2>

        <div className="text-center my-8 space-y-4">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">{title}</h1>
          <p className="text-lg font-bold">{description}</p>
        </div>

        <div className='md:flex justify-evenly items-start gap-4 mb-10'>
          <div className="flex justify-center mb-8 md:mb-0">
            <img src={photo} className="rounded-lg shadow-lg max-h-[350px]" alt={title} />
          </div>

          <div className="space-y-4">
            <p><strong>Name:</strong> {name}</p>
            <p><strong>Email:</strong> {email}</p>
            <p><strong>Location:</strong> {location}</p>
            <p><strong>Room Type:</strong> {roomType}</p>
            

            <div className="flex flex-wrap gap-2">
              <span className="font-bold text-lg">Lifestyle:</span>
              {lifestyle?.map((style, index) => (
                <span
                  key={index}
                  className="bg-base-100 text-sm border rounded-full px-3 py-1"
                >
                  {style}
                </span>
              ))}
            </div>
            <p><strong>Availability:</strong> {availability}</p>
            <p><strong>Rent:</strong> {rentAmount} ৳</p>
            <p><strong>Created At:</strong> {isValidDate ? date.toLocaleDateString() : 'Date not available'}</p>

            <div className="mt-4">
              <button
                onClick={() => setShowContact(prev => !prev)}
                className="btn btn-primary btn-sm"
              >
                {showContact ? 'Hide Contact' : 'View Contact'}
              </button>
              {showContact && (
                <div className="mt-2 bg-base-100 w-40 rounded-2xl text-center text-lg font-medium text-success">
                  📞 {contactNumber}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailsPage;
