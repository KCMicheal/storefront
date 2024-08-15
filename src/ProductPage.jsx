// src/ProductPage.js
import { useState, useEffect } from 'react';
import { fetchProducts } from './api';
import ProductSlider from './components/ProductSlider';
import ProductList from './components/ProductList';

const ProductPage = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const loadProducts = async () => {
            const productsData = await fetchProducts();
            setProducts(productsData);
        };
        loadProducts();
    }, []);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-6">Product Page</h1>
            <ProductSlider products={products.slice(0, 8)} />
            <h2 className="text-2xl font-bold mt-8 mb-4">All Products</h2>
            <ProductList products={products} />
        </div>
    );
};

export default ProductPage;
