import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Admission = () => {
  useEffect(() => {
    try {
      AOS.init({ duration: 1000, once: true });
    } catch (error) {
      console.warn('AOS initialization failed:', error);
    }
    return () => {
      try {
        AOS.refreshHard();
      } catch (error) {
        console.warn('AOS cleanup failed:', error);
      }
    };
  }, []);

  return (
    <div className="bg-[#F9FAFB] font-['Poppins']">
      {/* Hero Section */}
      <section
        className="relative h-[50vh] flex items-center justify-center text-white bg-gradient-to-r from-[#1E3A8A] to-[#3B82F6]"
        data-aos="fade-in"
      >
        <div className="absolute inset-0 bg-[#1E3A8A]/70"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
            Admissions at St. Mariya Public School
          </h1>
          <p className="text-lg md:text-xl font-light max-w-2xl mx-auto">
            Join our vibrant community dedicated to academic excellence and holistic development.
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="container mx-auto px-4 py-16">
        <h2
          className="text-3xl md:text-4xl font-semibold text-[#111827] text-center mb-6 relative inline-block"
          data-aos="fade-up"
        >
          Admission Process
          <span className="absolute bottom-[-8px] left-1/2 transform -translate-x-1/2 w-16 h-1 bg-[#FF9999] rounded"></span>
        </h2>
        <p
          className="text-lg text-[#374151] max-w-3xl mx-auto text-center mb-12"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          St. Mariya Public School welcomes applications for Classes 1 to 12, offering a CBSE curriculum with a focus on the Science stream for Classes 11–12. Our transparent admission process ensures fairness and accessibility.
        </p>
      </section>

      {/* Admission Steps Section */}
      <section className="bg-[#E5E7EB] py-16">
        <div className="container mx-auto px-4">
          <h2
            className="text-3xl md:text-4xl font-semibold text-[#111827] text-center mb-12"
            data-aos="fade-up"
          >
            Steps to Admission
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-6">
            {[
              {
                step: 'Step 1: Inquiry & Form Collection',
                desc: 'Visit the school office or website to collect the admission form. Contact our admission team for details or schedule a campus tour.',
                icon: 'M12 14l9-5-9-5-9 5 9 5z',
              },
              {
                step: 'Step 2: Submission & Assessment',
                desc: 'Submit the completed form with required documents. Students for Classes 6–12 may undergo an entrance test to assess academic readiness.',
                icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
              },
              {
                step: 'Step 3: Interview & Admission',
                desc: 'Shortlisted candidates attend an interview with parents. Upon selection, complete fee payment and document verification to secure admission.',
                icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
              },
            ].map((item, index) => (
              <div
                key={`step-${index}`}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-[0_6px_16px_rgba(0,0,0,0.1)] hover:scale-105 transition-all duration-300 text-center"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <svg
                  className="w-12 h-12 text-[#FF9999] mx-auto mb-4"
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
                <h3 className="text-xl font-semibold text-[#111827] mb-2">
                  {item.step}
                </h3>
                <p className="text-[#374151] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility & Documents Section */}
      <section className="container mx-auto px-4 py-16">
        <h2
          className="text-3xl md:text-4xl font-semibold text-[#111827] text-center mb-12"
          data-aos="fade-up"
        >
          Eligibility & Required Documents
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-6">
          <div
            className="bg-white p-6 rounded-lg shadow-md"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <h3 className="text-lg font-semibold text-[#111827] mb-4">
              Eligibility Criteria
            </h3>
            <ul className="text-[#374151] list-disc list-inside space-y-2">
              <li>
                <strong>Class 1:</strong> Minimum age of 5 years as of March 31, 2025.
              </li>
              <li>
                <strong>Classes 2–8:</strong> Previous class passed from a recognized school.
              </li>
              <li>
                <strong>Classes 9–10:</strong> Previous class passed with minimum 50% marks; entrance test required.
              </li>
              <li>
                <strong>Class 11 (Science Stream):</strong> Minimum 60% in Class 10 board exams; entrance test in Physics, Chemistry, and Mathematics.
              </li>
              <li>
                <strong>Class 12:</strong> Limited seats; based on Class 11 performance and school discretion.
              </li>
            </ul>
          </div>
          <div
            className="bg-white p-6 rounded-lg shadow-md"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h3 className="text-lg font-semibold text-[#111827] mb-4">
              Required Documents
            </h3>
            <ul className="text-[#374151] list-disc list-inside space-y-2">
              <li>Completed admission form.</li>
              <li>Birth certificate (for Class 1).</li>
              <li>Transfer certificate (TC) from previous school (Classes 2–12).</li>
              <li>Previous year’s mark sheet/report card.</li>
              <li>Passport-size photographs (3 copies).</li>
              <li>Aadhaar card copies of student and parents.</li>
              <li>Medical fitness certificate.</li>
              <li>Caste certificate (if applicable).</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Fee Structure & Contact Section */}
      <section className="bg-[#E5E7EB] py-16">
        <div className="container mx-auto px-4">
          <h2
            className="text-3xl md:text-4xl font-semibold text-[#111827] text-center mb-12"
            data-aos="fade-up"
          >
            Fee Structure & Admission Inquiries
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-6">
            <div
              className="bg-white p-6 rounded-lg shadow-md text-center"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <h3 className="text-lg font-semibold text-[#111827] mb-4">
                Fee Structure
              </h3>
              <p className="text-[#374151] mb-4">
                Our fee structure is designed to be transparent and affordable. For detailed information, download the fee schedule or contact our admission office.
              </p>
              <a
                href="/path/to/fee-structure-2025.pdf"
                download
                className="bg-[#FF9999] text-[#111827] px-6 py-2 rounded-full hover:bg-[#FF8585] hover:shadow-[0_8px_20px_rgba(255,133,133,0.4)] transition-all duration-300 font-semibold focus:ring-2 focus:ring-[#FF8585] focus:outline-none"
              >
                Download Fee Structure
              </a>
            </div>
            <div
              className="bg-white p-6 rounded-lg shadow-md text-center"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <h3 className="text-lg font-semibold text-[#111827] mb-4">
                Contact Admission Office
              </h3>
              <p className="text-[#374151] mb-4">
                Reach out to our team for inquiries, campus tours, or assistance with the admission process.
              </p>
              <p className="text-[#374151] mb-2">
                <strong>Email:</strong>{' '}
                <a
                  href="mailto:stmariyacbr@gmail.com"
                  className="text-[#FF9999] hover:underline"
                >
                  stmariyacbr@gmail.com
                </a>
              </p>
              <p className="text-[#374151] mb-2">
                <strong>Phone:</strong>{' '}
                <a href="tel:+919452426947" className="text-[#FF9999] hover:underline">
                  9452426947
                </a>
                ,{' '}
                <a href="tel:+917007061031" className="text-[#FF9999] hover:underline">
                  7007061031
                </a>
              </p>
              <p className="text-[#374151] mb-2">
                <strong>Main Branch:</strong>{' '}
                <a
                  href="https://maps.app.goo.gl/6ZaKDRE6989kDrk56"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#FF9999] hover:underline"
                >
                  Behind Gani Market, Chhibramau, Kannauj
                </a>
              </p>
              <p className="text-[#374151] mb-4">
                <strong>Extension Branch:</strong> Farrukhabad Road, Chhibramau, Kannauj
              </p>
              <Link
                to="/contact"
                className="bg-[#FF9999] text-[#111827] px-6 py-2 rounded-full hover:bg-[#FF8585] hover:shadow-[0_8px_20px_rgba(255,133,133,0.4)] transition-all duration-300 font-semibold focus:ring-2 focus:ring-[#FF8585] focus:outline-none"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section
        className="py-16 px-4 bg-gradient-to-r from-[#1E3A8A] to-[#3B82F6] text-center"
        data-aos="fade-up"
      >
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#FFFFFF] mb-6 relative inline-block">
            Start Your Journey with Us
            <span className="absolute bottom-[-8px] left-1/2 transform -translate-x-1/2 w-16 h-1 bg-[#FF9999] rounded"></span>
          </h2>
          <p className="text-lg text-[#D1D5DB] mb-8">
            Apply now to join St. Mariya Public School and experience a nurturing environment for academic and personal growth.
          </p>
          <Link
            to="/admissions"
            className="bg-[#FF9999] text-[#111827] px-8 py-3 rounded-full hover:bg-[#FF8585] hover:scale-105 hover:shadow-[0_8px_20px_rgba(255,133,133,0.4)] transition-all duration-300 font-semibold focus:ring-2 focus:ring-[#FF8585] focus:outline-none"
          >
            Apply Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Admission;