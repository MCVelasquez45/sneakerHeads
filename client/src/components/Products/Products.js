import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

const Products = (props) => {
  const { id, productName, price, productImage } = props.data; // Destructure props
  const { addToCart, cartItems } = useContext(ShopContext)
  const cartItemsAmount = cartItems[id]
  return (
    <div className="product" key={id}>
      <img src={productImage} alt={productName} />  {/* Display product image */}
      <h2>{productName}</h2>                         {/* Display product name */}
      <p>${price}</p>  {/* Display product price */}
      <button className="addToCartBttn" onClick={() => { addToCart(id) }} >
        Add To Cart{cartItemsAmount > 0 && <>({cartItemsAmount})</>}
      </button>
    </div>
  );
};

export default Products;