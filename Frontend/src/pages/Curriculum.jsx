import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Curriculum = () => {
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
            CBSE Curriculum at St. Mariya Public School
          </h1>
          <p className="text-lg md:text-xl font-light max-w-2xl mx-auto">
            Nurturing academic excellence and life skills through a holistic CBSE curriculum for Pre-Primary to Class 12.
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="container mx-auto px-4 py-16">
        <h2
          className="text-3xl md:text-4xl font-semibold text-[#111827] text-center mb-6 relative inline-block"
          data-aos="fade-up"
        >
          Our Academic Framework
          <span className="absolute bottom-[-8px] left-1/2 transform -translate-x-1/2 w-16 h-1 bg-[#FF9999] rounded"></span>
        </h2>
        <p
          className="text-lg text-[#374151] max-w-3xl mx-auto text-center mb-12"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          St. Mariya Public School follows the Central Board of Secondary Education (CBSE) curriculum, designed to foster critical thinking, innovation, and holistic development from Pre-Primary to Class 12, in alignment with the National Education Policy (NEP) 2020.
        </p>

        {/* Curriculum Stages */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-6">
          {[
            {
              stage: 'Pre-Primary Stage (PG–UKG)',
              desc: 'Focuses on play-based learning, developing motor skills, language, and social skills through activities like storytelling, rhymes, and creative play.',
              icon: 'M12 14l9-5-9-5-9 5 9 5z',
            },
            {
              stage: 'Primary Stage (Classes 1–5)',
              desc: 'Builds foundational skills in English, Mathematics, Environmental Studies, and Languages, with a focus on creativity, moral values, and interactive learning.',
              icon: 'M12 14l9-5-9-5-9 5 9 5z',
            },
            {
              stage: 'Secondary Stage (Classes 6–10)',
              desc: 'Covers Mathematics, Science, Social Studies, Languages, and skill subjects like Artificial Intelligence. Includes practicals and competency-based assessments for Class 10 board exams.',
              icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
            },
            {
              stage: 'Senior Secondary Stage (Classes 11–12)',
              desc: 'Offers the Science stream with subjects like Physics, Chemistry, Biology, and Mathematics, preparing students for CBSE board exams and competitive tests like NEET and JEE.',
              icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
            },
          ].map((item, index) => (
            <div
              key={`stage-${index}`}
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
                  d={item.icon}
                />
              </svg>
              <h3 className="text-xl font-semibold text-[#111827] mb-2">
                {item.stage}
              </h3>
              <p className="text-[#374151] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Key Features Section */}
      <section className="bg-[#E5E7EB] py-16">
        <div className="container mx-auto px-4">
          <h2
            className="text-3xl md:text-4xl font-semibold text-[#111827] text-center mb-12"
            data-aos="fade-up"
          >
            Key Features of Our CBSE Curriculum
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-6">
            {[
              {
                title: 'Holistic Development',
                desc: 'Combines academics, sports, arts, and life skills to nurture well-rounded individuals.',
              },
              {
                title: 'Competency-Based Learning',
                desc: 'Focuses on critical thinking, problem-solving, and real-world applications per NEP 2020.',
              },
              {
                title: 'Skill-Based Subjects',
                desc: 'Includes Artificial Intelligence, Coding, and Financial Literacy for future-ready education.',
              },
              {
                title: 'Comprehensive Assessments',
                desc: 'Blends formative, summative, and practical evaluations for balanced student growth.',
              },
            ].map((feature, index) => (
              <div
                key={`feature-${index}`}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-[0_6px_16px_rgba(0,0,0,0.1)] hover:scale-105 transition-all duration-300 text-center"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <h3 className="text-lg font-semibold text-[#111827] mb-2">
                  {feature.title}
                </h3>
                <p className="text-[#374151]">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subject Offerings Section */}
      <section className="container mx-auto px-4 py-16">
        <h2
          className="text-3xl md:text-4xl font-semibold text-[#111827] text-center mb-12"
          data-aos="fade-up"
        >
          Subject Offerings
        </h2>
        <div className="space-y-8">
          {[
            {
              stage: 'Pre-Primary (PG–UKG)',
              subjects: [
                'English (Oral & Written)',
                'Mathematics (Basic Concepts)',
                'Environmental Awareness',
                'Rhymes and Storytelling',
                'Art and Craft',
                'Physical Activities',
                'Music and Movement',
              ],
            },
            {
              stage: 'Primary (Classes 1–5)',
              subjects: [
                'English',
                'Hindi',
                'Mathematics',
                'Environmental Studies (EVS)',
                'General Knowledge',
                'Art',
                'Music',
                'Physical Education',
              ],
            },
            {
              stage: 'Secondary (Classes 6–10)',
              subjects: [
                'English',
                'Hindi/Sanskrit (Second Language)',
                'Mathematics',
                'Science',
                'Social Studies',
                'Artificial Intelligence (Skill Subject, Optional)',
                'Information Technology (Skill Subject)',
                'Physical Education',
                'Art Education',
              ],
            },
            {
              stage: 'Senior Secondary (Classes 11–12, Science Stream Only)',
              subjects: [
                {
                  stream: 'Science Stream',
                  subjects: [
                    'English Core (Mandatory)',
                    'Physics',
                    'Chemistry',
                    'Mathematics (Optional)',
                    'Biology (Optional)',
                    'Computer Science/Physical Education/Financial Literacy (Elective)',
                  ],
                },
              ],
            },
          ].map((item, index) => (
            <div
              key={`subject-${index}`}
              className="bg-white p-6 rounded-lg shadow-md"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <h3 className="text-xl font-semibold text-[#111827] mb-4">
                {item.stage}
              </h3>
              {item.subjects[0]?.stream ? (
                <div className="space-y-4">
                  {item.subjects.map((stream, idx) => (
                    <div key={`stream-${idx}`}>
                      <h4 className="text-lg font-medium text-[#374151] mb-1">
                        {stream.stream}
                      </h4>
                      <ul className="text-[#374151] list-disc list-inside">
                        {stream.subjects.map((subject, subIdx) => (
                          <li key={`stream-subject-${subIdx}`}>{subject}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              ) : (
                <ul className="text-[#374151] list-disc list-inside">
                  {item.subjects.map((subject, idx) => (
                    <li key={`subject-item-${idx}`}>{subject}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <section
        className="py-16 px-4 bg-gradient-to-r from-[#1E3A8A] to-[#3B82F6] text-center"
        data-aos="fade-up"
      >
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#FFFFFF] mb-6 relative inline-block">
            Join St. Mariya Public School Today
            <span className="absolute bottom-[-8px] left-1/2 transform -translate-x-1/2 w-16 h-1 bg-[#FF9999] rounded"></span>
          </h2>
          <p className="text-lg text-[#D1D5DB] mb-8">
            Enroll now to experience a CBSE curriculum that prepares students for academic success and beyond.
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

export default Curriculum;