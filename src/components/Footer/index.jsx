import React from 'react';
import './index.css';
import logoFooter from '../../assets/logo-footer.svg';
import facebookIcon from '../../assets/facebook.svg';
import instagramIcon from '../../assets/instagram.svg';
import twitterIcon from '../../assets/twitter.svg';
import FooterInformation from './footerInformation';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const linkData = [
    { text: "Home", link: "/" },
    { text: "Produtos", link: "/products" },
    { text: "Categorias", link: "/categories" },
    { text: "Meus Pedidos", link: "/my-orders" }
  ];

  const infoData = [
    { text: "Sobre Drip Store", link: "/about" },
    { text: "Segurança", link: "/security" },
    { text: "Wishlist", link: "/wishlist" },
    { text: "Blog", link: "/blog" },
    { text: "Trabalhe conosco", link: "/careers" },
  ];

  const categoryData = [
    { text: "Camisetas", link: "/category/camisetas" },
    { text: "Calças", link: "/category/calcas" },
    { text: "Bonés", link: "/category/bones" },
    { text: "Headphones", link: "/category/headphones" },
    { text: "Tênis", link: "/category/tenis" },
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          
        
          <div className="footer-section footer-logo">
            <img src={logoFooter} alt="Digital Store Logo" />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
            
            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <img src={facebookIcon} alt="Facebook" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <img src={instagramIcon} alt="Instagram" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <img src={twitterIcon} alt="Twitter" />
              </a>
            </div>
          </div>

          
          <FooterInformation title="Informação" informations={infoData} />
          <FooterInformation title="Categorias" informations={categoryData} />

          <div className="footer-section">
            <h4>Contato</h4>
            <p>Email: contato@digitalstore.com</p>
            <p>Telefone: (11) 99999-9999</p>
          </div>

        </div>

        <hr />
        <div className="footer-bottom">
          <p>&copy; {currentYear} Digital Store. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;