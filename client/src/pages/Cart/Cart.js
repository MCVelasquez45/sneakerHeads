import React, { useContext } from "react";
import { PRODUCTS } from "../../products";
import { ShopContext } from "../../context/shop-context";
import CartItem from '../../components/CartItem';
import NavBar from '../../components/Navbar';
import { useNavigate } from "react-router-dom";
import './Cart.css';

const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const navigate = useNavigate();  // Fixed typo from 'negative' to 'navigate'
  const totalAmount = getTotalCartAmount();

  return (
    <div>
      <NavBar />
      <div className="cart">
        <div>
          <h1>Your Cart Items</h1>
        </div>
        <div className="cartItems">
          {PRODUCTS.map((product) => {
            if (cartItems[product.id] !== 0) {
              return <CartItem key={product.id} data={product} />;
            }
            return null;
          })}
        </div>

        {totalAmount > 0 ? (
          <div className="checkout">
            <p>Subtotal: $ {totalAmount}</p>
            <button onClick={() => navigate('/catalog')}>Continue Shopping</button>
            <button>Checkout</button>
          </div>
        ) : (
          <h1>Your cart is empty.</h1>  // Provide feedback when the cart is empty
        )}
      </div>
    </div>
  );
};

export default Cart;
