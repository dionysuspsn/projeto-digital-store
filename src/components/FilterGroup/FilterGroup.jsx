import React from 'react';
import './FilterGroup.css';

const FilterGroup = ({ title, inputType, options }) => {
  return (
    <div className="filter-group">
      <h3 className="filter-title">{title}</h3>
      
      <div className="filter-options">
        {options.map((option, index) => (
          <label key={index} className="filter-option-label">
            <input 
              type={inputType || 'checkbox'} 
              name={title} 
              value={option.value}
              className="filter-input"
            />
            <span className="filter-text">{option.text}</span>
          </label>
        ))}
      </div>
    </div>
  );
}

export default FilterGroup;