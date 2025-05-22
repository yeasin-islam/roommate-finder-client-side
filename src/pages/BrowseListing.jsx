import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useLoaderData} from 'react-router';

const BrowseListing = () => {
    const posts = useLoaderData();

    return (
        <div className="container mx-auto px-4 py-10">
            <Helmet>
                <title>
                    Browse All Post | Find HomeMates
                </title>
            </Helmet>
            <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-2">
                    All Post
                </h2>
                <p className="text-gray-500 text-sm md:text-base">
                    Explore verified roommate listings with comfort, safety, and convenience at the heart of every match.
                </p>
            </div>

            <div className="overflow-x-auto">
                <table className="table w-full rounded-md shadow bg-slate-100 text-sm md:text-base">
                    <thead className="bg-slate-300 text-gray-800">
                        <tr>
                            <th>Image</th>
                            <th>Title</th>
                            <th>Location</th>
                            <th>Rent</th>
                            <th>Availability</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {posts.map((post) => (
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
                                <td>
                                    <div className="font-bold">{post.title}</div>
                                </td>
                                <td>{post.location}</td>
                                <td>${post.rentAmount}</td>
                                <td>
                                    <span className={`font-medium ${post.availability === 'Available' ? 'text-green-600' : 'text-red-500'}`}>
                                        {post.availability}
                                    </span>
                                </td>
                                <td className="text-center">
                                    <Link to={`/details/${post._id}`}>
                                        <button
                                            className="btn btn-xs md:btn-sm btn-outline btn-primary w-full"
                                        >
                                            See_More
                                        </button>
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default BrowseListing;
