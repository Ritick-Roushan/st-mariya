import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

// Hero Image (Placeholder, replace with actual school-related image)
const heroImage = 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80';

const Mission = () => {
  // Initialize AOS for animations
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="bg-[#F9FAFB] font-['Poppins']">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[50vh] flex items-center justify-center text-white"
        style={{ backgroundImage: `url(${heroImage})` }}
        data-aos="fade-in"
      >
        <div className="absolute inset-0 bg-[#1E3A8A]/70"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our Mission
          </h1>
          <p className="text-xl md:text-2xl font-light">
            Empowering Students, Enriching Futures
          </p>
        </div>
      </section>

      {/* Mission Statement Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-white">
        <div className="container mx-auto max-w-5xl text-center" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#111827] mb-6">
            Our Mission Statement
          </h2>
          <p className="text-lg text-[#4B5563] leading-relaxed mb-8">
            At St. Mariya Public School, our mission is to create a transformative
            educational experience that nurtures capable, responsible, and compassionate
            individuals. We are committed to fostering excellence, cultural pride, and
            global awareness while equipping students to meet the challenges of tomorrow
            with confidence and resilience.
          </p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                text: 'Attaining and maintaining the highest standards of excellence.',
                icon: 'M5 13l4 4L19 7',
              },
              {
                text: 'Nurturing capable and responsible citizens for the future with love.',
                icon: 'M4 8h4V4m12 4h-4V4m-8 16v-4m-4 4h4m12-4h-4',
              },
              {
                text: 'Cultivating a commitment to Indian ethos and culture with passion.',
                icon: 'M12 3v18m9-9H3',
              },
              {
                text: 'Evoking sensitivity towards environmental concerns with care.',
                icon: 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
              },
              {
                text: 'Meeting contemporary challenges of education head-on.',
                icon: 'M9 12l2 2 4-4M7.835 4.697a3.5 3.5 0 001.948-.806 3.5 3.5 0 014.434 0 3.5 3.5 0 001.948.806 3.5 3.5 0 013.138 3.138 3.5 3.5 0 00.806 1.948 3.5 3.5 0 010 4.434 3.5 3.5 0 00-.806 1.948 3.5 3.5 0 01-3.138 3.138 3.5 3.5 0 00-1.948.806 3.5 3.5 0 01-4.434 0 3.5 3.5 0 00-1.948-.806 3.5 3.5 0 01-3.138-3.138 3.5 3.5 0 00-.806-1.948 3.5 3.5 0 010-4.434 3.5 3.5 0 00.806-1.948 3.5 3.5 0 013.138-3.138z',
              },
              {
                text: 'Encouraging lateral thinking and a truly global vision.',
                icon: 'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9',
              },
              {
                text: 'Promoting “Service before Self” through gracious and selfless acts.',
                icon: 'M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4H6zM3.8 6h16.4M16 10a4 4 0 11-8 0',
              },
              {
                text: 'Building resilience to stand strong amidst the winds of change.',
                icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
              },
            ].map((item, index) => (
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
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d={item.icon}
                  />
                </svg>
                <p className="text-[#4B5563] leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-[#F9FAFB]">
        <div className="container mx-auto max-w-5xl text-center" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#111827] mb-6">
            Why Choose St. Mariya Public School?
          </h2>
          <p className="text-lg text-[#4B5563] leading-relaxed mb-8">
            At St. Mariya Public School, we go beyond traditional education. Our mission
            drives us to create a nurturing environment where students are empowered to
            become leaders, innovators, and compassionate global citizens. Here’s why
            families choose us:
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                title: 'Holistic Development',
                description:
                  'We focus on nurturing the whole child—intellectually, emotionally, and socially—through personalized learning and extracurricular opportunities.',
              },
              {
                title: 'Cultural Pride',
                description:
                  'Our commitment to Indian ethos and culture fosters a deep sense of identity and pride, preparing students to contribute meaningfully to society.',
              },
              {
                title: 'Global Perspective',
                description:
                  'We encourage lateral thinking and global awareness, equipping students to thrive in an interconnected world.',
              },
              {
                title: 'Community Impact',
                description:
                  'Through service-oriented initiatives, we instill values of empathy and selflessness, inspiring students to make a positive difference.',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 text-left"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <h3 className="text-xl font-semibold text-[#111827] mb-2">
                  {item.title}
                </h3>
                <p className="text-[#4B5563] leading-relaxed">{item.description}</p>
              </div>
            ))}
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
            Be Part of Our Mission
          </h2>
          <p className="text-lg mb-8">
            Join St. Mariya Public School and embark on a journey of excellence,
            compassion, and global impact. Enroll today to shape a brighter future.
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

export default Mission;