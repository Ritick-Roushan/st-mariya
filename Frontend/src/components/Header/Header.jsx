import { useState, useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';

// Menu items configuration
const menuItems = {
  about: [
    { to: '/about-school', text: 'About School' },
    { to: '/mission-statement', text: 'Mission Statement' },
    { to: '/principal-message', text: 'Principal Message' },
    { to: '/infrastructure', text: 'Infrastructure' },
  ],
  cbse: [
    { to: '/curriculum', text: 'CBSE Curriculum' },
    // { to: '/mandatory-disclosure', text: 'Mandatory Disclosure' },
    // { to: '/affiliation-details', text: 'Affiliation Details' },
  ],
  academics: [
    { to: '/curriculum', text: 'Curriculum' },
    { to: '/promotion-policy', text: 'Promotion Policy' },
    { to: '/examination-policy', text: 'Examination Policy' },
    { to: '/counsellor-column', text: 'Counsellor Column' },
    { to: '/behavioural-policy', text: 'Behavioural Policy' },
    // { to: '/faculty', text: 'Faculty' },
    // { to: '/results', text: 'Results' },
  ],
};

// Social media links
const socialLinks = [
  {
    name: 'Facebook',
    href: 'https://facebook.com',
    path: 'M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.563V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z',
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com',
    path: 'M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z',
  },
  {
    name: 'Instagram',
    href: 'https://instagram.com',
    path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.332.014 7.052.072 3.668.227 1.981 1.97 1.826 5.256c-.058 1.281-.072 1.69-.072 4.948 0 3.259.014 3.668.072 4.948.156 3.286 1.843 5.029 5.129 5.184 1.28.058 1.689.072 4.948.072s3.668-.014 4.948-.072c3.286-.156 5.029-1.843 5.184-5.129.058-1.28.072-1.689.072-4.948 0-3.259-.014-3.668-.072-4.948-.156-3.286-1.843-5.029-5.129-5.184C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z',
  },
];

// Dropdown menu component
const DropdownMenu = ({ items, isOpen, onLinkClick, menuId }) => (
  <div
    className={`absolute left-0 mt-2 w-56 bg-[#F9FAFB] text-[#111827] rounded-lg shadow-[0_4px_20px_rgba(0,0,0,0.1)] overflow-hidden transition-all duration-300 ease-in-out ${
      isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'
    }`}
    id={menuId}
  >
    {items.map(({ to, text }, index) => (
      <Link
        key={`${menuId}-${index}`}
        to={to}
        className="block px-4 py-2 hover:bg-[#FF9999]/10 hover:text-[#FF9999] transition-colors duration-200 focus:ring-2 focus:ring-[#FF9999] focus:outline-none"
        onClick={onLinkClick}
      >
        {text}
      </Link>
    ))}
  </div>
);

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(null);
  const timeoutRef = useRef(null);

  const toggleDropdown = useCallback(
    (menu, e) => {
      e.stopPropagation();
      clearTimeout(timeoutRef.current);
      setIsDropdownOpen((prev) => (prev === menu ? null : menu));
    },
    []
  );

  const handleMouseLeave = useCallback(() => {
    timeoutRef.current = setTimeout(() => {
      setIsDropdownOpen(null);
    }, 200);
  }, []);

  const handleMouseEnter = useCallback(() => {
    clearTimeout(timeoutRef.current);
  }, []);

  const closeAll = useCallback(() => {
    clearTimeout(timeoutRef.current);
    setIsDropdownOpen(null);
    setIsMenuOpen(false);
  }, []);

  const handleLinkClick = useCallback(
    (e) => {
      e.stopPropagation();
      closeAll();
    },
    [closeAll]
  );

  return (
    <header className="bg-gradient-to-r from-[#1E3A8A] to-[#3B82F6] shadow-sm sticky top-0 z-50 font-['Poppins']">
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-[#1E3A8A] to-[#3B82F6] text-white py-2.5 border-b border-white/20">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center text-sm gap-2 sm:gap-0">
          <div className="flex flex-col sm:flex-row sm:space-x-4 items-center text-center sm:text-left">
            <span className="flex items-center justify-center sm:justify-start whitespace-nowrap">
              <svg
                className="w-4 h-4 mr-2 text-[#FF9999]"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.47.57 3.57.11.35.03.74-.25 1.02L6.62 10.79z" />
              </svg>
              <span>
                <a
                  href="tel:+919452426947"
                  className="hover:text-[#FF9999] transition-colors duration-200"
                  aria-label="Call 9452426947"
                >
                  9452426947
                </a>
                ,{' '}
                <a
                  href="tel:+917007061031"
                  className="hover:text-[#FF9999] transition-colors duration-200"
                  aria-label="Call 7007061031"
                >
                  7007061031
                </a>
              </span>
            </span>
            <span className="flex items-center justify-center sm:justify-start whitespace-nowrap">
              <svg
                className="w-4 h-4 mr-2 text-[#FF9999]"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
              <a
                href="mailto:stmariyacbr@gmail.com"
                className="hover:text-[#FF9999] transition-colors duration-200"
                aria-label="Email stmariyacbr@gmail.com"
              >
                stmariyacbr@gmail.com
              </a>
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex space-x-2">
              {socialLinks.map(({ name, href, path }, index) => (
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
      <div className="bg-gradient-to-r from-[#1E3A8A] to-[#3B82F6] py-3">
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* Logo and School Name */}
          <Link to="/" className="flex items-center space-x-3" onClick={closeAll}>
            <div className="relative">
              <img
                src="/logo1.jpg"
                alt="St. Mariya Public School Logo"
                className="h-12 rounded-full object-cover border-2 border-[#FF9999] shadow-[0_2px_8px_rgba(0,0,0,0.2)]"
              />
            </div>
            <span className="text-xl font-semibold text-white">
              St. Mariya Public School
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 text-white">
            <Link
              to="/"
              className="relative hover:text-[#FF9999] transition-colors duration-200 focus:ring-2 focus:ring-[#FF9999] focus:outline-none after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#FF9999] after:transition-all after:duration-300 hover:after:w-full"
              onClick={closeAll}
            >
              Home
            </Link>

            {/* About Dropdown */}
            <div
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className="flex items-center relative hover:text-[#FF9999] transition-colors duration-200 focus:ring-2 focus:ring-[#FF9999] focus:outline-none after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#FF9999] after:transition-all after:duration-300 hover:after:w-full"
                onClick={(e) => toggleDropdown('about', e)}
                aria-expanded={isDropdownOpen === 'about'}
                aria-controls="about-menu"
              >
                About
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <DropdownMenu
                items={menuItems.about}
                isOpen={isDropdownOpen === 'about'}
                onLinkClick={handleLinkClick}
                menuId="about-menu"
              />
            </div>

            {/* CBSE Dropdown */}
            <div
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className="flex items-center relative hover:text-[#FF9999] transition-colors duration-200 focus:ring-2 focus:ring-[#FF9999] focus:outline-none after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#FF9999] after:transition-all after:duration-300 hover:after:w-full"
                onClick={(e) => toggleDropdown('cbse', e)}
                aria-expanded={isDropdownOpen === 'cbse'}
                aria-controls="cbse-menu"
              >
                CBSE
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <DropdownMenu
                items={menuItems.cbse}
                isOpen={isDropdownOpen === 'cbse'}
                onLinkClick={handleLinkClick}
                menuId="cbse-menu"
              />
            </div>

            {/* Academics Dropdown */}
            <div
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className="flex items-center relative hover:text-[#FF9999] transition-colors duration-200 focus:ring-2 focus:ring-[#FF9999] focus:outline-none after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#FF9999] after:transition-all after:duration-300 hover:after:w-full"
                onClick={(e) => toggleDropdown('academics', e)}
                aria-expanded={isDropdownOpen === 'academics'}
                aria-controls="academics-menu"
              >
                Academics
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <DropdownMenu
                items={menuItems.academics}
                isOpen={isDropdownOpen === 'academics'}
                onLinkClick={handleLinkClick}
                menuId="academics-menu"
              />
            </div>

            <Link
              to="/gallery"
              className="relative hover:text-[#FF9999] transition-colors duration-200 focus:ring-2 focus:ring-[#FF9999] focus:outline-none after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#FF9999] after:transition-all after:duration-300 hover:after:w-full"
              onClick={closeAll}
            >
              Gallery
            </Link>

            <Link
              to="/admissions"
              className="relative hover:text-[#FF9999] transition-colors duration-200 focus:ring-2 focus:ring-[#FF9999] focus:outline-none after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#FF9999] after:transition-all after:duration-300 hover:after:w-full"
              onClick={closeAll}
            >
              Admissions
            </Link>
            <Link
              to="/contact"
              className="relative hover:text-[#FF9999] transition-colors duration-200 focus:ring-2 focus:ring-[#FF9999] focus:outline-none after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#FF9999] after:transition-all after:duration-300 hover:after:w-full"
              onClick={closeAll}
            >
              Contact
            </Link>
            <Link
              to="/admissions"
              className="bg-[#FF9999] text-[#111827] px-5 py-2 rounded-full hover:bg-[#FF8585] hover:scale-105 hover:shadow-[0_4px_12px_rgba(255,153,153,0.3)] transition-all duration-300 font-semibold focus:ring-2 focus:ring-[#FF8585] focus:outline-none"
              onClick={closeAll}
            >
              Apply Now
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden focus:outline-none focus:ring-2 focus:ring-[#FF9999]"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label="Toggle Menu"
            aria-expanded={isMenuOpen}
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="md:hidden bg-[#F9FAFB] text-[#111827] px-4 py-6 space-y-4">
          <Link
            to="/"
            className="block hover:text-[#FF9999] transition-colors duration-200"
            onClick={closeAll}
          >
            Home
          </Link>
          {Object.entries(menuItems).map(([menu, items]) => (
            <div key={menu}>
              <button
                className="flex items-center hover:text-[#FF9999] transition-colors duration-200 w-full text-left"
                onClick={(e) => toggleDropdown(menu, e)}
                aria-expanded={isDropdownOpen === menu}
                aria-controls={`${menu}-mobile-menu`}
              >
                {menu.charAt(0).toUpperCase() + menu.slice(1)}
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {isDropdownOpen === menu && (
                <div
                  className="pl-4 space-y-2 mt-2"
                  id={`${menu}-mobile-menu`}
                >
                  {items.map(({ to, text }, index) => (
                    <Link
                      key={`mobile-${menu}-${index}`}
                      to={to}
                      className="block hover:text-[#FF9999] transition-colors duration-200"
                      onClick={handleLinkClick}
                    >
                      {text}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link
            to="/gallery"
            className="block hover:text-[#FF9999] transition-colors duration-200"
            onClick={closeAll}
          >
            Gallery
          </Link>
          <Link
            to="/admissions"
            className="block hover:text-[#FF9999] transition-colors duration-200"
            onClick={closeAll}
          >
            Admissions
          </Link>
          <Link
            to="/contact"
            className="block hover:text-[#FF9999] transition-colors duration-200"
            onClick={closeAll}
          >
            Contact
          </Link>
          <Link
            to="/admissions"
            className="block bg-[#FF9999] text-[#111827] px-5 py-2 rounded-full hover:bg-[#FF8585] hover:scale-105 hover:shadow-[0_4px_12px_rgba(255,153,153,0.3)] transition-all duration-300 text-center font-semibold"
            onClick={closeAll}
          >
            Apply Now
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Header;