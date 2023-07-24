import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PaymentGateway from '../PaymentGateway';
import "./style.css"

export default function ProductDescription() {
  const [product, setProduct] = useState({});
  const params = useParams();
  const productId = params.id;

  useEffect(() => {
    // Fetch product details from the API when the component mounts or when the productId changes
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then(res => res.json())
      .then(product => {
        // Set the fetched product to the state
        setProduct(product);
      });
  }, [productId]);

  const handleProceedToPayment = () => {
    // Render the PaymentGateway component when the "Proceed to Payment" button is clicked
    return <PaymentGateway productId={productId} />;
  };

  return (
    <div className='master-div'>
      <h2>Product Details</h2>
      <img src={product.image} width="200" alt={product.title} />
      <h5>{product.title}</h5>
      <p>{product.description}</p>
      <p>Price: {product.price}</p>
      <p>Rating: {product.rating?.rate}</p>

      <Link to={"/Cart"}>
        <button onClick={handleProceedToPayment}>Proceed to Payment</button>
      </Link>
    </div>
  );
}
