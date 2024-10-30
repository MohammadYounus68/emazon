import React from 'react';
import './Cart.css';
const Cart = (props) => {
    const cart = props.cart;
    const total = cart.reduce((total,prd) => total + prd.price , 0);
    let shipping = 0;
    if(total >= 100) {
        shipping = 50.00;
    }else if(total >= 50) {
        shipping = 3.00;
    }else {
        shipping = 0;
    }
    let tax = (total / 100).toFixed(2);
    let grandTotal = (total + shipping + Number(tax)).toFixed(2);
    return (
        <div className='cart'>
            <h1>Order Summary</h1>
            <p>items Ordered:{cart.length}</p>
            <p>Product Price:${total.toFixed(2)}</p>
            <p>Shiping Cost: ${shipping}</p>
            <p>Tax: ${tax}</p>
            <p>Total Price: ${grandTotal}</p>
        </div>
    );
};

export default Cart;