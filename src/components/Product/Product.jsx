import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import './Product.css'

const Product = (props) => {
    const { img, name, price, seller, ratings } = props.product;
    const handleAddToCart = props.handleAddToCart;

    return (
        <div className='products'>
            <img src={img} alt={name} />
            <div className='product-container'>
                <h5>{name}</h5>
                <p className='product-price'><strong>Price:</strong> ${price}</p>
                <p ><strong>Manufacturer:</strong> {seller && seller}</p>
                <p ><strong>Rating:</strong> {ratings && ratings} Star</p>
            </div>
            <button onClick={() => handleAddToCart(props.product)} className='btn-cart'>Add To Cart <FaShoppingCart /></button>
        </div>
    );
};

export default Product;