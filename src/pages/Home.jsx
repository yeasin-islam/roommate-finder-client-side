import React, { useState } from 'react';
import FeaturedContainer from '../components/FeaturedContainer';
import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import UserTestimonial from '../components/UserTestimonial';
import { Helmet } from 'react-helmet-async';
import { useLoaderData } from 'react-router';
import WhyChooseUs from '../components/WhyChooseUs';
import Newsletter from '../components/Newsletter';


const Home = () => {
    const postsData = useLoaderData();
    const [posts] = useState(postsData);
    return (
        <>
            <Helmet>
                <title>
                    Home | Find RoomMates
                </title>
            </Helmet>
            <div>
                <Hero></Hero>
                <FeaturedContainer posts={posts}></FeaturedContainer>
                <HowItWorks></HowItWorks>
                <UserTestimonial></UserTestimonial>
                <WhyChooseUs></WhyChooseUs>
                <Newsletter></Newsletter>
            </div>
        </>
    );
};

export default Home;