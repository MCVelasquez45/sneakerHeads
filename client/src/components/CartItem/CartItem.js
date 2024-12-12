import React, {useContext} from 'react'
import './CartItem.css'
import { ShopContext } from '../../context/shop-context';

const CartItem = (props) => {
  const { id, productName, price, productImage } = props.data; // Destructure props
const { cartItems, addToCart,removeFromCart,updateCartItemCount  }= useContext(ShopContext)
  return (
    <div className="cartItem">
      <img src={productImage} alt={productName} className="productImage" />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>$ {price}</p>
        <p></p>
        <div className='countHandler '>
<button onClick={()=> removeFromCart(id)}>-</button>
{/* input handles updateCartItemCount function from shop-context.js */}
<input className='quantity' value={cartItems[id]} 
onChange={(e) => updateCartItemCount(Number(e.target.value),id) }/>
<button onClick={()=> addToCart(id)}>+</button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
