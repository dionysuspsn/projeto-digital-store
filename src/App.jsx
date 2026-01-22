import ProductListing from './components/ProductListing/ProductListing';

function App() {
  // Simulação de um Banco de Dados (API Fake)
  const produtosFake = [
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
  );
}

export default App;