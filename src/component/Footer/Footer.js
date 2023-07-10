import React from 'react';
import './Footer.css';

const Footer = ({name}) => {
  return (
    <footer className="footer-container">
      <p className="footer-text">© 2023 {name}</p>
    </footer>
  );
}

export default Footer;
