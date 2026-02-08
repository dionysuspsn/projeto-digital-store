import React from 'react';
import './index.css';
import logoFooter from '../../assets/logo-footer.svg';
import facebookIcon from '../../assets/facebook.svg';
import instagramIcon from '../../assets/instagram.svg';
import twitterIcon from '../../assets/twitter.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          
          {/* Logo Footer */}
          <div className="footer-section footer-logo">
            <img src={logoFooter} alt="Digital Store Logo" />
            <p>A qualidade que você confia.</p>
          </div>

          {/* Links Footer */}
          <div className="footer-section">
            <h4>Links Rápidos</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/products">Produtos</a></li>
              <li><a href="/categories">Categorias</a></li>
              <li><a href="/my-orders">Meus Pedidos</a></li>
            </ul>
          </div>

          {/* Informações */}
          <div className="footer-section">
            <h4>Informações</h4>
            <ul>
              <li><a href="#sobre">Sobre Nós</a></li>
              <li><a href="#contato">Contato</a></li>
              <li><a href="#politica">Política de Privacidade</a></li>
              <li><a href="#termos">Termos de Serviço</a></li>
            </ul>
          </div>

          {/* Contato */}
          <div className="footer-section">
            <h4>Contato</h4>
            <p>Email: contato@digitalstore.com</p>
            <p>Telefone: (11) 99999-9999</p>
            
            {/* Redes Sociais */}
            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <img src={facebookIcon} alt="Facebook" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <img src={instagramIcon} alt="Instagram" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <img src={twitterIcon} alt="Twitter" />
              </a>
            </div>
          </div>

        </div>

        
        <div className="footer-bottom">
          <p>&copy; 2026 Digital Store. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;