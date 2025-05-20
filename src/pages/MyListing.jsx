import React from 'react';

const MyListing = () => {
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
                            <th></th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="font-bold">Hart Hagerty</div>
                                </div>
                            </td>
                            <td>Zemlak, Daniel and Leannon</td>
                            <td>$2200</td>
                            <td className="text-green-600 font-medium">Available</td>
                            <td>
                                <div className="md:flex gap-2 justify-center">
                                    <button className="mb-2 md:mb-0 btn btn-xs md:btn-sm btn-outline btn-primary">Update</button>
                                    <button className="btn btn-xs md:btn-sm btn-outline btn-error">Delete</button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyListing;
