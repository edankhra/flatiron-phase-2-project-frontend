import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import '../src/styles.css';
import Home from './pages/Home';
import About from './pages/About';
import Pricing from './pages/Pricing';
import Contect from './pages/Contect';
import { Component } from 'react';



function App() {
  switch(window.location.pathname){
    case "/":
    Component = Home
    break;

    case "/about":
    Component = About
    break;

    case "/pricing":
    Component = Pricing
    break;

    case "/contect":
    Component = Contect
    break;
  }
  
  return (
    <>
    <Navbar/>
    <Component/>

    </>
  );
}

export default App;
