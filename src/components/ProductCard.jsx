import React from 'react';
import { Star } from 'lucide-react';
import { useCart } from '../hooks/useCart';

export const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="product-card">
      <div className="product-card__image-container">
        <img
          src={product.image}
          alt={product.title}
          className="product-card__image"
        />
      </div>
      <div className="product-card__content">
        <h3 className="product-card__title">{product.title}</h3>
        <p className="product-card__description">{product.description}</p>
        <div className="product-card__rating">
          <Star className="w-4 h-4 text-yellow-400 fill-current" />
          <span className="text-sm text-gray-600 ml-1">{product.rating.rate}</span>
          <span className="text-sm text-gray-500 ml-2">({product.rating.count} reviews)</span>
        </div>
        <div className="mt-4 flex justify-between items-center">
          <span className="product-card__price">${product.price}</span>
          <button
            onClick={() => addToCart(product)}
            className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};