import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import Img7 from '../Images/Img7.jpg'; // Importing the image for the principal

const Principal = () => {
  // Initialize AOS for animations
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="bg-[#F9FAFB] font-['Poppins']">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[50vh] flex items-center justify-center text-white"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80)`,
        }}
        data-aos="fade-in"
      >
        <div className="absolute inset-0 bg-[#1E3A8A]/70"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Principal's Message
          </h1>
          <p className="text-xl md:text-2xl font-light">
            Guiding Students to Realize Their Dreams
          </p>
        </div>
      </section>

      {/* Principal's Message Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div
            className="flex flex-col md:flex-row items-center gap-8"
            data-aos="fade-up"
          >
            {/* Principal Image */}
            <div className="md:w-1/3">
              <img
                src={Img7}
                alt="V.C. Awasthi, Director-Principal"
                className="rounded-lg shadow-md w-full h-auto object-cover"
              />
            </div>
            {/* Message Content */}
            <div className="md:w-2/3 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-semibold text-[#111827] mb-6">
                Message from the Director-Principal
              </h2>
              <p className="text-lg text-[#4B5563] leading-relaxed mb-4">
                A student symbolizes the dreams of contemporary society. The role
                of the school is to nurture the student so they realize those
                dreams and enact them in a powerful, proactive role on the
                celluloid of life. Let us teach them the value of adventure in
                life, so they appreciate the morning lark and their spirits soar
                high to touch the blue welkin of life. Let us develop in them a
                sparkling sense of humour, so they may take the sunny days and
                rainy days of life in the same stride. Let us teach them to laugh
                at themselves and not at others.
              </p>
              <p className="text-lg text-[#4B5563] leading-relaxed mb-4">
                Our endeavour at St. Mariya Public School is to inculcate life
                skills in our students. Life skills mean developing the moral,
                ethical, mental, aesthetical, and spiritual facets of their
                personality. It is our objective not only to guide students in
                academics but also to imbue in them adequate leadership qualities
                and discipline, such that they excel in every field they select in
                life and come to be realized as pillars of strength to their
                families, society, and country, winning laurels for all.
              </p>
              <p className="text-lg font-semibold text-[#111827]">
                V.C. Awasthi <br />
                Director-Principal
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section
        className="py-16 px-4 md:px-8 lg:px-16 bg-gradient-to-r from-[#1E3A8A] to-[#3B82F6] text-white text-center"
        data-aos="fade-up"
      >
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Join Our Journey
          </h2>
          <p className="text-lg mb-8">
            Be part of St. Mariya Public School, where we nurture dreams and shape
            futures. Enroll today!
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

export default Principal;