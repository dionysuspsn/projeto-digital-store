// src/components/Gallery/Gallery.jsx
import React, { useState } from 'react';
import './Gallery.css';
import arrowLeft from '../../assets/arrow-left.svg';   // Importe os SVGs
import arrowRight from '../../assets/arrow-right.svg';

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
          <button 
            className="arrow-button left"
            onClick={prevImage}
            aria-label="Imagem anterior"
          >
            <img src={arrowLeft} alt="" />
          </button>
        )}

        {currentIndex < images.length - 1 && (
          <button 
            className="arrow-button right"
            onClick={nextImage}
            aria-label="Próxima imagem"
          >
            <img src={arrowRight} alt="" />
          </button>
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
              <img src={image.src} alt={`Miniatura ${index + 1}`} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Gallery;