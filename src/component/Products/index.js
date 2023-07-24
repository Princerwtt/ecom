import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

export default function Products() {
  const [products, setProducts] = useState([]); // State variable to store the list of products
  const [cart, setCart] = useState([]); // State variable to store the items in the cart

  useEffect(() => {
    // Fetch the list of products from the API when the component mounts
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then((data) => {
        // Set the fetched products to the state
        setProducts(data);
      });
  }, []);

  const addToCart = (product) => {
    // Add a product to the cart when the "Add to Cart" button is clicked
    setCart([...cart, product]);
  };

  return (
    <main>
      <article>
        <ul className='nav-list-two'>
          {products.map((item) => (
            <li key={item.id}>
              <Link to={`/products/${item.id}`} state={item}>
                <img src={item.image} alt="productImage" width='150' height="150" />
                <p id='title'>{item.title}</p>
              </Link>
              <button id='cartitem' onClick={() => addToCart(item)}>Add to Cart +</button>
            </li>
          ))}
        </ul>
      </article>
      <aside>
        <h3 id='heading'>Cart</h3>
        <ul className='cart-product'>
          {cart.map((product) => (
            <li key={product.id}>
              <img src={product.image} alt={product.title} width='120' />
              {product.title} - ${product.price}
            </li>
          ))}
        </ul>
        <Link to="/Cart">
          {cart.length > 0 && (
            <button id='cartitem'>Proceed to Payment</button>
          )}
        </Link>
      </aside>
      <footer>
        <h3>Thank you</h3>
      </footer>
    </main>
  );
}
