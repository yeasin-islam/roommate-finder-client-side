import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import LoadingFallback from '../../components/shared/LoadingFallback';
import Swal from 'sweetalert2';
import { Link } from 'react-router';
import Profile from '../Profile';
import { Helmet } from 'react-helmet-async';

const MyListing = () => {
    const { user } = useContext(AuthContext);
    const [myPosts, setMyPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (user?.email) {
            fetch(`${import.meta.env.VITE_API_URL}/my-posts?email=${user.email}`)
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

    const handleDelete = (_id) => {
        // console.log(_id);

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            // console.log(result.isConfirmed)
            if (result.isConfirmed) {

                fetch(`${import.meta.env.VITE_API_URL}/posts/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        // console.log('after delete', data)
                        if (data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Post has been deleted.",
                                icon: "success"
                            });
                            setMyPosts(myPosts.filter(post => post._id !== _id));
                        }
                    })
            }
        });
    }

    return (
        <div className="container mx-auto px-4 py-10">
            <Helmet>
                <title>
                    Your Post & Profile | Find RoomMates
                </title>
            </Helmet>
            <div className="text-center mb-8">
                <h2 className="text-3xl md:text-5xl font-bold mb-2">Your Posts</h2>
                <p className="text-sm md:text-base">
                    All your poste in one place. Update or delete anytime with ease.
                </p>
            </div>

            <div className="overflow-x-auto">
                <table className="table w-full bg-base-200 shadow rounded-md text-sm md:text-base">
                    <thead className="bg-base-300">
                        <tr>
                            <th>Image</th>
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
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle h-12 w-12">
                                            <img
                                                src={post.photo}
                                                alt="Post photo" />
                                        </div>
                                    </div>
                                </td>
                                <td>{post.title}</td>
                                <td>{post.location}</td>
                                <td>{post.rentAmount} ৳</td>
                                <td>
                                    <span className={`font-semibold ${post.availability === 'Available' ? 'text-green-600' : 'text-red-500'}`}>
                                        {post.availability}
                                    </span>
                                </td>
                                <td className="py-2 px-4">
                                    <div className="flex flex-wrap justify-center gap-2">
                                        <Link to={`/details/${post._id}`}>
                                            <button className="btn btn-xs btn-outline hover:btn-info" title="View Details">Details</button>
                                        </Link>
                                        <Link to={`/update-my-listing/${post._id}`}>
                                            <button className="btn btn-xs btn-outline hover:btn-warning" title="Edit Post">Update</button>
                                        </Link>
                                        <button
                                            onClick={() => handleDelete(post._id)}
                                            className="btn btn-xs btn-outline btn-error hover:bg-error "
                                            title="Delete Post"
                                        >
                                            Delete
                                        </button>
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
