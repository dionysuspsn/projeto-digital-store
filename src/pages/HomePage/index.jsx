import React from 'react';
import { Link } from 'react-router-dom';
import Gallery from '../../components/Gallery/Gallery';
import Section from '../../components/Section/Section';
import ProductListing from '../../components/ProductListing/ProductListing';
import './index.css';

const HomePage = () => {
  const homeSlides = [
    { src: '/home-slide-1.jpeg' },
    { src: '/home-slide-2.jpeg' },
    { src: '/home-slide-3.jpeg' },
    { src: '/home-slide-4.jpeg' },
    { src: '/home-slide-5.jpeg' },
  ];

  const produtosFake = [
    { id: 1, name: "Tênis Jordan 1", image: "https://raw.githubusercontent.com/digitalcollegebr/projeto-digital-store/main/public/product-thumb-1.jpeg", price: 200, priceDiscount: 149.9 },
    { id: 2, name: "Tênis Jordan 1", image: "https://raw.githubusercontent.com/digitalcollegebr/projeto-digital-store/main/public/product-thumb-2.jpeg", price: 200, priceDiscount: 149.9 },
    { id: 3, name: "Sapato Levi's", image: "https://raw.githubusercontent.com/digitalcollegebr/projeto-digital-store/main/public/product-thumb-3.jpeg", price: 400 },
    { id: 4, name: "Tênis Fila", image: "https://raw.githubusercontent.com/digitalcollegebr/projeto-digital-store/main/public/product-thumb-4.jpeg", price: 200, priceDiscount: 149.9 },
    { id: 5, name: "Tênis de Corrida Nike", image: "https://raw.githubusercontent.com/digitalcollegebr/projeto-digital-store/main/public/product-thumb-5.jpeg", price: 200, priceDiscount: 149.9 },
    { id: 6, name: "Tênis Adidas", image: "https://raw.githubusercontent.com/digitalcollegebr/projeto-digital-store/main/public/product-thumb-1.jpeg", price: 300, priceDiscount: 249.9 },
    { id: 7, name: "Tênis Puma", image: "https://raw.githubusercontent.com/digitalcollegebr/projeto-digital-store/main/public/product-thumb-2.jpeg", price: 250, priceDiscount: 199.9 },
    { id: 8, name: "Tênis Vans", image: "https://raw.githubusercontent.com/digitalcollegebr/projeto-digital-store/main/public/product-thumb-3.jpeg", price: 180, priceDiscount: 139.9 },
  ];

  const collections = [
    { 
      id: 1, 
      name: 'Camisetas', 
      image: '/collection-1.png',
      discount: '30% OFF'
    },
    { 
      id: 2, 
      name: 'Calças', 
      image: '/collection-2.png',
      discount: '30% OFF'
    },
    { 
      id: 3, 
      name: 'Bonés', 
      image: '/collection-3.png',
      discount: '30% OFF'
    },
  ];

  return (
    <div className="home-page">
      
      <Gallery 
        images={homeSlides}
        width="100%"
        height="681px"
        radius="0px"
        showThumbs={false}
      />

      <Section title="Coleções em destaque" titleAlign="center">
        <div className="collections-grid">
          {collections.map((collection) => (
            <div key={collection.id} className="collection-card">
              <img 
                src={collection.image} 
                alt={collection.name}
                className="collection-image"
              />
              <div className="collection-overlay">
                <span className="collection-discount">{collection.discount}</span>
                <h3 className="collection-name">{collection.name}</h3>
                <Link to="/products" className="collection-link">Comprar</Link>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section 
        title="Produtos em Alta" 
        titleAlign="left"
        link={{ text: "Ver todos", href: "/products" }}
      >
        <ProductListing products={produtosFake} />
      </Section>

      <section className="special-offer-section">
        <div className="container">
          <div className="offer-content">
            <div className="offer-image">
              <img 
                src="https://raw.githubusercontent.com/digitalcollegebr/projeto-digital-store/main/public/produc-image-1.jpeg" 
                alt="Air Jordan Edição de Colecionador" 
              />
            </div>
            <div className="offer-text">
              <span className="offer-label">Oferta Especial</span>
              <h2 className="offer-title">Air Jordan Edição de Colecionador</h2>
              <p className="offer-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              </p>
              <Link to="/product/1" className="offer-button">Ver Oferta</Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default HomePage;