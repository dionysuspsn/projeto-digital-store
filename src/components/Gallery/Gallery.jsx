import React, { useState } from 'react';
import './Gallery.css';

const Gallery = ({ className, width, height, radius, showThumbs, images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevImage = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className={`gallery-container ${className || ''}`} style={{ width: width }}>
      <div 
        className="main-image-area" 
        style={{ 
            height: height || '400px', 
            borderRadius: radius,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(${images[currentIndex].src})`
        }}
      >
        {currentIndex > 0 && (
            <img 
                src="/arrow-left.svg" 
                alt="Anterior" 
                className="arrow-icon left" 
                onClick={prevImage} 
            />
        )}

        {currentIndex < images.length - 1 && (
            <img 
                src="/arrow-right.svg" 
                alt="Próximo" 
                className="arrow-icon right" 
                onClick={nextImage} 
            />
        )}
      </div>

      {showThumbs && (
        <div className="thumbnails-container">
          {images.map((image, index) => (
            <div
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`thumbnail-item ${index === currentIndex ? 'active' : ''}`}
              style={{ borderRadius: radius }}
            >
              <img src={image.src} alt={`Thumb ${index}`} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Gallery; 