import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import LoadingFallback from '../components/shared/LoadingFallback';

const MyListing = () => {
    const { user } = useContext(AuthContext);
    const [myPosts, setMyPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (user?.email) {
            fetch(`http://localhost:3000/my-posts?email=${user.email}`)
                .then(res => res.json())
                .then(data => {
                    setMyPosts(data);
                    setLoading(false);
                })
                .catch(err => {
                    console.error(err);
                    setLoading(false);
                });
        }
    }, [user]);

    if (loading) {
        return (
            <LoadingFallback></LoadingFallback>
        );
    }


    return (
        <div className="container mx-auto px-4 py-10">
            <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-2">My Listings</h2>
                <p className="text-gray-500 text-sm md:text-base">
                    All your posted rooms and listings in one place. Update or delete anytime with ease.
                </p>
            </div>

            <div className="overflow-x-auto">
                <table className="table w-full bg-slate-100 shadow rounded-md text-sm md:text-base">
                    <thead className="bg-slate-300 text-gray-800">
                        <tr>
                            <th>Title</th>
                            <th>Location</th>
                            <th>Rent</th>
                            <th>Availability</th>
                            <th className='text-center'>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {myPosts.map(post => (
                            <tr key={post._id}>
                                <td>{post.title}</td>
                                <td>{post.location}</td>
                                <td>{post.rentAmount} Taka</td>
                                <td>
                                    <span className={`font-semibold ${post.availability === 'Available' ? 'text-green-600' : 'text-red-500'}`}>
                                        {post.availability}
                                    </span>
                                </td>
                                <td>
                                    <div className="md:flex gap-2 justify-center">
                                        <button className="mb-2 md:mb-0 btn btn-xs md:btn-sm btn-outline btn-primary">Update</button>
                                        <button className="btn btn-xs md:btn-sm btn-outline btn-error">Delete</button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyListing;
