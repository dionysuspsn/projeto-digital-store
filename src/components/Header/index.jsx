import React from 'react';
import Logo from '../Logo';
import shoppingCartIcon from '../../assets/mini-cart.svg';
import './index.css';

const Header = () => {
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
            <a href="/cadastro" className="link-register">Cadastre-se</a>
            <button className="btn-primary">Entrar</button>
            
            <div className="cart-wrapper">
              <img src={shoppingCartIcon} alt="Carrinho" />
              <span className="cart-count">0</span> 
              
            </div>
          </div>
        </div>

        <nav className="header-nav">
          <ul>
            <li><a href="/" className="active">Home</a></li>
            <li><a href="/produtos">Produtos</a></li>
            <li><a href="/categorias">Categorias</a></li>
            <li><a href="/pedidos">Meus Pedidos</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;