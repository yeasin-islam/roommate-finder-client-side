import React, { useEffect, useState } from 'react';
import FeaturedCard from './FeaturedCard'
import ReactTypeTypeWriter from './reactAnimations/ReactTypeTypeWriter.jsx'

const FeaturedContainer = ({ posts }) => {

    const [featurPosts, setFeaturPosts] = useState([])

    useEffect(() => {
        setFeaturPosts(posts)
    }, [ posts])

    

    return (
        <section className='bg-base-200'>
            <div className='fontStyle py-12 px-4 md:px-0 text-center container mx-auto'>
                <ReactTypeTypeWriter></ReactTypeTypeWriter>
                {/* Section Tag & Description */}
                <div className="mb-12 mt-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                        Featured Roommate Posts
                    </h2>

                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-10'>
                    {featurPosts.map(post => (
                        <FeaturedCard key={post._id} post={post} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedContainer;