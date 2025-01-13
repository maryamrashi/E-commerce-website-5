// CartPage.js
import { BsCartPlus, BsCurrencyDollar } from 'react-icons/bs';

export default function CartPage() {
  const productPrice = 29.99; // Example product price

  return (
    <div className="flex flex-col items-center justify-center mt-20">
      <div className="flex items-center space-x-2 mb-4">
        <BsCartPlus size={24} className="text-green-500" />
        <h2 className="text-2xl font-semibold border-b-2 border-black pb-1">
          Added to Cart
        </h2>
      </div>
      <p className="text-center font-serif mt-8 text-lg text-gray-900">
        Your item has been successfully added to the cart. You can proceed to checkout or continue shopping.
      </p>
      
      <div className="flex items-center space-x-2 mt-4">
        <BsCurrencyDollar size={20} className="text-gray-900" />
        <span className="text-xl font-bold text-gray-900">{productPrice.toFixed(2)}</span>
      </div>
    </div>
  );
}
