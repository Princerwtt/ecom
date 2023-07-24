import React from 'react';
import './style.css';

export default function Home(props) {
  return (
    <>
      <h1 id='heading' >Welcome back {props.name} </h1>
    </>
  )
}
