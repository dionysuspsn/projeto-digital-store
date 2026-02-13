import React from 'react';
import './ProductCard.css';

const ProductCard = ({ produto }) => {
  if (!produto) return null;
  
  const { image, name, price, priceDiscount } = produto;
  
  return (
    <div className="product-card">
      <div className="card-image">
        <img src={image} alt={name} />
      </div>
      
      <div className="card-info">
        <span className="product-category">Tênis</span>
        <h3 className="product-name">{name}</h3>
        
        <div className="price-container">
          {priceDiscount ? (
            <>
              <span className="price-old">R$ {price?.toFixed(2)}</span>
              <span className="price-discount">R$ {priceDiscount?.toFixed(2)}</span>
            </>
            ) : (
            <span className="price-regular">R$ {price?.toFixed(2)}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;