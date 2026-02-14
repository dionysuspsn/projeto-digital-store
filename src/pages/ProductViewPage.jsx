import React from 'react';

import Layout from '../pages/Layout'; 

import BuyBox from '../components/BuyBox/BuyBox';
import ProductOptions from '../components/ProductOptions/ProductOptions';
import Gallery from '../components/Gallery/Gallery';
import ProductDetails from '../components/ProductDetails/ProductDetails';
import Section from '../components/Section/Section'; 
import ProductListing from '../components/ProductListing/ProductListing'; 

const ProductViewPage = () => {
    
   
    const images = [
        { src: '/produc-image-1.jpeg' },
        { src: '/produc-image-2.jpeg' },
        { src: '/produc-image-3.jpeg' },
        { src: '/produc-image-4.jpeg' },
        { src: '/produc-image-5.jpeg' },
    ];

    
    const recommendedProducts = [
        {
            name: "K-Swiss V8 - Masculino",
            image: "https://raw.githubusercontent.com/digitalcollegebr/projeto-digital-store/main/assets/product-thumb-1.jpeg",
            price: 200,
            priceDiscount: 149.9
        },
        {
            name: "K-Swiss V8 - Feminino",
            image: "https://raw.githubusercontent.com/digitalcollegebr/projeto-digital-store/main/assets/product-thumb-2.jpeg",
            price: 200,
            priceDiscount: 149.9
        },
        {
            name: "K-Swiss V8 - Masculino",
            image: "https://raw.githubusercontent.com/digitalcollegebr/projeto-digital-store/main/assets/product-thumb-3.jpeg",
            price: 200,
            priceDiscount: 149.9
        },
        {
            name: "K-Swiss V8 - Masculino",
            image: "https://raw.githubusercontent.com/digitalcollegebr/projeto-digital-store/main/assets/product-thumb-4.jpeg",
            price: 200,
            priceDiscount: 149.9
        }
    ];

    return (
       
        <Layout>
            <div className="product-view-container" style={{ padding: '40px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                
               
                <div style={{ display: 'flex', gap: '40px', flexWrap: 'wrap', justifyContent: 'center', maxWidth: '1200px' }}>
                    
                    <Gallery 
                        width="700px" 
                        height="570px" 
                        radius="4px" 
                        showThumbs={true} 
                        images={images} 
                    />

                    <BuyBox 
                        name="Tênis Nike Revolution 6 Next Nature Masculino"
                        reference="38416711"
                        stars={4.7}
                        rating={90}
                        price={219.00}
                        priceDiscount={219.00}
                        description="O Tênis Nike Revolution 6 Next Nature Masculino é uma escolha perfeita para quem busca leveza e amortecimento."
                    >
                        <div style={{ marginTop: '20px' }}>
                            <p style={{ color: '#8F8F8F', fontSize: '14px', fontWeight: 'bold', margin: '0 0 5px 0' }}>Cor</p>
                            <ProductOptions options={['#6FEE87', '#FF6969', '#5D5D5D', '#6D70B7']} radius="50%" shape="circle" type="color" />
                        </div>
                        <div style={{ marginTop: '20px' }}>
                            <p style={{ color: '#8F8F8F', fontSize: '14px', fontWeight: 'bold', margin: '0 0 5px 0' }}>Tamanho</p>
                            <ProductOptions options={['38', '39', '40', '41', '42']} radius="4px" shape="square" type="text" />
                        </div>
                    </BuyBox>
                </div>

             
                <div style={{ width: '100%', maxWidth: '1200px', marginTop: '40px' }}>
                    <ProductDetails 
                        title="Descrição do produto"
                        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    />
                </div>

               
                <div style={{ width: '100%', maxWidth: '1200px', marginTop: '60px', marginBottom: '40px' }}>
                     <Section 
                        title="Produtos recomendados" 
                        titleAlign="left" 
                        link={{ text: "Ver todos", href: "/products" }}
                    >
                        <ProductListing products={recommendedProducts} />
                    </Section>
                </div>

            </div>
        </Layout>
    );
}

export default ProductViewPage;