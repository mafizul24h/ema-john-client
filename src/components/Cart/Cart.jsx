import React from 'react';
import './Cart.css';

const Cart = ({cart}) => {
    // console.log(cart);
    let total = 0;
    let shippingCharge = 0;
    for(const product of cart) {
        total = total + product.price;
        shippingCharge = shippingCharge + product.shipping;

    }
    const tax = total + 0.10;
    const grandTotal = total + shippingCharge + tax;
    // const totalPrice = cart.reduce((sum, curr) => sum + curr.price, 0);
    // console.log(tax);
    
    return (
        <div className='cart'>
            <h2>Order Summary</h2>
            <p><strong>Selected Items: ${cart?.length}</strong></p>
            <p><strong>Total Price: ${total}</strong></p>
            <p><strong>Total Shipping Charge: ${shippingCharge}</strong></p>
            <p><strong>Tax: ${tax.toFixed(2)}</strong></p>
            <h3>Grand Total: ${grandTotal.toFixed(2)}</h3>
        </div>
    );
};

export default Cart;