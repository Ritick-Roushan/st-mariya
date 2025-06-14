import { useEffect } from 'react';
import AOS from 'aos';
import { Link } from 'react-router-dom';

import 'aos/dist/aos.css';


// Hero Image (Placeholder, replace with actual school campus image)
const heroImage = 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80';

const About = () => {
    // Initialize AOS for animations
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    return (
        <div className="bg-[#F9FAFB] font-['Poppins']">
            {/* Hero Section */}
            <section
                className="relative bg-cover bg-center h-[60vh] flex items-center justify-center text-white"
                style={{ backgroundImage: `url(${heroImage})` }}
                data-aos="fade-in"
            >
                <div className="absolute inset-0 bg-[#1E3A8A]/70"></div>
                <div className="relative z-10 text-center px-4">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        Welcome to St. Mariya Public School
                    </h1>
                    <p className="text-xl md:text-2xl font-light">
                        Inspiring Minds. Shaping Futures.
                    </p>
                </div>
            </section>

            {/* About Our School Section */}
            <section className="py-16 px-4 md:px-8 lg:px-16 bg-white">
                <div className="container mx-auto max-w-5xl text-center" data-aos="fade-up">
                    <h2 className="text-3xl md:text-4xl font-semibold text-[#111827] mb-6">
                        About Our School
                    </h2>
                    <p className="text-lg text-[#4B5563] leading-relaxed mb-6">
                        St. Mariya Public School was established with a vision to redefine education by
                        fostering an environment where young minds are nurtured through meaningful,
                        value-based learning. Founded on the principles of integrity, curiosity, and
                        excellence, our school has grown into a beacon of holistic education since its
                        inception. We are dedicated to empowering students to explore their potential,
                        embrace challenges, and contribute meaningfully to society.
                    </p>
                    <p className="text-lg text-[#4B5563] leading-relaxed mb-6">
                        Our commitment extends beyond academics. We strive to instill life skills, moral
                        values, and a sense of responsibility in our students, preparing them to be
                        compassionate leaders and global citizens. Through a blend of innovative teaching
                        methods and a supportive community, we create opportunities for students to excel
                        in academics, arts, sports, and personal growth. St. Mariya Public School is more
                        than an institution—it's a vibrant community where dreams are nurtured, and
                        futures are shaped.
                    </p>
                    <p className="text-lg text-[#4B5563] leading-relaxed">
                        We actively engage with parents, local organizations, and the broader community to
                        foster a collaborative environment that supports our students' growth. Our legacy
                        is built on a foundation of trust, dedication, and a relentless pursuit of
                        excellence, making St. Mariya Public School a trusted name in education.
                    </p>
                </div>
            </section>

            {/* Campus Details Section */}
            <section className="py-16 px-4 md:px-8 lg:px-16 bg-[#F9FAFB]">
                <div className="container mx-auto max-w-6xl">
                    <h2
                        className="text-3xl md:text-4xl font-semibold text-[#111827] text-center mb-12"
                        data-aos="fade-up"
                    >
                        Our Campuses
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div
                            className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center"
                            data-aos="fade-right"
                        >
                            <svg
                                className="w-12 h-12 text-[#FF9999] mb-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                />
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                            </svg>
                            <h3 className="text-xl font-semibold text-[#111827] mb-2">
                                Main Campus
                            </h3>
                            <p className="text-[#4B5563] leading-relaxed">
                                Located just 100 meters from Bharat Petroleum, Eastern Bypass, Chhibramau,
                                Kannauj, our main campus offers a serene and secure environment, perfect for
                                focused learning.
                            </p>
                        </div>
                        <div
                            className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center"
                            data-aos="fade-left"
                        >
                            <svg
                                className="w-12 h-12 text-[#FF9999] mb-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                />
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                            </svg>
                            <h3 className="text-xl font-semibold text-[#111827] mb-2">
                                Extension Branch
                            </h3>
                            <p className="text-[#4B5563] leading-relaxed">
                                Situated 1 kilometer from Farrukhabad Chauraha on Farrukhabad Road, this
                                campus is nestled in peaceful, green surroundings, ideal for holistic
                                education.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Facilities Section */}
            <section className="py-16 px-4 md:px-8 lg:px-16 bg-white">
                <div className="container mx-auto max-w-6xl">
                    <h2
                        className="text-3xl md:text-4xl font-semibold text-[#111827] text-center mb-12"
                        data-aos="fade-up"
                    >
                        Our Facilities
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                icon: 'M12 14l9-5-9-5-9 5 9 5zm0 7l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z',
                                title: 'Modern Classrooms',
                                description: 'Spacious, well-lit classrooms equipped with smart boards for interactive learning.',
                            },
                            {
                                icon: 'M12 14l9-5-9-5-9 5 9 5z',
                                title: 'Science & Computer Labs',
                                description: 'Fully-equipped laboratories to foster hands-on learning in science and technology.',
                            },
                            {
                                icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
                                title: 'Library',
                                description: 'A well-stocked library with a vast collection of books to spark curiosity.',
                            },
                            {
                                icon: 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z',
                                title: 'Sports Grounds',
                                description: 'Well-maintained fields for various sports to promote physical fitness.',
                            },
                            {
                                icon: 'M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z',
                                title: 'Activity Areas',
                                description: 'Dedicated spaces for arts, music, and extracurricular activities.',
                            },
                        ].map((facility, index) => (
                            <div
                                key={index}
                                className="bg-[#F9FAFB] rounded-lg shadow-md p-6 flex flex-col items-center text-center"
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                            >
                                <svg
                                    className="w-12 h-12 text-[#FF9999] mb-4"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={facility.icon} />
                                </svg>
                                <h3 className="text-xl font-semibold text-[#111827] mb-2">{facility.title}</h3>
                                <p className="text-[#4B5563] leading-relaxed">{facility.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Teaching Philosophy Section */}
            <section className="py-16 px-4 md:px-8 lg:px-16 bg-[#F9FAFB]">
                <div className="container mx-auto max-w-5xl text-center" data-aos="fade-up">
                    <h2 className="text-3xl md:text-4xl font-semibold text-[#111827] mb-6">
                        Our Teaching Philosophy
                    </h2>
                    <p className="text-lg text-[#4B5563] leading-relaxed mb-6">
                        At St. Mariya Public School, we believe that every child learns differently.
                        That’s why we focus on personalized, engaging, and inclusive teaching methods
                        that cater to diverse learning styles. Our educators are trained not just to
                        teach, but to inspire — helping each student discover their strengths and
                        passions.
                    </p>
                    <img
                        src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"
                        alt="Students learning"
                        className="rounded-lg shadow-md mx-auto max-w-full h-auto"
                        data-aos="fade-up"
                        data-aos-delay="200"
                    />
                </div>
            </section>

            {/* Vision Section */}
            <section className="py-16 px-4 md:px-8 lg:px-16 bg-white">
                <div className="container mx-auto max-w-5xl text-center" data-aos="fade-up">
                    <h2 className="text-3xl md:text-4xl font-semibold text-[#111827] mb-6">
                        Our Vision
                    </h2>
                    <p className="text-lg text-[#4B5563] leading-relaxed">
                        Our vision is to become a center of excellence for education — where students
                        are not only prepared for academic success but are also guided to become
                        confident, compassionate, and responsible individuals. We aim to instill strong
                        moral values, critical thinking skills, and a lifelong love for learning in every
                        child.
                    </p>
                </div>
            </section>

            {/* Call to Action Section */}
            <section
                className="py-16 px-4 md:px-8 lg:px-16 bg-gradient-to-r from-[#1E3A8A] to-[#3B82F6] text-white text-center"
                data-aos="fade-up"
            >
                <div className="container mx-auto max-w-5xl">
                    <h2 className="text-3xl md:text-4xl font-semibold mb-6">
                        Join St. Mariya Public School
                    </h2>
                    <p className="text-lg mb-8">
                        Discover a place where dreams take flight. Enroll today and be part of our
                        vibrant community.
                    </p>
                    <Link
                        to="/admissions"
                        className="bg-[#FF9999] text-[#111827] px-8 py-3 rounded-full hover:bg-[#FF8585] hover:scale-105 hover:shadow-[0_4px_12px_rgba(255,153,153,0.3)] transition-all duration-300 font-semibold inline-block"
                    >
                        Apply Now
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default About;