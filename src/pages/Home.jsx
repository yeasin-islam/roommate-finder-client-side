import React, { useState } from 'react';
import FeaturedContainer from '../components/FeaturedContainer';
import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import UserTestimonial from '../components/UserTestimonial';
import { Helmet } from 'react-helmet-async';
import { useLoaderData } from 'react-router';


const Home = () => {
    const postsData = useLoaderData();
    const [posts] = useState(postsData);
    return (
        <>
            <Helmet>
                <title>
                    Home | HomeMate
                </title>
            </Helmet>
            <div>
                <Hero></Hero>
                <FeaturedContainer posts={posts}></FeaturedContainer>
                <HowItWorks></HowItWorks>
                <UserTestimonial></UserTestimonial>
            </div>
        </>
    );
};

export default Home;