import React from 'react';
import './Cart.css';

const Cart = ({ cart }) => {
    // console.log(cart);
    let total = 0;
    let shippingCharge = 0;
    let quantity = 0;
    for (const product of cart) {
        /* if(product.quantity === 0){
            product.quantity = 1;
        } */
        // product.quantity = product.quantity || 1;
        total = total + product.price * product.quantity;
        shippingCharge = shippingCharge + product.shipping;
        quantity = quantity + product.quantity;
    }
    const tax = total + 0.10;
    const grandTotal = total + shippingCharge + tax;
    // const totalPrice = cart.reduce((sum, curr) => sum + curr.price, 0);
    // console.log(tax);

    return (
        <div className='cart'>
            <h2>Order Summary</h2>
            <p><strong>Selected Items: ${quantity}</strong></p>
            <p><strong>Total Price: ${total}</strong></p>
            <p><strong>Total Shipping Charge: ${shippingCharge}</strong></p>
            <p><strong>Tax: ${tax.toFixed(2)}</strong></p>
            <h3>Grand Total: ${grandTotal.toFixed(2)}</h3>
        </div>
    );
};

export default Cart;