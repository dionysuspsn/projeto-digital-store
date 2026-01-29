import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Layout from './pages/Layout';
import HomePage from './pages/homePage';
//import ProductListing from './components/ProductListing/ProductListing';
import ProductViewPage from './pages/ProductViewPage';
import ProductListingPage from './pages/ProductListingPage';

function App() {
  // Simulação de um Banco de Dados (API Fake)
  /*const produtosFake = [
    { name: "Tênis Nike", image: "https://raw.githubusercontent.com/digitalcollegebr/projeto-digital-store/main/public/product-thumb-1.jpeg", price: 200, priceDiscount: 149.9 },
    { name: "Tênis Adidas", image: "https://raw.githubusercontent.com/digitalcollegebr/projeto-digital-store/main/public/product-thumb-2.jpeg", price: 200, priceDiscount: 149.9 },
    { name: "Sapato Puma", image: "https://raw.githubusercontent.com/digitalcollegebr/projeto-digital-store/main/public/product-thumb-3.jpeg", price: 400 },
    { name: "Tênis Fila", image: "https://raw.githubusercontent.com/digitalcollegebr/projeto-digital-store/main/public/product-thumb-4.jpeg", price: 200, priceDiscount: 149.9 },
    { name: "Tênis Vans", image: "https://raw.githubusercontent.com/digitalcollegebr/projeto-digital-store/main/public/product-thumb-5.jpeg", price: 200, priceDiscount: 149.9 },
  ];

  return (
    <div style={{ padding: '40px', backgroundColor: '#f5f5f5' }}>
       <ProductListing products={produtosFake} />
    </div>
  );*/

  return (
    <BrowserRouter>
      <Routes>
        {/* Rota Raiz: Item 5 do README */}
        <Route path="/" element={
          <Layout>
            <HomePage />
          </Layout>
        } />

        {/* Rota de Listagem: Itens 3.1.2 e 6 do README */}
        <Route path="/products" element={
          <Layout>
            <ProductListingPage />
          </Layout>
        } />

        {/* 
        Rota de Detalhes: Item 7 do README 
        e o :id faz com q a página BuyBox carregue o produto correto 
        */}
        
        <Route path="/product/:id" element={
          <Layout>
            <ProductViewPage />
          </Layout>
        } />

        {/* Rota para categorias (ta no item 3.1.5) */}
        <Route path="/categories" element={
          <Layout>
            <div style={{ padding: '100px', textAlign: 'center' }}>
              <h1>Categorias (Em breve)</h1>
            </div>
          </Layout>
        } />

        {/* Rota para meus pedidos (ta no item 3.1.5) */}
        <Route path="/my-orders" element={
          <Layout>
            <div style={{ padding: '100px', textAlign: 'center' }}>
              <h1>Meus Pedidos (Em breve)</h1>
            </div>
          </Layout>
        } />

      </Routes>
    </BrowserRouter>
  );
};

export default App;