import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Promotion = () => {
  useEffect(() => {
    try {
      AOS.init({ duration: 1000, once: true });
    } catch (error) {
      console.warn('AOS initialization failed:', error);
    }
    return () => AOS.refresh();
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
            Promotion Policy at St. Mariya Public School
          </h1>
          <p className="text-lg md:text-xl font-light max-w-2xl mx-auto">
            Aligned with CBSE norms, our promotion policy ensures fair and holistic student evaluation.
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="container mx-auto px-4 py-16">
        <h2
          className="text-3xl md:text-4xl font-semibold text-[#111827] text-center mb-6 relative inline-block"
          data-aos="fade-up"
        >
          CBSE Promotion Guidelines
          <span className="absolute bottom-[-8px] left-1/2 transform -translate-x-1/2 w-16 h-1 bg-[#FF9999] rounded"></span>
        </h2>
        <p
          className="text-lg text-[#374151] max-w-3xl mx-auto text-center mb-12"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          St. Mariya Public School adheres to the Central Board of Secondary Education (CBSE) promotion policies, ensuring transparent and comprehensive assessments that support student growth across all classes.
        </p>

        {/* Promotion Policies by Stage */}
        <div className="space-y-8">
          {[
            {
              stage: 'Primary Stage (Classes 1–5)',
              details: [
                'Promotion is based on continuous and comprehensive evaluation (CCE) through formative and summative assessments.',
                'Students must achieve a minimum grade equivalent to 33% in each subject.',
                'Emphasis on holistic development, including co-curricular activities like art, music, and physical education.',
                'No detention policy applies, ensuring progression with additional support if needed.',
              ],
            },
            {
              stage: 'Secondary Stage (Classes 6–8)',
              details: [
                'Promotion requires a minimum of 33% marks in each subject (theory and internal assessments combined).',
                'Assessments include periodic tests, notebook submission, subject enrichment activities, and annual exams.',
                'Students failing in one or two subjects may be eligible for a compartment exam.',
                'Regular attendance (minimum 75%) is mandatory for promotion.',
              ],
            },
            {
              stage: 'Secondary Stage (Classes 9–10)',
              details: [
                'Students must secure 33% marks in each subject (theory and internal assessments separately) in the annual/board exam.',
                'For Class 10, the CBSE Board Exam requires 33% aggregate marks, including internal assessments (20 marks) and theory (80 marks).',
                'Compartment exams are available for students failing in one or two subjects.',
                'Minimum 75% attendance is required to appear for exams.',
                'Additional subjects (e.g., Artificial Intelligence) require separate passing criteria.',
              ],
            },
            {
              stage: 'Senior Secondary Stage (Classes 11–12)',
              details: [
                'Promotion in Class 11 requires 33% marks in each subject (theory and practicals separately) and 33% aggregate.',
                'Class 12 students must pass the CBSE Board Exam with 33% in each subject, including practicals (where applicable).',
                'Students failing in one subject in Class 12 may appear for a compartment exam.',
                'Mandatory 75% attendance is required for board exam eligibility.',
                'For Science stream subjects (e.g., Physics, Chemistry), practical exams carry 30 marks, and theory carries 70 marks.',
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

      {/* Additional Provisions Section */}
      <section className="bg-[#E5E7EB] py-16">
        <div className="container mx-auto px-4">
          <h2
            className="text-3xl md:text-4xl font-semibold text-[#111827] text-center mb-12"
            data-aos="fade-up"
          >
            Additional Provisions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Compartment Exams',
                desc: 'Students failing in one or two subjects in Classes 9–12 may appear for compartment exams to secure promotion or board certification.',
              },
              {
                title: 'Improvement Exams',
                desc: 'Class 12 students can opt for improvement exams in one or more subjects to enhance their scores for higher education.',
              },
              {
                title: 'Remedial Support',
                desc: 'The school provides extra classes and counseling for students needing academic support to meet promotion criteria.',
              },
              {
                title: 'Attendance Policy',
                desc: 'A minimum of 75% attendance is mandatory. Shortages may be condoned up to 15% for medical or valid reasons, as per CBSE norms.',
              },
            ].map((provision, index) => (
              <div
                key={`provision-${index}`}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-[0_6px_16px_rgba(0,0,0,0.1)] hover:scale-105 transition-all duration-300 text-center"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <h3 className="text-lg font-semibold text-[#111827] mb-2">
                  {provision.title}
                </h3>
                <p className="text-[#374151]">{provision.desc}</p>
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
            Join our community to benefit from a structured CBSE curriculum and supportive promotion policies.
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

export default Promotion;