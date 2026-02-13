import React from 'react';
import Layout from '../pages/Layout';
import BuyBox from '../components/BuyBox/BuyBox';
import ProductOptions from '../components/ProductOptions/ProductOptions';
import Gallery from '../components/Gallery/Gallery';

const ProductViewPage = () => {
    
    const images = [
        { src: '/produc-image-1.jpeg' },
        { src: '/produc-image-2.jpeg' },
        { src: '/produc-image-3.jpeg' },
        { src: '/produc-image-4.jpeg' },
        { src: '/produc-image-5.jpeg' },
    ];  
    return (
        <Layout>
            <div className="product-view-container" style={{ padding: '40px', display: 'flex', justifyContent: 'center', gap: '40px', flexWrap: 'wrap' }}>
                
                
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
        </Layout>
    );
}

export default ProductViewPage;