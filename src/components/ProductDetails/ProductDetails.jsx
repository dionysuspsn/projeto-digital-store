import React from 'react';
import './ProductDetails.css';

const ProductDetails = ({ title, content, children }) => {
  return (
    <div className="product-details-container">
      <h3 className="details-title">{title || "Descrição do produto"}</h3>
      <div className="details-content">
        {content ? <p>{content}</p> : children}
      </div>
    </div>
  );
};

export default ProductDetails;