import React, { useState } from 'react';
import './ProductOptions.css';

const ProductOptions = ({ options, radius, shape, type }) => {

  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <div className="product-options-container">
      {options.map((option, index) => (
        <div
          key={index}
  
          onClick={() => setSelectedOption(option)}
          
          
          className={`option-item ${shape} ${type} ${selectedOption === option ? 'selected' : ''}`}
          
          style={{
            
            borderRadius: radius,
           
            backgroundColor: type === 'color' ? option : 'transparent',
          }}
        >
          
          {type === 'text' ? option : ''}
        </div>
      ))}
    </div>
  );
};

export default ProductOptions;