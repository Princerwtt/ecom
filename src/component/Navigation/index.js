import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import { RxAvatar } from 'react-icons/rx';

export default function Navigation() {
  return (
    <div>
        <ul className='nav-list' >
            <li>
                <Link to="/"><button className='nav-btn-logo'>PReCOM</button></Link>
            </li>
            <li>
                <Link to="/products"><button className='nav-btn-men' >MEN</button></Link>
            </li>
            <li>
                <Link to="/products"><button className='nav-btn-women' >WOMEN</button></Link>
            </li>
            <li>
                <Link to="/products"><button className='nav-btn-kids' >KIDS</button></Link>
            </li>
            <li>
                <Link to="/products"><button className='nav-btn-hm' >HOME & LIVING</button></Link>
            </li>
            <li>
                <Link to="/products"><button className='nav-btn-beauty' >BEAUTY</button></Link>
            </li>
            <li>
                <Link to="/products"><button className='nav-btn-studio' >STUDIO<sup>New</sup></button></Link>
            </li>
            <li>
            <input className="form-control me-5" id='searchbar' type="search" placeholder='Search for products, brands and more' aria-label="Search"/>
            </li>
            <li>
                <Link to="/signin"><button className='nav-btn-account' ><RxAvatar id='account' /></button></Link>
            </li>
            {/* <li>
                <Link to="/cart"><button className='nav-btn-cart' >CART</button></Link>
            </li> */}
        </ul>
    </div>
  )
}