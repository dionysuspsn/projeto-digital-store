import React from "react";
import logoImg from '../../assets/logo-header.svg';

const Logo = () => {
    return (
        <div>   
            <img src={logoImg} alt="Logo Digital Store" style={{ width: '253px', height: '44px' }}/>
        </div>
    );
} 

export default Logo;