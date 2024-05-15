import React from 'react';
import './ReviewItem.css';
import { FaTrashAlt } from "react-icons/fa";

const ReviewItem = ({ product, handleDeleteReviewItem }) => {
    const { id, img, name, quantity, price, shipping } = product;
    // console.log(product);
    return (
        <div className='review-item'>
            <img src={img} alt={name} />
            <div className='review'>
                <p className="product-title">{name}</p>
                <p>Price: <span className='review-itm'>${price}</span></p>
                <p>Quantity: <span className='review-itm'>{quantity}</span></p>
                <p>Shipping Charge: <span className='review-itm'>${shipping}</span></p>
            </div>
            <button onClick={() => handleDeleteReviewItem(id)} className='delete-btn'>
                <FaTrashAlt className='delete-icon' />
            </button>
        </div>
    );
};

export default ReviewItem;