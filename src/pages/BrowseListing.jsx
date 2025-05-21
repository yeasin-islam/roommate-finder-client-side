import React from 'react';
import { useLoaderData } from 'react-router';

const BrowseListing = () => {

    const posts = useLoaderData();
    console.log(posts)

    return (
        <div className="container mx-auto px-4 py-10">
            <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-2">
                    Browse Listings That Feel Like Home
                </h2>
                <p className="text-gray-500 text-sm md:text-base">
                    Explore verified roommate listings with comfort, safety, and convenience at the heart of every match.
                </p>
            </div>

            <div className="overflow-x-auto">
                <table className="table w-full rounded-md shadow bg-slate-100 text-sm md:text-base">
                    <thead className="bg-slate-300 text-gray-800">
                        <tr>
                            <th>Title</th>
                            <th>Location</th>
                            <th>Rent</th>
                            <th>Availability</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div>
                                        <div className="font-bold">Hart Hagerty</div>
                                    </div>
                                </div>
                            </td>
                            <td>Zemlak, Daniel and Leannon</td>
                            <td>$2200</td>
                            <td>
                                <span className="text-green-600 font-medium">Available</span>
                            </td>
                            <td className="text-center">
                                <button className=" btn btn-xs md:btn-sm btn-outline btn-primary w-full md:w-auto">
                                    See_More
                                </button>
                            </td>

                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default BrowseListing;
