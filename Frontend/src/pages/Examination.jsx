import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Examination = () => {
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
            Examination Policy at St. Mariya Public School
          </h1>
          <p className="text-lg md:text-xl font-light max-w-2xl mx-auto">
            Structured assessments aligned with CBSE norms to ensure academic excellence and fairness.
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="container mx-auto px-4 py-16">
        <h2
          className="text-3xl md:text-4xl font-semibold text-[#111827] text-center mb-6 relative inline-block"
          data-aos="fade-up"
        >
          CBSE Examination Framework
          <span className="absolute bottom-[-8px] left-1/2 transform -translate-x-1/2 w-16 h-1 bg-[#FF9999] rounded"></span>
        </h2>
        <p
          className="text-lg text-[#374151] max-w-3xl mx-auto text-center mb-12"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          St. Mariya Public School follows the Central Board of Secondary Education (CBSE) examination policies, ensuring transparent, competency-based assessments that foster holistic development across Classes 1 to 12, in line with the National Education Policy (NEP) 2020.
        </p>

        {/* Examination Policies by Stage */}
        <div className="space-y-8">
          {[
            {
              stage: 'Primary Stage (Classes 1–5)',
              details: [
                'Continuous and Comprehensive Evaluation (CCE) with formative assessments (projects, quizzes, activities) and summative assessments (term-end exams).',
                'No formal board exams; internal assessments focus on conceptual understanding and skill development.',
                'Weightage: 60% formative, 40% summative per term.',
                'Minimum 75% attendance required, with condonation up to 15% for valid reasons.',
              ],
            },
            {
              stage: 'Secondary Stage (Classes 6–8)',
              details: [
                'Internal assessments include periodic tests (10 marks), notebook submission (5 marks), subject enrichment activities (5 marks), and annual exams (80 marks).',
                'Annual exams cover the full syllabus for Classes 6–8.',
                'Minimum 33% marks required in each subject (theory and internal assessments combined).',
                'Minimum 75% attendance mandatory, with condonation provisions.',
              ],
            },
            {
              stage: 'Secondary Stage (Classes 9–10)',
              details: [
                'Class 9: Internal annual exams with 80 marks (theory) and 20 marks (internal assessments, including periodic tests, projects, and practicals).',
                'Class 10: CBSE Board Exam (2025–26) with 80 marks (theory) and 20 marks (internal assessments). From 2026, two board exams (February–March and May) with the best score considered.',
                'Minimum 33% marks required in each subject (theory and internal separately) and 33% aggregate.',
                '75% attendance mandatory; special exams for sports/Olympiad participants (April 7–11, 2025).',
              ],
            },
            {
              stage: 'Senior Secondary Stage (Classes 11–12, Science Stream Only)',
              details: [
                'Class 11: Annual exams with 70 marks (theory) and 30 marks (practicals for Physics, Chemistry, Biology).',
                'Class 12: CBSE Board Exam with 70 marks (theory) and 30 marks (practicals for Science subjects); English Core has no practicals.',
                'Minimum 33% marks in each subject (theory and practicals separately) and 33% aggregate.',
                '75% attendance required; special provisions for sports/Olympiad participants.',
              ],
            },
          ].map((item, index) => (
            <div
              key={`policy-${index}`}
              className="bg-white p-6 rounded-lg shadow-md"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <h3 className="text-xl font-semibold text-[#111827] mb-2">
                {item.stage}
              </h3>
              <ul className="text-[#374151] list-disc list-inside space-y-2">
                {item.details.map((detail, idx) => (
                  <li key={`detail-${idx}`}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Guidelines Section */}
      <section className="bg-[#E5E7EB] py-16">
        <div className="container mx-auto px-4">
          <h2
            className="text-3xl md:text-4xl font-semibold text-[#111827] text-center mb-12"
            data-aos="fade-up"
          >
            Examination Guidelines
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Permitted Items',
                desc: 'Admit card, school ID, transparent stationery pouch, geometry box, analog watch, water bottle.',
              },
              {
                title: 'Prohibited Items',
                desc: 'Mobile phones, smartwatches, calculators (except approved cases), textual materials, food items (unless medically required).',
              },
              {
                title: 'CCTV Monitoring',
                desc: 'All exam halls are equipped with CCTV cameras to ensure transparency and prevent malpractice.',
              },
              {
                title: 'Misconduct Penalties',
                desc: 'Using electronic devices or spreading misinformation may lead to exam cancellation for the current and next year.',
              },
            ].map((guideline, index) => (
              <div
                key={`guideline-${index}`}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-[0_6px_16px_rgba(0,0,0,0.1)] hover:scale-105 transition-all duration-300 text-center"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <h3 className="text-lg font-semibold text-[#111827] mb-2">
                  {guideline.title}
                </h3>
                <p className="text-[#374151]">{guideline.desc}</p>
              </div>
            ))}
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
            Enroll at St. Mariya Public School
            <span className="absolute bottom-[-8px] left-1/2 transform -translate-x-1/2 w-16 h-1 bg-[#FF9999] rounded"></span>
          </h2>
          <p className="text-lg text-[#D1D5DB] mb-8">
            Join our community to benefit from a robust CBSE examination system designed for success.
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

export default Examination;