import React from "react";
import './Catalog.css';
import { PRODUCTS } from "../../products";
import Product from "../../components/Products"; // Import Product without curly braces for default export
import Navbar from "../../components/Navbar";
import { ShopContext } from "../../context/shop-context";
import Footer from "../../components/Footer"
const Catalog = () => {

  return (
    <div>
  <Navbar/>
    <div className="shop"> 
      <div className="shopTitle">
        <h1 className="text-white">SneakerHeads n Company</h1>
      </div>
      <div className="products">
        {PRODUCTS.map((product) => (
          <Product key={product.id} data={product} />
        ))}
      </div>
    </div>
    <Footer />
    </div>
  );
};

export default Catalog;
