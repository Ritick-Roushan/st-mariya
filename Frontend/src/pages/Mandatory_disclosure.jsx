import React, { useState, useEffect } from 'react';
import { FaFilePdf } from 'react-icons/fa';
import fire_safety_certificate from '../disclosure/fire_safety_certificate.pdf';
import land_certificate from '../disclosure/land_certificate.pdf';
import last_three_year_result from '../disclosure/last_three_year_result.pdf';
import water_health_certificate from '../disclosure/water_health_certificate.pdf';
import society_trust_registration_certificate from '../disclosure/society_trust_registration_certificate.pdf';

function Mandatory_disclosure() {
    const documents = [
        { name: 'Mandatory public disclosure', file: '#' },
        { name: 'Fire Safety Certificate', file: fire_safety_certificate },
        { name: 'Land Certificate', file: land_certificate },
        { name: 'Last Three Years Result', file: last_three_year_result },
        { name: 'Water Health Certificate', file: water_health_certificate },
        { name: 'Society/Trust Registration Certificate', file: society_trust_registration_certificate },
    ];

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        checkMobile(); // initial check
        window.addEventListener('resize', checkMobile);

        return () => {
            window.removeEventListener('resize', checkMobile);
        };
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8">
            {/* Header Section */}
            <div className="text-center mb-12 px-2">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-900 tracking-tight">
                    Mandatory Public Disclosure
                </h1>
                <p className="mt-4 text-base sm:text-lg text-gray-700 max-w-2xl mx-auto">
                    Explore the essential documents as mandated by CBSE for transparency and compliance.
                </p>
            </div>

            {/* Documents Grid */}
            <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {documents.map((doc, index) => (
                    <a
                        key={index}
                        href={doc.file}
                        target={isMobile ? "_blank" : "_self"}
                        rel={isMobile ? "noopener noreferrer" : undefined}
                        className="group bg-white p-4 sm:p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-l-4 border-blue-500"
                        aria-label={`View ${doc.name} PDF`}
                    >
                        <div className="flex items-center space-x-4">
                            <FaFilePdf className="text-red-500 text-2xl sm:text-3xl group-hover:scale-110 transition-transform duration-200" />
                            <div className="flex-1 min-w-0">
                                <h3 className="text-sm sm:text-lg font-semibold text-gray-800 group-hover:text-blue-600 break-words">
                                    {doc.name}
                                </h3>
                                <p className="text-xs sm:text-sm text-gray-500">View PDF</p>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
}

export default Mandatory_disclosure;
