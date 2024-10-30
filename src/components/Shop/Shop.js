import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Product from '../Product/Product';
import './Shop.css';
import Cart from '../Cart/Cart';

const Shop = () => {
    const first10 = fakeData.slice(0,10);
    const [product] = useState(first10);
    const [cart,setCarts] = useState([]);
    const handleAddProduct = (product) => {
        const newCart = [...cart,product];
        setCarts(newCart);
    }
    return (
        <div className='shop-container'>
            <div className='product-container'>
                    <ul>
                        {product.map(pd => <Product product={pd} handleAddProduct={handleAddProduct}></Product>)}
                    </ul>
            </div>
            <div className='cart-container'>
                    <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;