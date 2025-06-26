import React from "react";
import { Helmet } from "react-helmet-async";

const AboutUs = () => {
    return (
        <div className="poppins px-4 md:px-16 py-10 space-y-10 text-base-content">
            <Helmet>
                <title>
                    About US | Find HomeMates
                </title>
            </Helmet>
            <section className="text-center">
                <h1 className="text-4xl font-bold mb-4">Who We Are</h1>
                <p className="max-w-3xl mx-auto text-lg">
                    FindRoomMates is more than just a platform – we're a people-first initiative
                    to help individuals find ideal shared-living experiences. From students to professionals,
                    we make the process of finding a reliable roommate or listing a spare room smooth and safe.
                </p>
            </section>

            <section className="grid md:grid-cols-2 gap-10 items-center">
                <div>
                    <h2 className="text-2xl font-semibold mb-3">Our Mission</h2>
                    <p className="space-y-4">
                        <span>
                            To empower everyone with an easy, secure, and smart way to find trustworthy roommates and shared accommodations that feel like home.
                        </span>
                        <br />
                        <span>
                            We believe that shared living should never feel like a compromise. Our mission is to make that process thoughtful and stress-free — whether you're a student moving to a new city, a professional relocating for work, or someone simply looking for a better living experience.
                        </span>
                        <br />
                        <span>
                            By combining verified listings, user-friendly tools, and a community-first approach, we aim to create a space where trust, safety, and comfort come first. We're not just helping people find rooms — we're helping them find peace of mind.
                        </span>
                    </p>

                </div>
                <img
                    src="/assets/about-us.png"
                    alt="Our Mission"
                    className="w-full h-auto rounded-lg shadow-md"
                />
            </section>

            <hr />

            <section>
                <h2 className="text-2xl md:text-4xl font-semibold text-center mb-6">Meet the Team</h2>

                {/* Founder Card - Large & Featured */}
                <div data-aos="zoom-in" data-aos-delay={200} className="flex justify-center mb-12">
                    <div className="bg-base-200 rounded-2xl p-8 shadow-xl max-w-xl w-full text-center hover:scale-105 transition-all">
                        <img
                            src="/assets/Yeasin.jpg"
                            alt="Yeasin Islam"
                            className="w-28 h-28 object-cover mx-auto mb-4 rounded-full ring-4 ring-primary ring-offset-base-100 ring-offset-2"
                        />
                        <h3 className="text-2xl font-bold">Md. Yeasin Islam</h3>
                        <p className="text-base font-medium text-primary mt-1">Founder & Full-Stack Developer</p>
                        <p className="text-sm opacity-80 mt-4 px-4">
                            Yeasin built FindRoomMates from the ground up with a vision to simplify shared living experiences.
                            He’s passionate about accessible UI, seamless functionality, and solving real-world problems with code.
                        </p>
                        <div className="flex justify-center gap-4 mt-4">
                            <a href="https://www.linkedin.com/in/yeasin-islam75/" target="_blank" rel="noreferrer" className="link link-hover text-blue-500">LinkedIn</a>
                            <a href="https://github.com/yeasin-islam" target="_blank" rel="noreferrer" className="link link-hover text-gray-600">GitHub</a>
                            <a href="mailto:yeasin.webdev@gmail.com" className="link link-hover text-red-500">Email</a>
                        </div>
                    </div>
                </div>

                {/* Other Team Members */}
                <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    {[
                        {
                            name: "Sara Hossain",
                            role: "Customer Success",
                            img: "/assets/SaraHossain.jpeg",
                            desc: "Handles user queries, guides users through onboarding, and ensures a smooth support experience.",
                        },
                        {
                            name: "Riyad Khan",
                            role: "UI/UX Designer",
                            img: "/assets/RiyadKhan.jpg",
                            desc: "Designs intuitive layouts and ensures a consistent and clean user experience across devices.",
                        },
                    ].map((member, idx) => (
                        <div data-aos="fade-up" data-aos-delay={idx * 200}
                            key={idx}
                            className="bg-base-200 rounded-xl p-6 shadow hover:scale-105 transition-all"
                        >
                            <img
                                src={member.img}
                                alt={member.name}
                                className="w-24 h-24 object-cover mx-auto mb-4 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2"
                            />
                            <h3 className="text-xl font-semibold text-center">{member.name}</h3>
                            <p className="text-sm text-center opacity-70 mb-2">{member.role}</p>
                            <p className="text-sm text-center opacity-60">{member.desc}</p>
                        </div>
                    ))}
                </div>
            </section>


        </div>
    );
};

export default AboutUs;
