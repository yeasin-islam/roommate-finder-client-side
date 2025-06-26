import React, { useEffect, useState } from 'react';
import FeaturedCard from './FeaturedCard';
import ReactTypeTypeWriter from './reactAnimations/ReactTypeTypeWriter.jsx';
import AOS from 'aos';
import 'aos/dist/aos.css';

const FeaturedContainer = ({ posts }) => {
  const [featurPosts, setFeaturPosts] = useState([]);

  useEffect(() => {
    setFeaturPosts(posts);
  }, [posts]);

  useEffect(() => {
    AOS.init({ duration: 500, once: true });
  }, []);

  return (
    <section>
      <div className='popins pt-12 px-4 md:px-0 text-center container mx-auto'>
        <ReactTypeTypeWriter />
        <div className="mb-12 mt-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured Roommate Posts
          </h2>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-10'>
          {featurPosts.map((post, index) => (
            <div key={post._id} data-aos="fade-up" data-aos-delay={index * 100}>
              <FeaturedCard post={post} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedContainer;
