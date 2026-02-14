import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom'; // ✅ Tudo em uma linha só
import Logo from '../Logo';
import shoppingCartIcon from '../../assets/mini-cart.svg';
import './index.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault(); 
    
    if (searchQuery.trim()) { 
      navigate(`/products?filter=${searchQuery}`);
      setSearchQuery(''); 
    }
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-top">
          <Logo />

          <form className="search-container" onSubmit={handleSearch}>
            <input 
              type="text" 
              placeholder="Pesquisar produto..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit" aria-label="Pesquisar">
              Buscar
            </button>
          </form>

          <div className="header-user-actions">
            <Link to="/signup" className="link-register">Cadastre-se</Link>
            <Link to="/login" className="btn-primary">Entrar</Link>

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

        <nav className={`header-nav ${isMenuOpen ? 'open' : ''}`}>
          <ul>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/products"
                className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
              >
                Produtos
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/categories"
                className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
              >
                Categorias
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/my-orders"
                className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
              >
                Meus Pedidos
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;