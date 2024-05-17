import React, { useEffect, useState } from 'react';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../utilities/fakedb';
import { Link, useLoaderData } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const { totalProducts } = useLoaderData();
    const [currentPage, setCurrentPage] = useState(1);
    const [itemParPage, setItemParPage] = useState(10);

    const totalPage = Math.ceil(totalProducts / itemParPage);
    // console.log(totalPage);

    /*     const pageNumbers = [];
        for (let i = 1; i <= totalPage; i++) {
            pageNumbers.push(i);
        } */

    const pageNumbers = [...Array(totalPage).keys()];
    // console.log(pageNumbers);

    /*     useEffect(() => {
            fetch('http://localhost:5000/products')
                .then(res => res.json())
                .then(data => setProducts(data))
        }, []); */

    useEffect(() => {
        fetch(`http://localhost:5000/products?page=${currentPage}&limit=${itemParPage}`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [currentPage, itemParPage])

    useEffect(() => {
        const storedCart = getShoppingCart();
        const ids = Object.keys(storedCart);

        fetch('http://localhost:5000/productsByIds', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(ids)
        })
            .then(res => res.json())
            .then(cartProducts => {
                // console.log(cartProducts);
                const savedCart = [];
                // console.log(storedCart);
                for (const id in storedCart) {
                    const addedProduct = cartProducts.find(product => product._id === id);

                    if (addedProduct) {
                        const quantity = storedCart[id];
                        addedProduct.quantity = quantity;
                        savedCart.push(addedProduct);
                    }
                }
                setCart(savedCart);
            })
    }, []);

    const handleAddToCart = (product) => {
        // console.log(product);
        let newCart = [];
        // const newCart = [...cart, product];
        const exists = cart.find(pd => pd._id === product._id);
        if (!exists) {
            product.quantity = 1;
            newCart = [...cart, product]
        } else {
            exists.quantity = exists.quantity + 1;
            const remaining = cart.filter(pd => pd._id !== product._id);
            newCart = [...remaining, exists];
        }
        setCart(newCart);
        addToDb(product._id);
    }

    const handleDeleteCart = () => {
        setCart([]);
        deleteShoppingCart();
    }

    const options = [10, 20, 50, totalProducts];
    const handleSelectChange = (event) => {
        setItemParPage(parseInt(event.target.value));
        setCurrentPage(1);
    }

    return (
        <>
            <div className='shop-container'>
                <div className="products-container">
                    {
                        products?.map(product => <Product key={product._id} product={product} handleAddToCart={handleAddToCart} />)
                    }
                </div>
                <div className="carts-container">
                    <Cart cart={cart} handleDeleteCart={handleDeleteCart}>
                        <Link className='processed-link' to={'/order'}>
                            <button className='processed-btn'><span>Review Order </span> <FaArrowRight /></button>
                        </Link>
                    </Cart>
                </div>
            </div>
            {/* Pagination  */}
            <div className="pagination">
                {/* {currentPage} */}
                {pageNumbers?.map(number => <button key={number} onClick={() => setCurrentPage(number + 1)} className={currentPage === number + 1 ? 'selected-page' : ''} >
                    {number + 1}
                </button>)}
                <select className='select-option' value={itemParPage} onChange={handleSelectChange}>
                    {
                        options?.map(option => (<option key={option} value={option}>
                            {option}
                        </option>))
                    }
                </select>
            </div>
        </>
    );
};

export default Shop;