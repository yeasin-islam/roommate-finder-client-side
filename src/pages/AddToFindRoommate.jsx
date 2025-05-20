import React from 'react';

const AddToFindRoommate = () => {
    return (
        <section className='container mx-auto px-4 my-8'>
            <div className="flex flex-col rounded-xl shadow-lg justify-center bg-slate-300 items-center pb-10">
                <div className='text-center w-full max-w-2xl mt-6 px-4'>
                    <h2 className="text-3xl md:text-4xl font-bold my-4">Add a Listing to Find Your Ideal Roommate</h2>
                    <p className="text-gray-600 mb-6">Share your room details and connect with someone who matches your vibe and lifestyle.</p>
                </div>

                <form className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 md:px-10 w-full max-w-5xl">
                    <div>
                        <legend className="fieldset-legend mb-1">Title</legend>
                        <input type="text" name="title" className="input input-bordered w-full"  placeholder="Add Title" />
                    </div>

                    <div>
                        <legend className="fieldset-legend mb-1">Location</legend>
                        <input type="text" name="location" className="input input-bordered w-full" placeholder="Add Location" />
                    </div>

                    <div>
                        <legend className="fieldset-legend mb-1">Rent Amount</legend>
                        <input type="text" name="rent-amount" className="input input-bordered w-full" placeholder="Add Rent Amount" />
                    </div>

                    <div>
                        <legend className="fieldset-legend mb-1">Room Type</legend>
                        <select defaultValue="Select a Room Type" className="select w-full">
                            <option disabled>Select a Room Type</option>
                            <option>Single</option>
                            <option>Shared</option>
                        </select>
                    </div>

                    <div className="md:col-span-2">
                        <legend className="fieldset-legend mb-2">Lifestyle Preferences</legend>
                        <div className='flex flex-col md:flex-row gap-4'>
                            <label className="flex items-center gap-2">
                                <input type="checkbox" className="checkbox" />
                                Pets allowed
                            </label>
                            <label className="flex items-center gap-2">
                                <input type="checkbox" className="checkbox" />
                                Smoking
                            </label>
                            <label className="flex items-center gap-2">
                                <input type="checkbox" className="checkbox" />
                                Night Owl
                            </label>
                        </div>
                    </div>

                    <div className="md:col-span-2">
                        <legend className="fieldset-legend mb-1">Description</legend>
                        <textarea className="textarea h-24 w-full" placeholder="Type Description"></textarea>
                    </div>

                    <div>
                        <legend className="fieldset-legend mb-1">Contact Info</legend>
                        <input type="text" name="contactinfo" className="input input-bordered w-full" placeholder="Add Your Contact Info" />
                    </div>

                    <div>
                        <legend className="fieldset-legend mb-1">Availability</legend>
                        <select defaultValue="Select a Availability" className="select w-full">
                            <option disabled>Select a Availability</option>
                            <option>Available</option>
                            <option>Not Available</option>
                        </select>
                    </div>

                    <div>
                        <legend className="fieldset-legend mb-1">Email</legend>
                        <input type="email" name="email" className="input input-bordered w-full" placeholder="Add Email" />
                    </div>

                    <div>
                        <legend className="fieldset-legend mb-1">User Name</legend>
                        <input type="text" name="name" className="input input-bordered w-full"  placeholder="Add User Name" />
                    </div>
                </form>

                <button className="btn btn-neutral mt-6 w-11/12 md:w-9/12 max-w-5xl px-6">
                    Add To Find Roommate
                </button>
            </div>
        </section>
    );
};

export default AddToFindRoommate;
