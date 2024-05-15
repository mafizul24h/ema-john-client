import { getShoppingCart } from "../utilities/fakedb";

const cardProductsLoader = async () => {
    const loadedProducts = await fetch('products.json');
    const products = await loadedProducts.json();

    const storedCart = getShoppingCart();
    const savedCart = [];

    for(const id in storedCart) {
        const addProduct = products.find(pd => pd.id === id);
        if(addProduct) {
            const quantity = storedCart[id];
            addProduct.quantity = quantity;
            savedCart.push(addProduct);
        }
    }

    return savedCart;
}

export default cardProductsLoader;