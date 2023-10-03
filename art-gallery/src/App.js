import './index.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import PaintingList from './components/PaintingList';
import PaintingForm from './components/PaintingForm';
import Home from './components/Home';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/paintings" element={<PaintingList/>}></Route>
        <Route path="/add" element={<PaintingForm/>}></Route>
      </Routes>
    </Router>
  );
};

export default App;
