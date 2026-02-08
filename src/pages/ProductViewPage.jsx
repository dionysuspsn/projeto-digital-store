import React from 'react';
import Layout from './Layout.jsx'; 
import BuyBox from '../components/BuyBox/BuyBox.jsx'
const ProductViewPage = () => {
    return (
        <Layout>
            <div className="product-view-container" style={{ padding: '20px', display: 'flex', justifyContent: 'center' }}>
                
                
                <BuyBox 
                    name="Tênis Nike Revolution 6 Next Nature Masculino"
                    reference="38416711"
                    stars={4.7}
                    rating={90}
                    price={219.00}
                    priceDiscount={219.00}
                    description="O Tênis Nike Revolution 6 Next Nature Masculino é uma escolha perfeita para quem busca leveza e amortecimento."
                >
                </BuyBox>

            </div>
        </Layout>
    );
}

export default ProductViewPage;