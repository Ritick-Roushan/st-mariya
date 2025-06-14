import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Counsellor = () => {
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
            Counselling at St. Mariya Public School
          </h1>
          <p className="text-lg md:text-xl font-light max-w-2xl mx-auto">
            Empowering students through comprehensive support for academic, emotional, and social growth.
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="container mx-auto px-4 py-16">
        <h2
          className="text-3xl md:text-4xl font-semibold text-[#111827] text-center mb-6 relative inline-block"
          data-aos="fade-up"
        >
          Our Counselling Department
          <span className="absolute bottom-[-8px] left-1/2 transform -translate-x-1/2 w-16 h-1 bg-[#FF9999] rounded"></span>
        </h2>
        <p
          className="text-lg text-[#374151] max-w-3xl mx-auto text-center mb-12"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          The Counselling Department at St. Mariya Public School fosters a supportive, inclusive community, aligned with CBSE guidelines. We empower students to overcome challenges, advocate for themselves, and thrive academically and socially.
        </p>

        {/* Counselling Services */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-6">
          {[
            {
              title: 'Student Support',
              desc: 'Provides individual counselling to address academic struggles, stress, or family issues, facilitating teacher-student relationships and helping students return to their maturational stream.',
              icon: 'M12 14l9-5-9-5-9 5 9 5z',
            },
            {
              title: 'Consultation',
              desc: 'Collaborates with teachers, parents, and administrators to address learning differences, promote multiple intelligences, and turn students into self-advocating collaborators.',
              icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
            },
            {
              title: 'Group Programs',
              desc: 'Runs weekly support groups for self-esteem, assertiveness, conflict resolution, peer pressure, drug awareness, and diversity, tailored to students with special needs.',
              icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
            },
          ].map((service, index) => (
            <div
              key={`service-${index}`}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-[0_6px_16px_rgba(0,0,0,0.1)] hover:scale-105 transition-all duration-300 text-center"
              data-aos="fade-up"
              data-aos-delay={index * 100 + 200}
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
                  d={service.icon}
                />
              </svg>
              <h3 className="text-xl font-semibold text-[#111827] mb-2">
                {service.title}
              </h3>
              <p className="text-[#374151] leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Core Values Section */}
      <section className="bg-[#E5E7EB] py-16">
        <div className="container mx-auto px-4">
          <h2
            className="text-3xl md:text-4xl font-semibold text-[#111827] text-center mb-12"
            data-aos="fade-up"
          >
            Our Counselling Philosophy
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-6">
            {[
              {
                title: 'Inclusivity',
                desc: 'We provide confidential, flexible support to students, faculty, staff, and administration, fostering collaboration and peaceful conflict resolution as advocates, not disciplinarians.',
              },
              {
                title: 'Empowerment',
                desc: 'We model self-respect and responsibility, offering a robust referral system and values education to help students take control of their academic and social progress.',
              },
              {
                title: 'Leadership',
                desc: 'We encourage students to attend leadership conferences, learn refusal and decision-making skills, and take risks to build self-esteem and self-advocacy.',
              },
              {
                title: 'Service',
                desc: 'We promote responsible, caring individuals by fostering empathy, social and cultural diversity, and understanding of others’ needs.',
              },
            ].map((value, index) => (
              <div
                key={`value-${index}`}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-[0_6px_16px_rgba(0,0,0,0.1)] hover:scale-105 transition-all duration-300 text-center"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <h3 className="text-lg font-semibold text-[#111827] mb-2">
                  {value.title}
                </h3>
                <p className="text-[#374151]">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Plans and Priorities Section */}
      <section className="container mx-auto px-4 py-16">
        <h2
          className="text-3xl md:text-4xl font-semibold text-[#111827] text-center mb-12"
          data-aos="fade-up"
        >
          Plans and Priorities
        </h2>
        <div
          className="bg-white p-6 rounded-lg shadow-md max-w-3xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <ul className="text-[#374151] list-disc list-inside space-y-2">
            <li>
              Increase academy-wide awareness of student issues through counsellor consultation and collaboration.
            </li>
            <li>
              Enhance faculty training to help new teachers understand how student education plans interrelate with counselling treatment plans.
            </li>
            <li>
              Expand support groups and leadership opportunities to engage less assertive students.
            </li>
            <li>
              Strengthen referral systems for students with special needs, ensuring seamless support.
            </li>
          </ul>
        </div>
      </section>

      {/* Call to Action Section */}
      <section
        className="py-16 px-4 bg-gradient-to-r from-[#1E3A8A] to-[#3B82F6] text-center"
        data-aos="fade-up"
      >
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#FFFFFF] mb-6 relative inline-block">
            Connect with Our Counselling Department
            <span className="absolute bottom-[-8px] left-1/2 transform -translate-x-1/2 w-16 h-1 bg-[#FF9999] rounded"></span>
          </h2>
          <p className="text-lg text-[#D1D5DB] mb-8">
            Reach out to our team to support your child’s academic, emotional, and social journey.
          </p>
          <Link
            to="/contact"
            className="bg-[#FF9999] text-[#111827] px-8 py-3 rounded-full hover:bg-[#FF8585] hover:scale-105 hover:shadow-[0_8px_20px_rgba(255,133,133,0.4)] transition-all duration-300 font-semibold focus:ring-2 focus:ring-[#FF8585] focus:outline-none"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Counsellor;