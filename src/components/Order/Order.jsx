import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { Link, useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Order.css';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import { FaArrowRight } from 'react-icons/fa';

const Order = () => {
    const savedCart = useLoaderData([]);
    const [cart, setCart] = useState(savedCart);
    // console.log(cart);

    const handleDeleteReviewItem = (id) => {
        const remaining = cart.filter(product => product._id !== id);
        setCart(remaining);
        removeFromDb(id);
    }

    const handleDeleteCart = () => {
        setCart([]);
        deleteShoppingCart();
    }

    return (
        <div className='shop-container'>
            <div className="review-container">
                {
                    cart?.map(product => <ReviewItem key={product._id} product={product} handleDeleteReviewItem={handleDeleteReviewItem} />)
                }
            </div>
            <div className="carts-container">
                <Cart cart={cart} handleDeleteCart={handleDeleteCart}>
                    <Link className='processed-link' to={'/checkout'}>
                        <button className='processed-btn'><span>Processed Checkout </span><FaArrowRight /></button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Order;