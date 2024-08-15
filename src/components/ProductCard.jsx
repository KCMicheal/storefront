// src/components/ProductCard.js

import PropTypes from 'prop-types';

const ProductCard = ({ product }) => {
  return (
    <div className="border rounded p-4">
      <img src={product.image} alt={product.title} className="w-full h-48 object-cover mb-2" />
      <h3 className="text-lg font-semibold">{product.title}</h3>
      <p className="text-gray-700">${product.price}</p>
      <div className="mt-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded mr-2">Add to Cart</button>
        <button className="bg-green-500 text-white px-4 py-2 rounded">View Details</button>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default ProductCard;
