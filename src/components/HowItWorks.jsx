import React from 'react';

const HowItWorks = () => {
    return (
        <section className=''>
            <div className="py-16 px-4 md:px-0 container mx-auto">
                <div className="container mx-auto  text-center">
                    <h2 className="text-3xl md:text-5xl font-bold mb-12">How It Works</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 text-left">
                        <div className="card bg-base-300 shadow p-5 rounded-xl">
                            <h3 className="text-xl font-semibold mb-2">Step 1: Sign In</h3>
                            <p className="">Create an account or log in using your email or social login. It’s quick and secure.</p>
                        </div>
                        <div className="card bg-base-300 shadow p-5 rounded-xl">
                            <h3 className="text-xl font-semibold mb-2">Step 2: Post Your Finding</h3>
                            <p className="">Fill out the form with room details like location, rent, and lifestyle preferences.</p>
                        </div>
                        <div className="card bg-base-300 shadow p-5 rounded-xl">
                            <h3 className="text-xl font-semibold mb-2">Step 3: Add Contact Info</h3>
                            <p className="">Make sure your contact number and profile name are correct so interested users can reach you easily.</p>
                        </div>
                        <div className="card bg-base-300 shadow p-5 rounded-xl">
                            <h3 className="text-xl font-semibold mb-2">Step 4: Browse All Post</h3>
                            <p className="">View available posts posted by others. Use filters to narrow by rent, location, and availability.</p>
                        </div>
                        
                        <div className="card bg-base-300 shadow p-5 rounded-xl">
                            <h3 className="text-xl font-semibold mb-2">Step 5: Read Post Details</h3>
                            <p className="">Check room type, availability, and lifestyle compatibility before you reach out.</p>
                        </div>
                        <div className="card bg-base-300 shadow p-5 rounded-xl">
                            <h3 className="text-xl font-semibold mb-2">Step 6: Get in Touch</h3>
                            <p className="">Contact the person via the number provided or message them through the platform (if available).</p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
