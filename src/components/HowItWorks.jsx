import React from 'react';

const HowItWorks = () => {
    return (
        <section className='bg-base-100 '>
            <div className="py-16 px-4 md:px-0 container mx-auto">
                <div className="container mx-auto  text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-12">How It Works</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 text-left">
                        <div className="card bg-base-200 shadow p-5 rounded-xl">
                            <h3 className="text-xl font-semibold mb-2">Step 1: Sign In</h3>
                            <p className="text-gray-600">Create an account or log in using your email or social login. It’s quick and secure.</p>
                        </div>
                        <div className="card bg-base-200 shadow p-5 rounded-xl">
                            <h3 className="text-xl font-semibold mb-2">Step 2: Post Your Listing</h3>
                            <p className="text-gray-600">Fill out the form with room details like location, rent, and lifestyle preferences.</p>
                        </div>
                        <div className="card bg-base-200 shadow p-5 rounded-xl">
                            <h3 className="text-xl font-semibold mb-2">Step 3: Add Contact Info</h3>
                            <p className="text-gray-600">Make sure your contact number and profile name are correct so interested users can reach you easily.</p>
                        </div>
                        <div className="card bg-base-200 shadow p-5 rounded-xl">
                            <h3 className="text-xl font-semibold mb-2">Step 4: Browse Listings</h3>
                            <p className="text-gray-600">View available listings posted by others. Use filters to narrow by rent, location, and availability.</p>
                        </div>
                        <div className="card bg-base-200 shadow p-5 rounded-xl">
                            <h3 className="text-xl font-semibold mb-2">Step 5: Save Favorites</h3>
                            <p className="text-gray-600">Bookmark listings you like to compare and revisit them later.</p>
                        </div>
                        <div className="card bg-base-200 shadow p-5 rounded-xl">
                            <h3 className="text-xl font-semibold mb-2">Step 6: Read Descriptions</h3>
                            <p className="text-gray-600">Check room type, availability, and lifestyle compatibility before you reach out.</p>
                        </div>
                        <div className="card bg-base-200 shadow p-5 rounded-xl">
                            <h3 className="text-xl font-semibold mb-2">Step 7: Get in Touch</h3>
                            <p className="text-gray-600">Contact the person via the number provided or message them through the platform (if available).</p>
                        </div>
                        <div className="card bg-base-200 shadow p-5 rounded-xl">
                            <h3 className="text-xl font-semibold mb-2">Step 8: Chat & Meet</h3>
                            <p className="text-gray-600">Have a conversation, ask questions, and schedule a visit if needed. Trust your vibe check!</p>
                        </div>
                        <div className="card bg-base-200 shadow p-5 rounded-xl">
                            <h3 className="text-xl font-semibold mb-2">Step 9: Finalize & Move In</h3>
                            <p className="text-gray-600">Once it clicks, make arrangements and start your new chapter. 🎉</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
