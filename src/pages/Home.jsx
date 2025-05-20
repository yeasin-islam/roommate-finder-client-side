import React from 'react';
import FeaturedContainer from '../components/FeaturedContainer';
import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import UserTestimonial from '../components/UserTestimonial';


const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <FeaturedContainer></FeaturedContainer>
            <HowItWorks></HowItWorks>
            <UserTestimonial></UserTestimonial>
        </div>
    );
};

export default Home;