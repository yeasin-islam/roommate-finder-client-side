import React, { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase.config';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router';
import { Helmet } from 'react-helmet-async';

const AddToFindRoommate = () => {
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

    const navigate = useNavigate();

    const handleAddToFind = async (e) => {
        e.preventDefault();

        const form = e.target;

        const addToFindPost = {
            title: form.title.value,
            location: form.location.value,
            rentAmount: form['rent-amount'].value,
            roomType: form.roomType.value,
            description: form.description.value,
            contactNumber: form.contactnumber.value,
            availability: form.availability.value,
            photo: form.photo.value,
            likeCount: form.like.value,
            email: user.email,
            name: user.displayName,
            lifestyle: [
                form.pets.checked && 'Pets allowed',
                form.smoking.checked && 'Smoking',
                form.night.checked && 'Night Owl'
            ].filter(Boolean),
        };
        // console.log('Form Submission:', addToFindPost);

        fetch('https://batch11-assignment-10-server-side.vercel.app/posts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addToFindPost)
        })
            .then(res => res.json())
            .then(data => {

                if (data.insertedId) {
                    // console.log(data)
                    Swal.fire({
                        title: 'Listing Added!',
                        text: 'Your roommate listing has been submitted successfully.',
                        icon: 'success',
                        confirmButtonText: 'OK',
                    }).then(() => {
                        // form.reset();
                        navigate('/my-listing');
                    })
                }
            })
    };


    return (
        <section className='container mx-auto px-4 my-8'>
            <Helmet>
                <title>
                    Add Your Post | Find HomeMates
                </title>
            </Helmet>
            <div className="flex flex-col rounded-xl shadow-lg justify-center bg-base-300 items-center pb-10">
                <div className='text-center w-full max-w-2xl mt-6 px-4'>
                    <h2 className="text-3xl md:text-4xl font-bold my-4">Add Your Post</h2>
                    <p className=" mb-6">Share your room details and connect with someone who matches your vibe and lifestyle.</p>
                </div>

                <form onSubmit={handleAddToFind} className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 md:px-10 w-full max-w-5xl">

                    <div>
                        <legend className="fieldset-legend mb-1">Title</legend>
                        <input type="text" name="title" className="input input-bordered w-full" placeholder="e.g., 'Looking for a roommate in NYC'" required />
                    </div>

                    <div>
                        <legend className="fieldset-legend mb-1">Location</legend>
                        <input type="text" name="location" className="input input-bordered w-full" placeholder="Add Location" required />
                    </div>

                    <div>
                        <legend className="fieldset-legend mb-1">Rent Amount</legend>
                        <input type="text" name="rent-amount" className="input input-bordered w-full" placeholder="Add Rent Amount" required />
                    </div>

                    <div>
                        <legend className="fieldset-legend mb-1">Room Type</legend>
                        <select name="roomType" defaultValue="Select a Room Type" className="select w-full">
                            <option disabled>Select a Room Type</option>
                            <option>Single</option>
                            <option>Shared</option>
                        </select>
                    </div>
                    <div>
                        <legend className="fieldset-legend mb-1">Availability</legend>
                        <select name="availability" defaultValue="Select a Availability" className="select w-full">
                            <option disabled>Select a Availability</option>
                            <option>Available</option>
                            <option>Not Available</option>
                        </select>
                    </div>

                    <div className="">
                        <legend className="fieldset-legend mb-2">Lifestyle Preferences</legend>
                        <div className='flex flex-col md:flex-row gap-4 required'>
                            <label className="flex items-center gap-2">
                                <input type="checkbox" name="pets" className="checkbox" />
                                Pets allowed
                            </label>
                            <label className="flex items-center gap-2">
                                <input type="checkbox" name="smoking" className="checkbox" />
                                Smoking
                            </label>
                            <label className="flex items-center gap-2">
                                <input type="checkbox" name="night" className="checkbox" />
                                Night Owl
                            </label>
                        </div>
                    </div>


                    <div>
                        <legend className="fieldset-legend mb-1">Image</legend>
                        <input type="text" name="photo" className="input input-bordered w-full" placeholder="Add a photo URL" required />
                    </div>
                    <div>
                        <legend className="fieldset-legend mb-1">Contact Number</legend>
                        <input type="text" name="contactnumber" className="input input-bordered w-full" placeholder="Add Your Contact Number" required />
                    </div>


                    <div className="md:col-span-2">
                        <legend className="fieldset-legend mb-1">Description</legend>
                        <textarea name="description" className="textarea h-24 w-full" placeholder="Type a short Description" required></textarea>
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

                    <div className='hidden'>
                        <legend className="fieldset-legend mb-1">Image</legend>
                        <input type="text" name="like" defaultValue='0' className="input input-bordered w-full" placeholder="Like Count"/>
                    </div>

                    <button type="submit" className="btn md:col-span-2 btn-neutral mt-6 px-6">
                        Add Your Post
                    </button>
                </form>
            </div>
        </section>
    );
};

export default AddToFindRoommate;
