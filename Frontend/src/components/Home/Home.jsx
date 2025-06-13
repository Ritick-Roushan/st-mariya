import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; 
import Img1 from '../../Images/img1.jpg';
import Img2 from '../../Images/img2.jpg';
import Img3 from '../../Images/img3.jpg';
import Img4 from '../../Images/img4.jpg';
import Img5 from '../../Images/img5.jpg';


const Home = () => {
  const images = [Img1, Img2, Img3, Img4, Img5];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(prev => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="bg-[#F9FAFB] font-['Poppins']">

      {/* Hero Section */}
      <section className="relative h-[500px] bg-[#1E3A8A]">
        <img
          src={images[currentImage]}
          alt="St. Mary Public School"
          className="w-full h-[500px] object-cover opacity-60 animate-slide-in"
          style={{ aspectRatio: '16/10' }}
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-semibold text-white drop-shadow-lg mb-4 animate-slide-in">
            Welcome to St. Mary Public School
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-6 max-w-md animate-slide-in">
            Nurturing excellence through quality education and holistic development.
          </p>
          <a
            href="/apply"
            className="bg-[#FF9999] text-[#111827] px-6 py-3 rounded-full hover:bg-[#FF8585] hover:scale-105 hover:shadow-[0_4px_12px_rgba(255,153,153,0.3)] transition-all duration-300 font-semibold focus:ring-2 focus:ring-[#FF8585] focus:outline-none animate-slide-in"
          >
            Apply Now
          </a>
        </div>
        <div className="absolute bottom-4 flex justify-center space-x-2">
          {images.map((_, index) => (
            <button
              key={`carousel-${index}`}
              className={`w-3 h-3 rounded-full ${index === currentImage ? 'bg-[#FF9999]' : 'bg-gray-200'}`}
              onClick={() => setCurrentImage(index)}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Quick Links */}
      <section className="container mx-auto px-4 py-8">
        <h2 className="text-3xl md:text-4xl font-semibold text-[#111827] text-center mb-6 animate-slide-in">
          Discover St. Mary Public School
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { title: 'Admissions', desc: 'Join our vibrant community.', link: '/admissions' },
            { title: 'Academics', desc: 'Explore our curriculum.', link: '/curriculum' },
            { title: 'Events', desc: 'Stay updated with our activities.', link: '/events' },
            { title: 'Mandatory Disclosure', desc: 'View CBSE compliance details.', link: '/mandatory-disclosure' },
          ].map((item, index) => (
            <div
              key={`quick-link-${index}`}
              className="bg-[#F9FAFB] p-6 rounded-md shadow-[inset_0_2px_4px_rgba(0,0,0,0.05)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.1)] hover:scale-105 transition-all duration-300 text-center animate-slide-in"
            >
              <h3 className="text-lg font-semibold text-[#111827] mb-2">{item.title}</h3>
              <p className="text-gray-600 mb-4">{item.desc}</p>
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
      <section className="bg-[#E5E7EB] py-8">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#111827] mb-4 animate-slide-in">
            About Our School
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-6">
            St. Mary Public School is dedicated to fostering academic excellence and personal growth. Our state-of-the-art facilities and experienced faculty create an environment where students thrive.
          </p>
          <a
            href="/about"
            className="bg-[#FF9999] text-[#111827] px-5 py-2 rounded-full hover:bg-[#FF8585] hover:shadow-[0_4px_12px_rgba(255,153,153,0.3)] transition-all duration-300 font-semibold focus:ring-2 focus:ring-[#FF8585] focus:outline-none animate-slide-in"
          >
            Read More
          </a>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="container mx-auto px-4 py-8 bg-[#F9FAFB]">
        <h2 className="text-3xl md:text-4xl font-semibold text-[#111827] text-center mb-6 animate-slide-in">
          Upcoming Events
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { title: 'Annual Day', date: '20th Dec 2025', desc: 'A celebration of talent and achievements.' },
            { title: 'Science Festival', date: '15th Jan 2026', desc: 'Showcasing innovative student projects.' },
          ].map((event, index) => (
            <div
              key={`event-${index}`}
              className="bg-[#F9FAFB] p-5 rounded-md shadow-[inset_0_2px_4px_rgba(0,0,0,0.05)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.1)] hover:scale-105 transition-all duration-300 animate-slide-in"
            >
              <h3 className="text-lg font-semibold text-[#111827] mb-1">{event.title}</h3>
              <p className="text-gray-600 mb-1">{event.date}</p>
              <p className="text-gray-600">{event.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gradient-to-r from-[#1E3A8A] to-[#3B82F6] text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 animate-slide-in">
            What Our Community Says
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { quote: 'The best decision for our child’s education.', author: 'Parent' },
              { quote: 'A nurturing environment for growth.', author: 'Student' },
            ].map((testimonial, index) => (
              <div
                key={`testimonial-${index}`}
                className="bg-[#3B82F6]/20 p-4 rounded-md shadow-lg hover:shadow-[0_8px_20px_rgba(0,0,0,0.2)] transition-all duration-300 animate-slide-in"
              >
                <p className="mb-2 text-gray-100">"{testimonial.quote}"</p>
                <p className="font-semibold">{testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;