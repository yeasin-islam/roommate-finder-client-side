import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import './styles.css';
import { Navigation } from 'swiper/modules';
import { Link } from 'react-router';

export default function Hero() {
  const slides = [
    {
      title: "Find the Right Roommate",
      text: "Connect with people who match your lifestyle, budget, and vibe.",
      bg: "/assets/image000.jpg",
      btnText: "Explore All Post",
      btnLink: "/browse-listings",
    },
    {
      title: "List Your Room in Seconds",
      text: "Post your spare room and let the right roommate find you.",
      bg: "/assets/image1.jpg",
      btnText: "Post Now",
      btnLink: "/dashboard/addtofind-roommate",
    },
    {
      title: "Join a Community that Feels Like Home",
      text: "Because your next stay shouldn't just be four walls—it should feel right.",
      bg: "/assets/image2.jpg",
      btnText: "View Dashboad",
      btnLink: "/dashboard/overview",
    },
    {
      title: "Start Your Shared Living Journey Today",
      text: "From search to settle-in, we’ve got you covered every step of the way.",
      bg: "/assets/image3.jpg",
      btnText: "Your Posts",
      btnLink: "/dashboard/my-listing",
    },
  ];

  return (
    <Swiper
      navigation={true}
      modules={[Navigation]}
      className="poppins mySwiper rounded-lg"
    >
      {slides.map((slide, idx) => (
        <SwiperSlide key={idx} className="relative h-[70vh]">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.bg})` }}
          ></div>

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40 z-10"></div>

          {/* Content */}
          <div className="relative z-20 flex justify-center items-center text-center h-full px-4 sm:px-6">
            <div className="bg-base-100/30 p-6 sm:p-10 rounded-3xl w-full max-w-3xl space-y-6 m-8">
              <h2 className="text-3xl sm:text-4xl font-bold text-base-content">
                {slide.title}
              </h2>
              <p className="text-sm sm:text-base md:text-lg max-w-xl mx-auto text-base-content">
                {slide.text}
              </p>
              <Link to={slide.btnLink}>
                <button className="btn text-base font-semibold sm:text-lg px-6 py-3 btn-primary">
                  {slide.btnText}
                </button>
              </Link>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
