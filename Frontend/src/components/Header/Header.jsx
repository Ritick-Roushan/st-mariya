import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(null);

  const toggleMobileDropdown = (menu, e) => {
    e.stopPropagation();
    setIsDropdownOpen(prev => (prev === menu ? null : menu));
  };

  const handleDropdownLinkClick = (e) => {
    e.stopPropagation();
    setIsDropdownOpen(null); // Close dropdown
    // Navigation handled by <Link>
  };

  return (
    <header className="bg-[#F9FAFB] shadow-sm sticky top-0 z-50 font-['Poppins']">
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-[#1E3A8A] to-[#3B82F6] text-white py-2.5">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex space-x-4">
            <span className="flex items-center">
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21 3H3v18h18V3zm-2 16H5V5h14v14zM10 7h4v2h-4V7zm0 4h4v2h-4v-2zm0 4h4v2h-4v-2z" />
              </svg>
              9452426947, 7007061031
            </span>
            <span className="flex items-center">
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4v16h16V4zm-2 14H6V6h12v12zM7 7h10v2H7V7zm0 4h10v2H7v-2zm0 4h7v2H7v-2z" />
              </svg>
              stmariyacbr@gmail.com
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/login" className="hover:text-[#FF9999] transition-colors duration-200">
              Student Login
            </Link>
            <div className="flex space-x-2">
              {[
                { name: 'Facebook', href: 'https://facebook.com', path: 'M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.563V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z' },
                { name: 'Twitter', href: 'https://twitter.com', path: 'M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z' },
                { name: 'Instagram', href: 'https://instagram.com', path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.332.014 7.052.072 3.668.227 1.981 1.97 1.826 5.256c-.058 1.281-.072 1.69-.072 4.948 0 3.259.014 3.668.072 4.948.156 3.286 1.843 5.029 5.129 5.184 1.28.058 1.689.072 4.948.072s3.668-.014 4.948-.072c3.286-.156 5.029-1.843 5.184-5.129.058-1.28.072-1.689.072-4.948 0-3.259-.014-3.668-.072-4.948-.156-3.286-1.843-5.029-5.129-5.184C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z' },
              ].map(({ name, href, path }, index) => (
                <a
                  key={`social-${index}`}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#FF9999] hover:scale-110 transition-all duration-200"
                  aria-label={name}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d={path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Logo and Navigation */}
      <div className="bg-[#F9FAFB] py-3">
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* Logo and School Name */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="relative">
              <img
                src="/logo.jpg"
                alt="St. Mary Public School Logo"
                className="h-12 rounded-full object-cover border-2 border-[#FF9999] shadow-[0_2px_8px_rgba(0,0,0,0.1)]"
              />
            </div>
            <span className="text-xl font-semibold text-[#111827]">St. Mary Public School</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 text-[#111827]">
            <Link
              to="/"
              className="relative hover:text-[#FF9999] transition-colors duration-200 focus:ring-2 focus:ring-[#FF9999] focus:outline-none after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#FF9999] after:transition-all after:duration-300 hover:after:w-full"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="relative hover:text-[#FF9999] transition-colors duration-200 focus:ring-2 focus:ring-[#FF9999] focus:outline-none after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#FF9999] after:transition-all after:duration-300 hover:after:w-full"
            >
              About
            </Link>

            {/* CBSE Dropdown */}
            <div className="relative group z-50">
              <span className="flex items-center relative hover:text-[#FF9999] transition-colors duration-200 cursor-pointer focus:ring-2 focus:ring-[#FF9999] focus:outline-none after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#FF9999] after:transition-all after:duration-300 hover:after:w-full">
                CBSE
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </span>
              <div className="absolute hidden group-hover:flex flex-col bg-[#F9FAFB] text-[#111827] mt-2 rounded-lg shadow-[0_4px_20px_rgba(0,0,0,0.1)] w-56 overflow-hidden animate-slideDown">
                {[
                  { to: '/cbse-curriculum', text: 'CBSE Curriculum' },
                  { to: '/mandatory-disclosure', text: 'Mandatory Disclosure' },
                  { to: '/affiliation-details', text: 'Affiliation Details' },
                ].map(({ to, text }, index) => (
                  <Link
                    key={`cbse-${index}`}
                    to={to}
                    className="block px-4 py-2 hover:bg-[#FF9999]/10 hover:text-[#FF9999] transition-colors duration-200 focus:ring-2 focus:ring-[#FF9999] focus:outline-none"
                    onClick={handleDropdownLinkClick}
                  >
                    {text}
                  </Link>
                ))}
              </div>
            </div>

            {/* Academics Dropdown */}
            <div className="relative group z-50">
              <span className="flex items-center relative hover:text-[#FF9999] transition-colors duration-200 cursor-pointer focus:ring-2 focus:ring-[#FF9999] focus:outline-none after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#FF9999] after:transition-all after:duration-300 hover:after:w-full">
                Academics
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </span>
              <div className="absolute hidden group-hover:flex flex-col bg-[#F9FAFB] text-[#111827] mt-2 rounded-lg shadow-[0_4px_20px_rgba(0,0,0,0.1)] w-56 overflow-hidden animate-slideDown">
                {[
                  { to: '/faculty', text: 'Faculty' },
                  { to: '/results', text: 'Results' },
                ].map(({ to, text }, index) => (
                  <Link
                    key={`academics-${index}`}
                    to={to}
                    className="block px-4 py-2 hover:bg-[#FF9999]/10 hover:text-[#FF9999] transition-colors duration-200 focus:ring-2 focus:ring-[#FF9999] focus:outline-none"
                    onClick={handleDropdownLinkClick}
                  >
                    {text}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              to="/admissions"
              className="relative hover:text-[#FF9999] transition-colors duration-200 focus:ring-2 focus:ring-[#FF9999] focus:outline-none after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#FF9999] after:transition-all after:duration-300 hover:after:w-full"
            >
              Admissions
            </Link>
            <Link
              to="/contact"
              className="relative hover:text-[#FF9999] transition-colors duration-200 focus:ring-2 focus:ring-[#FF9999] focus:outline-none after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#FF9999] after:transition-all after:duration-300 hover:after:w-full"
            >
              Contact
            </Link>
            <Link
              to="/apply"
              className="bg-[#FF9999] text-[#111827] px-5 py-2 rounded-full hover:bg-[#FF8585] hover:scale-105 hover:shadow-[0_4px_12px_rgba(255,153,153,0.3)] transition-all duration-300 font-semibold focus:ring-2 focus:ring-[#FF8585] focus:outline-none"
            >
              Apply Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden focus:outline-none focus:ring-2 focus:ring-[#FF9999]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            <svg className="w-6 h-6 text-[#111827]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#1E3A8A] text-white px-4 py-6 space-y-4">
          <Link
            to="/"
            className="block hover:text-[#FF9999] transition-colors duration-200"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block hover:text-[#FF9999] transition-colors duration-200"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <div>
            <button
              className="flex items-center hover:text-[#FF9999] transition-colors duration-200 w-full text-left"
              onClick={(e) => toggleMobileDropdown('cbse', e)}
              aria-expanded={isDropdownOpen === 'cbse'}
            >
              CBSE
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {isDropdownOpen === 'cbse' && (
              <div className="pl-4 space-y-2 mt-2">
                {[
                  { to: '/cbse-curriculum', text: 'CBSE Curriculum' },
                  { to: '/mandatory-disclosure', text: 'Mandatory Disclosure' },
                  { to: '/affiliation-details', text: 'Affiliation Details' },
                ].map(({ to, text }, index) => (
                  <Link
                    key={`mobile-cbse-${index}`}
                    to={to}
                    className="block hover:text-[#FF9999] transition-colors duration-200"
                    onClick={handleDropdownLinkClick}
                  >
                    {text}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <div>
            <button
              className="flex items-center hover:text-[#FF9999] transition-colors duration-200 w-full text-left"
              onClick={(e) => toggleMobileDropdown('academics', e)}
              aria-expanded={isDropdownOpen === 'academics'}
            >
              Academics
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {isDropdownOpen === 'academics' && (
              <div className="pl-4 space-y-2 mt-2">
                {[
                  { to: '/faculty', text: 'Faculty' },
                  { to: '/results', text: 'Results' },
                ].map(({ to, text }, index) => (
                  <Link
                    key={`mobile-academics-${index}`}
                    to={to}
                    className="block hover:text-[#FF9999] transition-colors duration-200"
                    onClick={handleDropdownLinkClick}
                  >
                    {text}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link
            to="/admissions"
            className="block hover:text-[#FF9999] transition-colors duration-200"
            onClick={() => setIsMenuOpen(false)}
          >
            Admissions
          </Link>
          <Link
            to="/contact"
            className="block hover:text-[#FF9999] transition-colors duration-200"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
          <Link
            to="/apply"
            className="block bg-[#FF9999] text-[#111827] px-5 py-2 rounded-full hover:bg-[#FF8585] hover:scale-105 hover:shadow-[0_4px_12px_rgba(255,153,153,0.3)] transition-all duration-300 text-center font-semibold"
            onClick={() => setIsMenuOpen(false)}
          >
            Apply Now
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;