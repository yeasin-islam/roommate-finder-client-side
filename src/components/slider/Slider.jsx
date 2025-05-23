import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Navigation } from 'swiper/modules';
import { Link } from 'react-router';

export default function App() {
    return (
        <>
            <Swiper navigation={true} modules={[Navigation]} className="poppins mySwiper rounded-lg">
                {/* 1st */}
                <SwiperSlide className="relative h-[80vh] bg-cover bg-center bg-[url('/assets/image000.jpg')]">
                    {/* Overlay for dark background effect */}
                    <div className="absolute inset-0 bg-opacity-60"></div>

                    {/* Content */}
                    <div className="relative text-center flex items-center justify-center h-full p-6">
                        <div className="w-full text-center  space-y-6 py-32">
                            <h5 className="text-3xl sm:text-4xl md:text-5xl font-bold  leading-tight">
                                Find the Right Roommate,<br />Live Better Together
                            </h5>

                            <p className="st text-base-200 text-sm sm:text-base md:text-lg max-w-xl">
                                Easily connect with people who share your lifestyle, budget, and vibe. Start your journey to stress-free shared living today.
                            </p>

                            <Link to="/browse-listings">
                                <button className="btn text-2xl font-bold px-8 py-6 btn-primary">Get Start</button>
                            </Link>
                        </div>
                    </div>
                </SwiperSlide>
                {/* 2nd */}
                <SwiperSlide className="relative h-[80vh] bg-cover bg-center bg-[url('/assets/image1.jpg')]">
                    {/* Overlay for dark background effect */}
                    <div className="absolute inset-0 bg-opacity-60"></div>

                    {/* Content */}
                    <div className="relative text-center flex items-center justify-center h-full p-6">
                        <div className="w-full text-center  space-y-6 py-32">
                            <h5 className="text-3xl sm:text-4xl md:text-5xl font-bold  leading-tight">
                                Your Perfect Living Match <br /> Is Just a Click Away
                            </h5>

                            <p className="st text-base-200 text-sm sm:text-base md:text-lg max-w-xl">
                                Whether you're moving in or moving out, we help you find reliable roommates and verified rooms — fast, easy, and stress-free.
                            </p>

                            <Link to="/browse-listings">
                                <button className="btn text-2xl font-bold px-8 py-6 btn-primary">Get Start</button>
                            </Link>
                        </div>
                    </div>
                </SwiperSlide>
                {/* 3rd */}
                <SwiperSlide className="relative h-[80vh] bg-cover bg-center bg-[url('/assets/image2.jpg')]">
                    {/* Overlay for dark background effect */}
                    <div className="absolute inset-0 bg-opacity-60"></div>

                    {/* Content */}
                    <div className="relative text-center flex items-center justify-center h-full p-6">
                        <div className="w-full text-center  space-y-6 py-32">
                            <h5 className="text-3xl sm:text-4xl md:text-5xl font-bold  leading-tight">
                                Discover Spaces That <br /> Feel Like Home
                            </h5>

                            <p className="st text-base-200 text-sm sm:text-base md:text-lg max-w-xl">
                                Explore listings tailored to your lifestyle and connect with roommates who match your vibe. Because your next home is more than just four walls.
                            </p>

                            <Link to="/browse-listings">
                                <button className="btn text-2xl font-bold px-8 py-6 btn-primary">Get Start</button>
                            </Link>
                        </div>
                    </div>
                </SwiperSlide>
                {/* 4th */}
                <SwiperSlide className="relative h-[80vh] bg-cover bg-center bg-[url('/assets/image3.jpg')]">
                    {/* Overlay for dark background effect */}
                    <div className="absolute inset-0 bg-opacity-60"></div>

                    {/* Content */}
                    <div className="relative text-center flex items-center justify-center h-full p-6">
                        <div className="w-full text-center  space-y-6 py-32">
                            <h5 className="text-3xl sm:text-4xl md:text-5xl font-bold  leading-tight">
                                Discover Verified Posts <br /> Across the City
                            </h5>

                            <p className="st text-base-200 text-sm sm:text-base md:text-lg max-w-xl">
                                Browse updated, real-time room and flatmate options in your area. All listings come with verified details and clear photos.
                            </p>

                            <Link to="/browse-listings">
                                <button className="btn text-2xl font-bold px-8 py-6 btn-primary">Get Start</button>
                            </Link>
                        </div>
                    </div>
                </SwiperSlide>
                {/* 5th */}
                <SwiperSlide className="relative h-[80vh] bg-cover bg-center bg-[url('/assets/image4.jpg')]">
                    {/* Overlay for dark background effect */}
                    <div className="absolute inset-0 bg-opacity-60"></div>

                    {/* Content */}
                    <div className="relative text-center flex items-center justify-center h-full p-6">
                        <div className="w-full text-center  space-y-6 py-32">
                            <h5 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                                Post Your Room or Flatmate <br /> Requirement in Minutes
                            </h5>

                            <p className="text-base-200 text-sm sm:text-base md:text-lg max-w-xl text-center">
                                Got a spare room or looking for a flatmate? Post your ad in under 2 minutes and connect with the right people fast.
                            </p>
                            <Link to="/browse-listings">
                                <button className="btn text-2xl font-bold px-8 py-6 btn-primary">Get Start</button>
                            </Link>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
}
