import React from 'react';
import Img1 from '../Images/img1.jpg';
import Img2 from '../Images/img2.jpg';
import Img3 from '../Images/img3.jpg';
import Img4 from '../Images/img4.jpg';
import Img5 from '../Images/img5.jpg';
import Img6 from '../Images/img6.jpg';
import Img7 from '../Images/img7.jpg';
import Img8 from '../Images/img8.jpg';

const Gallery = () => {
  const images = [Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img8];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-800 text-center mb-10">
        School Gallery
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.map((img, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg shadow-lg transform transition duration-300 hover:scale-105"
          >
            <img
              src={img}
              alt={`School gallery image ${index + 1}`}
              className="w-full h-64 object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;