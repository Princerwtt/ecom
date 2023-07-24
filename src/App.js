import './App.css';
import Home from './component/Home';
import Navigation from './component/Navigation';
import ProductDescription from './component/ProductDescription';
import Products from './component/Products';
import Signin from './component/Signin';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Cart from './component/Cart';

function App(props) {

  const [signedUser, setSignedUser] = useState(''); // State variable to store the signed-in user

  return (
    <>
      <BrowserRouter>
        <Navigation /> {/* Render the navigation component */}
        <Routes>
          <Route path='/' element={<Home name={signedUser} />} /> {/* Render the Home component */}
          <Route path='/products' element={<Products />} /> {/* Render the Products component */}
          <Route path='/products/:id' element={<ProductDescription />} /> {/* Render the ProductDescription component */}
          <Route path='/signin' element={<Signin setSignedUser={setSignedUser} signedUser={signedUser} />} /> {/* Render the Signin component */}
          <Route path='/cart' element={<Cart />} /> {/* Render the Cart component */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
