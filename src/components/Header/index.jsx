import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo';
import shoppingCartIcon from '../../assets/mini-cart.svg';
import './index.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <div className="header-top">
          <Logo />
          
          <div className="search-container">
            <input type="text" placeholder="Pesquisar produto..." />
            <button type="button" aria-label="Pesquisar">Buscar</button>
          </div>

          <div className="header-user-actions">
            <Link to="/cadastro" className="link-register">Cadastre-se</Link>
            <button className="btn-primary">Entrar</button>
            
            <div className="cart-wrapper">
              <img src={shoppingCartIcon} alt="Carrinho de compras" />
              <span className="cart-count" aria-label="Total de itens no carrinho">0</span> 
            </div>

            <button 
              className="menu-toggle" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Menu de navegação"
              aria-expanded={isMenuOpen}
            >
              ☰
            </button>
          </div>
        </div>

        <nav className={`header-nav ${isMenuOpen ? 'open' : ''}`} aria-label="Menu principal">
          <ul>
            <li><Link to="/" className="active">Home</Link></li>
            <li><Link to="/produtos">Produtos</Link></li>
            <li><Link to="/categorias">Categorias</Link></li>
            <li><Link to="/pedidos">Meus Pedidos</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;