import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#1E3A8A] to-[#3B82F6] text-white py-8 font-['Poppins']">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and School Name */}
          <div className="flex flex-col space-y-4">
            <Link to="/" className="flex items-center space-x-3">
              <div className="relative">
                <img
                  src="/logo1.jpg"
                  alt="St. Mary Public School Logo"
                  className="h-12 rounded-full object-cover border-2 border-[#FF9999] shadow-[0_2px_8px_rgba(0,0,0,0.1)]"
                />
              </div>
              <span className="text-lg font-semibold">St. Mariya Public School</span>
            </Link>
            <p className="text-sm text-gray-200">
              Nurturing excellence through quality education and holistic development.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { to: '/', text: 'Home' },
                { to: '/about-school', text: 'About' },
                { to: '/admissions', text: 'Admissions' },
                { to: '/contact', text: 'Contact' },
              ].map(({ to, text }, index) => (
                <li key={`footer-link-${index}`}>
                  <Link
                    to={to}
                    className="hover:text-[#FF9999] hover:underline transition-all duration-200 focus:ring-2 focus:ring-[#FF9999] focus:outline-none"
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center">
                {/* Phone Icon */}
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.47.57 3.57.11.35.03.74-.25 1.02L6.62 10.79z" />
                </svg>
                9452426947, 7007061031
              </li>
              <li className="flex items-center">
                {/* Email Icon */}
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
                stmariyacbr@gmail.com
              </li>
              <li className="flex items-start">
                <svg className="w-4 h-4 mr-2 mt-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
                <div>
                  <a
                    href="https://maps.app.goo.gl/6ZaKDRE6989kDrk56"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#FF9999] hover:underline transition-all duration-200"
                  >
                    Main Branch: Behind Gani Market, Chhibramau, Kannauj, Uttar Pradesh 209721
                  </a>
                  <p className="mt-1">
                    Extension Branch: Farrukhabad Road, Chhibramau, Kannauj, Uttar Pradesh 209721
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {[
                { name: 'Facebook', href: 'https://facebook.com', path: 'M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.563V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z' },
                { name: 'Twitter', href: 'https://twitter.com', path: 'M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z' },
                { name: 'Instagram', href: 'https://instagram.com', path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.332.014 7.052.072 3.668.227 1.981 1.97 1.826 5.256c-.058 1.281-.072 1.69-.072 4.948 0 3.259.014 3.668.072 4.948.156 3.286 1.843 5.029 5.129 5.184 1.28.058 1.689.072 4.948.072s3.668-.014 4.948-.072c3.286-.156 5.029-1.843 5.184-5.129.058-1.28.072-1.689.072-4.948 0-3.259-.014-3.668-.072-4.948-.156-3.286-1.843-5.029-5.129-5.184C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z' },
              ].map(({ name, href, path }, index) => (
                <a
                  key={`footer-social-${index}`}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#FF9999] hover:scale-110 transition-all duration-200"
                  aria-label={name}
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d={path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-4 border-t border-[#E5E7EB]/20 text-center text-sm">
          <p>© {new Date().getFullYear()} St. Mariya Public School. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;