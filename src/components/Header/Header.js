import React from 'react';
import './Header.css';
import logo from '../../images/logo.png';
const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt="" />
            <nav>
                <a href="/shope">Shope</a>
                <a href="/order">Order</a>
                <a href="/review">Review</a>
                <a href="/manage">Mangae Inventory</a>
            </nav>
        </div>
    );
};

export default Header;