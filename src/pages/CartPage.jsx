import React from 'react';
import { useCart } from '../hooks/useCart';
import { Minus, Plus, X } from 'lucide-react';

export const CartPage = () => {
  const { cart, removeFromCart, updateQuantity, total } = useCart();

  if (cart.length === 0) {
    return (
      <div className="store__container">
        <div className="text-center py-16">
          <h2 className="text-2xl font-semibold mb-4">Your cart is empty</h2>
          <p className="text-gray-600">Add some products to your cart to see them here.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="store__container">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
      <div className="bg-white rounded-lg shadow-md p-6">
        {cart.map(item => (
          <div key={item.id} className="flex items-center py-6 border-b last:border-b-0">
            <img src={item.image} alt={item.title} className="w-24 h-24 object-contain" />
            <div className="ml-6 flex-1">
              <h3 className="text-lg font-medium">{item.title}</h3>
              <p className="text-lg text-indigo-600 font-semibold mt-1">${item.price}</p>
              <div className="flex items-center mt-2">
                <button
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  className="p-1 rounded-full hover:bg-gray-100"
                >
                  <Minus className="w-5 h-5" />
                </button>
                <span className="mx-3 text-lg">{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="p-1 rounded-full hover:bg-gray-100"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </div>
            <button
              onClick={() => removeFromCart(item.id)}
              className="p-2 rounded-full hover:bg-gray-100"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        ))}
        
        <div className="mt-8 border-t pt-6">
          <div className="flex justify-between items-center text-xl font-semibold">
            <span>Total:</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <button className="w-full mt-6 bg-indigo-600 text-white py-3 rounded-md hover:bg-indigo-700 transition-colors text-lg font-medium">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};