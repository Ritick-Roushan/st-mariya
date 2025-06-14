import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Behavioural = () => {
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
            Behavioural Management at St. Mariya Public School
          </h1>
          <p className="text-lg md:text-xl font-light max-w-2xl mx-auto">
            Fostering a positive, disciplined environment through clear expectations and collaborative efforts.
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="container mx-auto px-4 py-16">
        <h2
          className="text-3xl md:text-4xl font-semibold text-[#111827] text-center mb-6 relative inline-block"
          data-aos="fade-up"
        >
          Our Behavioural Policy
          <span className="absolute bottom-[-8px] left-1/2 transform -translate-x-1/2 w-16 h-1 bg-[#FF9999] rounded"></span>
        </h2>
        <p
          className="text-lg text-[#374151] max-w-3xl mx-auto text-center mb-12"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          St. Mariya Public School is committed to creating a positive school environment where students, teachers, and parents work together to promote self-discipline, respect, and responsibility, in alignment with CBSE guidelines.
        </p>
      </section>

      {/* Behavioural Management Strategies Section */}
      <section className="bg-[#E5E7EB] py-16">
        <div className="container mx-auto px-4">
          <h2
            className="text-3xl md:text-4xl font-semibold text-[#111827] text-center mb-12"
            data-aos="fade-up"
          >
            Behavioural Management Strategies
          </h2>
          <div className="space-y-8">
            {[
              {
                concern: 'Coming Late to School',
                actions: [
                  'Verbal Warning',
                  'Parents to be informed',
                  'Parents to be called and the student to be sent home',
                ],
              },
              {
                concern: 'Bunking Classes & Movement in Corridors',
                actions: [
                  'Warning and extra assignments in respective subjects',
                  'Parents to be informed and extra assignments to be given',
                  'Memo',
                  'Suspension',
                ],
              },
              {
                concern: 'Bullying, Aggressive Behaviour & Abusive Language',
                actions: [
                  'Written apology to go into the student’s record; one copy retained by the class teacher',
                  'Parents to be informed',
                  'Suspension',
                ],
              },
              {
                concern: 'School Uniform',
                actions: [
                  'Verbal warning (twice)',
                  'Parents to be informed',
                  'Student to be sent home with parents',
                ],
              },
              {
                concern: 'Hair Cut',
                actions: ['Verbal warning (twice)', 'To be sent home'],
              },
              {
                concern: 'Defaulter at Work',
                actions: [
                  'Verbal warning',
                  'Withdrawal of break/P.E. period',
                  'Detention until work is finished',
                  'Parents to be informed',
                  'Community service to be decided by school',
                  'Memo',
                ],
              },
              {
                concern: 'Breakage of School Property',
                actions: ['Fine as per the cost of damage and withdrawal of break/P.E. period'],
              },
              {
                concern: 'Noise in Class/Untidy Classrooms',
                actions: [
                  'Students to clean the classroom',
                  'Withdrawal of break/P.E. period',
                  'Community Service',
                ],
              },
            ].map((item, index) => (
              <div
                key={`concern-${index}`}
                className="bg-white p-6 rounded-lg shadow-md"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <h3 className="text-xl font-semibold text-[#111827] mb-2">
                  {item.concern}
                </h3>
                <ul className="text-[#374151] list-decimal list-inside space-y-1">
                  {item.actions.map((action, idx) => (
                    <li key={`action-${idx}`}>{action}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expectations Section */}
      <section className="container mx-auto px-4 py-16">
        <h2
          className="text-3xl md:text-4xl font-semibold text-[#111827] text-center mb-12"
          data-aos="fade-up"
        >
          Student Expectations
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-6">
          <div
            className="bg-white p-6 rounded-lg shadow-md"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <h3 className="text-lg font-semibold text-[#111827] mb-4">Students Must...</h3>
            <ul className="text-[#374151] list-disc list-inside space-y-2">
              {[
                'Be regular and punctual to school every day.',
                'Report to school in proper uniform with well-polished shoes.',
                'Carry notebooks and assignments as per the timetable.',
                'Help others and respect teachers through courteous language and conduct.',
                'Use decent language and communicate in English with teachers and peers.',
                'Fall in line when moving out of class.',
                'Switch off lights, fans, and taps when not in use.',
                'Maintain school property and keep premises clean.',
                'Complete school work and assignments on time.',
                'Carry school almanac and wear RFID card daily.',
                'Return to class from P.E., Library, Labs, or outdoor periods on time.',
                'Keep pace with class work and be responsible for missed work due to absence.',
              ].map((rule, idx) => (
                <li key={`must-${idx}`}>{rule}</li>
              ))}
            </ul>
          </div>
          <div
            className="bg-white p-6 rounded-lg shadow-md"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h3 className="text-lg font-semibold text-[#111827] mb-4">Students Must Not...</h3>
            <ul className="text-[#374151] list-disc list-inside space-y-2">
              {[
                'Use indecent or abusive language.',
                'Bully others or damage school property.',
                'Play or run in the class or corridors.',
                'Be late in reporting to class or submitting work.',
                'Bunk classes or litter the class or school.',
                'Eat or drink during teaching periods.',
                'Bring mobiles, valuables, heavy cash, or accessories (e.g., coloured mufflers, goggles).',
                'Get involved in arguments or fights (verbal or physical).',
                'Use unfair means during examinations.',
              ].map((rule, idx) => (
                <li key={`must-not-${idx}`}>{rule}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Positive Reinforcement Section */}
      <section className="bg-[#E5E7EB] py-16">
        <div className="container mx-auto px-4">
          <h2
            className="text-3xl md:text-4xl font-semibold text-[#111827] text-center mb-12"
            data-aos="fade-up"
          >
            Positive Reinforcement
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-6">
            {[
              {
                title: 'Recognition Awards',
                desc: 'Students demonstrating exemplary behaviour, punctuality, or responsibility receive certificates and public acknowledgment.',
              },
              {
                title: 'Leadership Opportunities',
                desc: 'Well-disciplined students are nominated for leadership roles, such as class monitors or council members.',
              },
              {
                title: 'Counselling Support',
                desc: 'Our Counselling Department collaborates with students to reinforce positive behaviour and address challenges proactively.',
              },
            ].map((item, index) => (
              <div
                key={`reinforcement-${index}`}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-[0_6px_16px_rgba(0,0,0,0.1)] hover:scale-105 transition-all duration-300 text-center"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <h3 className="text-lg font-semibold text-[#111827] mb-2">
                  {item.title}
                </h3>
                <p className="text-[#374151]">{item.desc}</p>
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
            Join Our Positive School Community
            <span className="absolute bottom-[-8px] left-1/2 transform -translate-x-1/2 w-16 h-1 bg-[#FF9999] rounded"></span>
          </h2>
          <p className="text-lg text-[#D1D5DB] mb-8">
            Enroll today to be part of a disciplined, supportive environment that nurtures growth and responsibility.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/admissions"
              className="bg-[#FF9999] text-[#111827] px-8 py-3 rounded-full hover:bg-[#FF8585] hover:scale-105 hover:shadow-[0_8px_20px_rgba(255,133,133,0.4)] transition-all duration-300 font-semibold focus:ring-2 focus:ring-[#FF8585] focus:outline-none"
            >
              Apply Now
            </Link>
            <a
              href="/path/to/behavioural-policy.pdf"
              download
              className="bg-transparent border-2 border-[#FF9999] text-[#FFFFFF] px-8 py-3 rounded-full hover:bg-[#FF9999] hover:text-[#111827] hover:scale-105 transition-all duration-300 font-semibold focus:ring-2 focus:ring-[#FF8585] focus:outline-none"
            >
              Download Policy
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Behavioural;