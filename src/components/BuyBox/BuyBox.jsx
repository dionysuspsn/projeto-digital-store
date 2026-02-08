import React from 'react';
import './BuyBox.css'; 

const BuyBox = ({ name, reference, stars, rating, price, priceDiscount, description, children }) => {
    return (
        <div className="buy-box">
           
            <div className="product-title">
                <h3>{name}</h3>
                <span className="product-reference">Ref: {reference}</span>
            </div>

            
            <div className="product-rating">
                <span className="stars-box">{stars} ★</span>
                <span className="total-reviews">({rating} avaliações)</span>
            </div>

            
            <div className="price-container">
                {priceDiscount ? (
                    <>
                        <span className="price-riscado">R$ {price}</span>
                        <h2 className="price-promo">R$ {priceDiscount}</h2>
                    </>
                ) : (
                    <h2 className="price-normal">R$ {price}</h2>
                )}
            </div>

            
            <div className="product-description">
                <p>{description}</p>
            </div>

            
            <div className="product-options">
                {children}
            </div>


            <button className="btn-buy">
                COMPRAR
            </button>
        </div>
    );
}

export default BuyBox;