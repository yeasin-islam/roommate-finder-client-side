import React, { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase.config';
import { useLoaderData, useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';

const UpdateListing = () => {
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
    } = useLoaderData();

    const navigate = useNavigate();
    const [user, setUser] = useState({ email: '', displayName: '' });

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser({
                    email: currentUser.email || '',
                    displayName: currentUser.displayName || '',
                });
            }
        });

        return () => unsubscribe();
    }, []);

    const handleUpdateToFind = e => {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);
        const updatedPost = Object.fromEntries(formData.entries());
        console.log(updatedPost)

        fetch(`http://localhost:3000/posts/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedPost)
        })
            .then(res => res.json())
            .then(data => {

                if (data.modifiedCount) {
                    Swal.fire({
                        icon: "success",
                        title: "Post Updated Successfuly",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate("/my-listing");
                }
                else {
                    Swal.fire({
                        icon: "info",
                        title: "No Changes Made",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })

    }


    return (
        <section className='container mx-auto px-4 my-8'>
            <Helmet>
                <title>
                    Update Your Post | Find RoomMates
                </title>
            </Helmet>
            <div className="flex flex-col rounded-xl shadow-lg justify-center bg-base-300 items-center pb-10">
                <div className='text-center w-full max-w-2xl mt-6 px-4'>
                    <h2 className="text-3xl md:text-4xl font-bold my-8">Update You Post</h2>
                </div>

                <form onSubmit={handleUpdateToFind} className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 md:px-10 w-full max-w-5xl">

                    <div>
                        <legend className="fieldset-legend mb-1">Title</legend>
                        <input type="text" name="title" defaultValue={title} className="input input-bordered w-full" placeholder="e.g., 'Looking for a roommate in NYC'" required />
                    </div>

                    <div>
                        <legend className="fieldset-legend mb-1">Location</legend>
                        <input type="text" name="location" defaultValue={location} className="input input-bordered w-full" placeholder="Add Location" required />
                    </div>

                    <div>
                        <legend className="fieldset-legend mb-1">Rent Amount</legend>
                        <input type="text" name="rentAmount" defaultValue={rentAmount} className="input input-bordered w-full" placeholder="Add Rent Amount" required />
                    </div>

                    <div>
                        <legend className="fieldset-legend mb-1">Room Type</legend>
                        <select name="roomType" defaultValue={roomType} className="select w-full">
                            <option disabled>Select a Room Type</option>
                            <option>Single</option>
                            <option>Shared</option>
                        </select>
                    </div>
                    <div>
                        <legend className="fieldset-legend mb-1">Availability</legend>
                        <select name="availability" defaultValue={availability} className="select w-full">
                            <option disabled>Select a Availability</option>
                            <option>Available</option>
                            <option>Not Available</option>
                        </select>
                    </div>

                    <div className="">
                        <legend className="fieldset-legend mb-2">Lifestyle Preferences</legend>
                        <div className='flex flex-col md:flex-row gap-4 required'>
                            <label className="flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    name="pets"
                                    className="checkbox"
                                    defaultChecked={lifestyle?.includes('Pets allowed')}
                                />
                                Pets allowed
                            </label>
                            <label className="flex items-center gap-2">
                                <input type="checkbox" name="smoking" className="checkbox"
                                    defaultChecked={lifestyle?.includes('Smoking')}
                                />
                                Smoking
                            </label>
                            <label className="flex items-center gap-2">
                                <input type="checkbox" name="night" className="checkbox"
                                    defaultChecked={lifestyle?.includes('Night Owl')}
                                />
                                Night Owl
                            </label>
                        </div>
                    </div>


                    <div>
                        <legend className="fieldset-legend mb-1">Image</legend>
                        <input type="text" name="photo" defaultValue={photo} className="input input-bordered w-full" placeholder="Add a photo URL" required />
                    </div>
                    <div>
                        <legend className="fieldset-legend mb-1">Contact Number</legend>
                        <input type="text" name="contactnumber" defaultValue={contactNumber} className="input input-bordered w-full" placeholder="Add Your Contact Number" required />
                    </div>


                    <div className="md:col-span-2">
                        <legend className="fieldset-legend mb-1">Description</legend>
                        <textarea name="description" defaultValue={description} className="textarea h-24 w-full" placeholder="Type a short Description" required></textarea>
                    </div>
                    <div>
                        <legend className="fieldset-legend mb-1">Email</legend>
                        <input
                            type="email"
                            name="email"
                            value={user.email}
                            readOnly
                            className="input input-bordered w-full bg-gray-100"
                            placeholder="Add Email"
                            required />
                    </div>

                    <div>
                        <legend className="fieldset-legend mb-1">User Name</legend>
                        <input
                            type="text"
                            name="name"
                            value={user.displayName}
                            readOnly
                            className="input input-bordered w-full bg-gray-100"
                            placeholder="Add User Name"
                            required />
                    </div>

                    <button type="submit" className="btn md:col-span-2 btn-neutral mt-6 px-6">
                        Update
                    </button>
                </form>
            </div>
        </section>
    );
};

export default UpdateListing;