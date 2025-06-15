import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Img1 from '../../Images/img1.jpg';
import Img2 from '../../Images/img2.jpg';
import Img3 from '../../Images/img3.jpg';
import Img4 from '../../Images/img4.jpg';
import Img5 from '../../Images/img5.jpg';
import Img6 from '../../Images/img6.jpg';
import Img8 from '../../Images/img8.jpg';
import Img10 from '../../Images/img10.jpg';
import Img11 from '../../Images/img11.jpg';

const Home = () => {
  const images = [Img1, Img11, Img2, Img3, Img4, Img5, Img6, Img8, Img10];
  const [currentImage, setCurrentImage] = useState(0);

  // Initialize AOS and carousel
  useEffect(() => {
    try {
      AOS.init({ duration: 1000, once: true });
    } catch (error) {
      console.warn('AOS initialization failed:', error);
    }
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => {
      clearInterval(interval);
      try {
        AOS.refreshHard();
      } catch (error) {
        console.warn('AOS cleanup failed:', error);
      }
    };
  }, [images.length]);

  return (
    <div className="bg-[#F9FAFB] font-['Poppins']">
      {/* Hero Section */}
      <section
        className="relative h-auto sm:h-[60vh] md:h-[80vh] flex items-center justify-center overflow-hidden bg-[#E5E7EB]"
        data-aos="fade"
      >
        <div className="absolute inset-0 w-full h-full">
          <img
            src={images[currentImage]}
            alt={`St. Mariya Public School Slide ${currentImage + 1}`}
            className="w-full h-full object-contain md:object-cover object-center transition-transform duration-1000 ease-in-out transform hover:scale-105 backdrop-blur-[2px]"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(30,58,138,0.3),rgba(37,99,235,0.3),rgba(59,130,246,0.3)),radial-gradient(ellipse_at_center,rgba(30,58,138,0.2)_0%,rgba(59,130,246,0.2)_70%)]"></div>
        </div>
        <div
          className="relative z-10 text-center px-4 sm:px-6 py-8 sm:py-6 md:py-20"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg tracking-tight">
            Welcome to St. Mariya Public School
          </h1>
          <p className="text-sm sm:text-base md:text-xl font-light text-[#D1D5DB] mb-6 max-w-md sm:max-w-lg md:max-w-xl mx-auto leading-relaxed">
            Empowering minds with CBSE excellence, fostering holistic development, and shaping future leaders.
          </p>
          <Link
            to="/admissions"
            className="bg-[#FF9999] text-[#111827] px-6 py-3 sm:px-8 sm:py-4 rounded-full hover:bg-[#FF8585] hover:scale-110 hover:shadow-[0_10px_25px_rgba(255,133,133,0.6)] transition-all duration-300 font-semibold focus:ring-2 focus:ring-[#FF8585] focus:outline-none animate-pulse-slow"
          >
            Apply Now
          </Link>
        </div>
        <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 flex justify-center space-x-3">
          {images.map((_, index) => (
            <button
              key={`carousel-${index}`}
              className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all duration-300 ${
                index === currentImage
                  ? 'bg-[#FF9999] scale-125 shadow-[0_0_8px_rgba(255,133,133,0.8)]'
                  : 'bg-white/70 hover:bg-white/90 hover:scale-110'
              }`}
              onClick={() => setCurrentImage(index)}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="container mx-auto px-4 sm:px-6 py-10 sm:py-12">
        <h2
          className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#111827] text-center mb-8 sm:mb-10 relative inline-block"
          data-aos="fade-up"
        >
          Explore St. Mariya Public School
          <span className="absolute bottom-[-8px] left-1/2 transform -translate-x-1/2 w-16 h-1 bg-[#FF9999] rounded"></span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {[
            {
              title: 'Admissions',
              desc: 'Join our inclusive community with a streamlined admission process.',
              link: '/admissions',
              icon: 'M12 14l9-5-9-5-9 5 9 5z',
            },
            {
              title: 'Curriculum',
              desc: 'Explore our comprehensive CBSE curriculum for Pre-Primary to Class 12.',
              link: '/curriculum',
              icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
            },
            {
              title: 'Counselling',
              desc: 'Support for academic, emotional, and social growth.',
              link: '/counsellor-column',
              icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
            },
            {
              title: 'Behavioural Policy',
              desc: 'Learn about our discipline and positive reinforcement strategies.',
              link: '/behavioural-policy',
              icon: 'M5 13l4 4L19 7',
            },
          ].map((item, index) => (
            <div
              key={`quick-link-${index}`}
              className="bg-white p-4 sm:p-5 rounded-xl shadow-md hover:shadow-[0_6px_16px_rgba(0,0,0,0.15)] hover:scale-105 transition-all duration-300 text-center"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <svg
                className="w-8 h-8 sm:w-10 sm:h-10 text-[#FF9999] mx-auto mb-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={item.icon}
                />
              </svg>
              <h3 className="text-sm sm:text-base font-semibold text-[#111827] mb-2">
                {item.title}
              </h3>
              <p className="text-[#4B5563] text-xs sm:text-sm mb-3">{item.desc}</p>
              <Link
                to={item.link}
                className="text-[#FF9999] hover:underline focus:ring-2 focus:ring-[#FF9999] focus:outline-none"
              >
                Learn More
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Welcome Section */}
      <section className="bg-[#E5E7EB] py-10 sm:py-12">
        <div className="container mx-auto px-4 sm:px-6 text-center" data-aos="fade-up">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#111827] mb-6 relative inline-block">
            About St. Mariya Public School
            <span className="absolute bottom-[-8px] left-1/2 transform -translate-x-1/2 w-16 h-1 bg-[#FF9999] rounded"></span>
          </h2>
          <p className="text-sm sm:text-base text-[#4B5563] max-w-xl sm:max-w-2xl mx-auto mb-6 leading-relaxed">
            St. Mariya Public School, a CBSE-affiliated institution, is dedicated to academic excellence, discipline, and holistic development. Our comprehensive curriculum for Pre-Primary to Class 12, robust counselling, and modern infrastructure empower students to thrive.
          </p>
          <Link
            to="/about-school"
            className="bg-[#FF9999] text-[#111827] px-5 py-2 sm:px-6 sm:py-3 rounded-full hover:bg-[#FF8585] hover:scale-105 hover:shadow-[0_8px_20px_rgba(255,133,133,0.4)] transition-all duration-300 font-semibold focus:ring-2 focus:ring-[#FF8585] focus:outline-none"
          >
            Read More
          </Link>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="container mx-auto px-4 sm:px-6 py-10 sm:py-12 bg-white">
        <h2
          className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#111827] text-center mb-8 sm:mb-10 relative inline-block"
          data-aos="fade-up"
        >
          Why Choose St. Mariya?
          <span className="absolute bottom-[-8px] left-1/2 transform -translate-x-1/2 w-16 h-1 bg-[#FF9999] rounded"></span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {[
            {
              title: 'CBSE Academic Excellence',
              desc: 'Comprehensive curriculum for Pre-Primary to Class 12, preparing students for diverse career paths.',
              image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
            },
            {
              title: 'Holistic Support',
              desc: 'Counselling and behavioural policies foster emotional and social growth.',
              image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
            },
            {
              title: 'Disciplined Environment',
              desc: 'Clear guidelines promote respect, responsibility, and self-discipline.',
              image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
            },
          ].map((item, index) => (
            <div
              key={`why-choose-${index}`}
              className="bg-[#F9FAFB] rounded-xl shadow-md overflow-hidden flex flex-col transform transition duration-300 hover:scale-105"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-36 sm:h-40 object-cover"
                loading="lazy"
              />
              <div className="p-4 sm:p-5 flex flex-col flex-grow">
                <h3 className="text-base sm:text-lg font-semibold text-[#111827] mb-2">
                  {item.title}
                </h3>
                <p className="text-[#4B5563] text-xs sm:text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="container mx-auto px-4 sm:px-6 py-10 sm:py-12 bg-[#F9FAFB]">
        <h2
          className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#111827] text-center mb-8 sm:mb-10 relative inline-block"
          data-aos="fade-up"
        >
          Upcoming Events
          <span className="absolute bottom-[-8px] left-1/2 transform -translate-x-1/2 w-16 h-1 bg-[#FF9999] rounded"></span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {[
            {
              title: 'Annual Academic Showcase',
              date: 'To be announced',
              desc: 'Celebrating student achievements across all subjects.',
              image: 'https://media.istockphoto.com/id/1901752595/photo/secondary-or-high-school-students-studying-wind-turbines-in-science-class-with-teacher.webp?a=1&b=1&s=612x612&w=0&k=20&c=kMIpdl_C5GfTM14tCM9p9VTonE054NeTF-OziRp1K-0=',
            },
            {
              title: 'Cultural Fest',
              date: 'To be announced',
              desc: 'Celebrating diversity through music, dance, and art.',
              image: Img4,
            },
            {
              title: 'Sports Carnival',
              date: 'To be announced',
              desc: 'Encouraging teamwork and fitness through exciting competitions.',
              image: Img8,
            },
          ].map((event, index) => (
            <div
              key={`event-${index}`}
              className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col transform transition duration-300 hover:scale-105"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-36 sm:h-40 object-cover"
                loading="lazy"
              />
              <div className="p-4 sm:p-5 flex flex-col flex-grow">
                <h3 className="text-base sm:text-lg font-semibold text-[#111827] mb-1">
                  {event.title}
                </h3>
                <p className="text-[#4B5563] text-xs sm:text-sm mb-1">{event.date}</p>
                <p className="text-[#4B5563] text-xs sm:text-sm">{event.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-6 sm:mt-8">
          <Link
            to="#"
            className="text-[#FF9999] hover:underline focus:ring-2 focus:ring-[#FF9999] focus:outline-none"
          >
            View All Events
          </Link>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gradient-to-r from-[#1E3A8A] to-[#3B82F6] text-white py-10 sm:py-12">
        <div className="container mx-auto px-4 sm:px-6 text-center" data-aos="fade-up">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-8 relative inline-block">
            Voices of Our Community
            <span className="absolute bottom-[-8px] left-1/2 transform -translate-x-1/2 w-16 h-1 bg-[#FF9999] rounded"></span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[
              {
                quote: 'The CBSE curriculum nurtured my child’s academic and personal growth.',
                author: 'Parent',
              },
              {
                quote: 'Counselling support helped me manage stress and excel.',
                author: 'Student',
              },
              {
                quote: 'A disciplined environment that fosters growth.',
                author: 'Alumnus',
              },
            ].map((testimonial, index) => (
              <div
                key={`testimonial-${index}`}
                className="bg-white/10 backdrop-blur-sm p-4 sm:p-5 rounded-xl shadow-lg hover:shadow-[0_8px_20px_rgba(0,0,0,0.2)] transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <p className="text-white text-xs sm:text-sm mb-3">"{testimonial.quote}"</p>
                <p className="font-semibold text-[#FF9999]">{testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section
        className="py-10 sm:py-12 px-4 sm:px-6 bg-gradient-to-r from-[#1E3A8A] to-[#3B82F6] text-center"
        data-aos="fade-up"
      >
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#FFFFFF] mb-6 relative inline-block">
            Ready to Join St. Mariya Public School?
            <span className="absolute bottom-[-8px] left-1/2 transform -translate-x-1/2 w-16 h-1 bg-[#FF9999] rounded"></span>
          </h2>
          <p className="text-sm sm:text-base text-[#D1D5DB] mb-6">
            Enroll today to experience a CBSE education for Pre-Primary to Class 12 that fosters holistic growth, discipline, and leadership.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/admissions"
              className="bg-[#FF9999] text-[#111827] px-5 py-2 sm:px-6 sm:py-3 rounded-full hover:bg-[#FF8585] hover:scale-105 hover:shadow-[0_8px_20px_rgba(255,133,133,0.4)] transition-all duration-300 font-semibold focus:ring-2 focus:ring-[#FF8585] focus:outline-none"
            >
              Apply Now
            </Link>
            <Link
              to="/contact"
              className="bg-transparent border-2 border-[#FF9999] text-[#FFFFFF] px-5 py-2 sm:px-6 sm:py-3 rounded-full hover:bg-[#FF9999] hover:text-[#111827] hover:scale-105 transition-all duration-300 font-semibold focus:ring-2 focus:ring-[#FF8585] focus:outline-none"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;