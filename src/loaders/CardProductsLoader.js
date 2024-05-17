import { getShoppingCart } from "../utilities/fakedb";

const cardProductsLoader = async () => {
    const storedCart = getShoppingCart();
    const ids = Object.keys(storedCart);
    console.log(ids);

    const loadedProducts = await fetch('http://localhost:5000/productsByIds', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(ids)
    });
    const products = await loadedProducts.json();

    const savedCart = [];

    for(const id in storedCart) {
        const addProduct = products.find(pd => pd._id === id);
        if(addProduct) {
            const quantity = storedCart[id];
            addProduct.quantity = quantity;
            savedCart.push(addProduct);
        }
    }

    return savedCart;
}

export default cardProductsLoader;