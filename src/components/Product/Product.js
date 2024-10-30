import React from 'react';
import './Product.css';
const Product = (props) => {
    const {name,img,seller,price,stock} = props.product;
    return (
        <div className='product'>
                <div className='product-img'>
                    <img src={img} alt="" />
                </div>
            <div>
                <h4 className='product-name'>{name}</h4>
                <br/>
                <p><small>By: </small>{seller}</p>
                <p><span className='price-name'>Price: $</span>{price}</p>
                <p><small>Only {stock} left in stock - Order soon</small></p>
                <button className='product-btn' onClick={()=>{props.handleAddProduct(props.product)}}>
                        Click Me
                </button>
            </div>
        </div>
    );
};

export default Product;