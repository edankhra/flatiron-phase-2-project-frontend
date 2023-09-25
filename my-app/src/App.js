import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import '../src/styles.css';
import Home from './pages/Home';
import About from './pages/About';
import Paintinglist from './pages/Paintinglist';
import Paintingform from './pages/Paintingform';
import { Component } from 'react';



function App() {
  switch(window.location.pathname){
    case "/":
    Component = Home
    break;

    case "/about":
    Component = About
    break;

    case "/paintinglist":
    Component = Paintinglist
    break;

    case "/paintingform":
    Component = Paintingform
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
