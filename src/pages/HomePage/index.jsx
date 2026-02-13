import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../../components/ProductCard/ProductCard';
import './index.css';

const HomePage = () => {
  // Produtos fake para featured section
  const produtosFake = [
    { id: 1, name: "Tênis Jordan 1", image: "https://raw.githubusercontent.com/digitalcollegebr/projeto-digital-store/main/public/product-thumb-1.jpeg", price: 200, priceDiscount: 149.9 },
    { id: 2, name: "Tênis Jordan 1", image: "https://raw.githubusercontent.com/digitalcollegebr/projeto-digital-store/main/public/product-thumb-2.jpeg", price: 200, priceDiscount: 149.9 },
    { id: 3, name: "Sapato Levi's", image: "https://raw.githubusercontent.com/digitalcollegebr/projeto-digital-store/main/public/product-thumb-3.jpeg", price: 400 },
    { id: 4, name: "Tênis Fila", image: "https://raw.githubusercontent.com/digitalcollegebr/projeto-digital-store/main/public/product-thumb-4.jpeg", price: 200, priceDiscount: 149.9 },
    { id: 5, name: "Tênis de Corrida Nike", image: "https://raw.githubusercontent.com/digitalcollegebr/projeto-digital-store/main/public/product-thumb-5.jpeg", price: 200, priceDiscount: 149.9 },
  ];

  const categories = [
    { id: 1, name: 'Camisetas', image: '' },
    { id: 2, name: 'Calças', image: '' },
    { id: 3, name: 'Bonés', image: '' },
    { id: 4, name: 'Headphones', image: '' },
    { id: 5, name: 'Tênis', image: '' },
  ];

  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Coleção Exclusiva</h1>
          <p className="hero-subtitle">Encontre os melhores produtos com preços incríveis</p>
          <Link to="/products" className="hero-button">Começar Compras</Link>
        </div>
      </section>

      <section className="categories-section">
        <div className="container">
          <h2 className="section-title">Coleções em destaque</h2>
          <div className="categories-grid">
            {categories.map((category) => (
              <div key={category.id} className="category-card">
                <div className="category-icon">{category.image}</div>
                <h3 className="category-name">{category.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="featured-products-section">
        <div className="container">
          <h2 className="section-title">Produtos em Destaque</h2>
          <div className="products-grid">
            {produtosFake.map((produto) => (
              <ProductCard key={produto.id} produto={produto} />
            ))}
          </div>
          <div className="see-more-container">
            <Link to="/products" className="see-more-link">Ver Mais Produtos</Link>
          </div>
        </div>
      </section>

      <section className="special-offer-section">
        <div className="container">
          <div className="offer-content">
            <div className="offer-text">
              <span className="offer-label">Oferta Especial</span>
              <h2 className="offer-title">Air Jordan Edição de Colecionador</h2>
              <p className="offer-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              </p>
              <Link to="/products/#" className="offer-button">Ver Oferta</Link> {/* Aqui depois deve vir o id do produto */}
            </div>
            <div className="offer-image">
              <img src="https://raw.githubusercontent.com/digitalcollegebr/projeto-digital-store/main/public/produc-image-1.jpeg" alt="Air Jordan" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;