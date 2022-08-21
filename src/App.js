import logo from './logo.svg';
import './bootstrap.min.css';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GetImageList from './GetImageList';
import PostDetails from './PostDetails';
import {useState, useEffect } from 'react'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<GetImageList />} />
        <Route path="/posts/:id" element={<PostDetails />} />
        <Route path="/def" element={<div>hi def</div>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
