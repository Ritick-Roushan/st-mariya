import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    // Placeholder for form submission
    try {
      // Example: await fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) });
      setTimeout(() => {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      }, 1000); // Simulated delay
    } catch (error) {
      setStatus('Failed to send message. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-[#F9FAFB] font-['Poppins']">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#1E3A8A] to-[#3B82F6] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Reach out to St. Mariya Public School for any inquiries. We're here to assist you!
          </p>
        </div>
      </section>

      {/* Contact Information and Form */}
      <section className="py-12">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-[#111827] mb-6">
              Get in Touch
            </h2>
            <div className="space-y-4">
              {/* Phone */}
              <div className="flex items-center">
                <svg
                  className="w-6 h-6 mr-3 text-[#FF9999]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <div>
                  <p className="text-[#111827] font-medium">Phone</p>
                  <a
                    href="tel:+919452426947"
                    className="text-[#FF9999] hover:underline"
                  >
                    9452426947
                  </a>
                  <span className="text-[#111827] mx-1">/</span>
                  <a
                    href="tel:+917007061031"
                    className="text-[#FF9999] hover:underline"
                  >
                    7007061031
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center">
                <svg
                  className="w-6 h-6 mr-3 text-[#FF9999]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <div>
                  <p className="text-[#111827] font-medium">Email</p>
                  <a
                    href="mailto:stmariyacbr@gmail.com"
                    className="text-[#FF9999] hover:underline"
                  >
                    stmariyacbr@gmail.com
                  </a>
                </div>
              </div>

              {/* Main Branch Address */}
              <div className="flex items-start">
                <svg
                  className="w-6 h-6 mr-3 text-[#FF9999]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <div>
                  <p className="text-[#111827] font-medium">Main Branch</p>
                  <p className="text-[#111827]">
                    Behind Gani Market, Chhibramau, Kannauj, Uttar Pradesh 209721
                  </p>
                  <p className="text-[#111827]">
                    Mob:{' '}
                    <a
                      href="tel:+919452426947"
                      className="text-[#FF9999] hover:underline"
                    >
                      9452426947
                    </a>
                  </p>
                </div>
              </div>

              {/* Extension Branch Address */}
              <div className="flex items-start">
                <svg
                  className="w-6 h-6 mr-3 text-[#FF9999]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <div>
                  <p className="text-[#111827] font-medium">Extension Branch</p>
                  <p className="text-[#111827]">
                    Farrukhabad Road, Chhibramau, Kannauj, Uttar Pradesh 209721
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-6 rounded-lg shadow-[0_4px_20px_rgba(0,0,0,0.1)]">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#111827] mb-6">
              Send Us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-[#111827]"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-1 w-full px-4 py-2 border border-[#E5E7EB] rounded-md focus:ring-2 focus:ring-[#FF9999] focus:outline-none"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-[#111827]"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 w-full px-4 py-2 border border-[#E5E7EB] rounded-md focus:ring-2 focus:ring-[#FF9999] focus:outline-none"
                  placeholder="Your Email"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-[#111827]"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="mt-1 w-full px-4 py-2 border border-[#E5E7EB] rounded-md focus:ring-2 focus:ring-[#FF9999] focus:outline-none"
                  placeholder="Your Message"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#FF9999] text-[#111827] px-6 py-3 rounded-full hover:bg-[#FF8585] hover:shadow-[0_4px_12px_rgba(255,153,153,0.3)] transition-all duration-300 font-semibold focus:ring-2 focus:ring-[#FF8585] focus:outline-none"
              >
                Send Message
              </button>
              {status && (
                <p
                  className={`mt-2 text-sm ${status.includes('successfully')
                      ? 'text-green-600'
                      : 'text-red-600'
                    }`}
                >
                  {status}
                </p>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-12 bg-[#F9FAFB]">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#111827] mb-6 text-center">
            Our Location
          </h2>
          <div className="text-center">
            <p className="text-[#111827] mb-4">
              Visit us at our Main Branch in Chhibramau, Kannauj, Uttar Pradesh 209721
            </p>
            <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.1)] mb-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.171714614227!2d79.4976830753895!3d27.15177497650244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399e3b7b1b7b7b7b%3A0x7b7b7b7b7b7b7b7b!2sSt.%20Mariya%20Public%20School!5e0!3m2!1sen!2sin!4v1698765432109!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="St. Mariya Public School Location"
              ></iframe>
            </div>
            <a
              href="https://maps.app.goo.gl/6ZaKDRE6989kDrk56"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-[#FF9999] text-[#111827] rounded-full hover:bg-[#FF8585] hover:shadow-[0_4px_12px_rgba(255,153,153,0.3)] transition-all duration-300 font-semibold focus:ring-2 focus:ring-[#FF8585] focus:outline-none"
            >
              <svg
                className="w-5 h-5 mr-2 text-[#111827]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              View on Google Maps
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;