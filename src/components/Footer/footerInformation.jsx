import React from 'react';

const FooterInformation = ({ title, informations }) => {
  return (
    <div className="footer-section">
      <h4>{title}</h4>
      <ul>
        {informations.map((info, index) => (
          <li key={index}>
            <a href={info.link}>{info.text}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterInformation;