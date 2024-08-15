// src/components/ProductList.js

import PropTypes from 'prop-types';
import ProductCard from './ProductCard';

const ProductList = ({ products }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
};

// Define prop types
ProductList.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            // Add other product properties here
        })
    ).isRequired,
};

export default ProductList;
