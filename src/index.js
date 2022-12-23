import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import Nav from './components/Nav';
import Projetos from './pages/Projetos';
import Home from './pages/Home';
import React from 'react';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('webapp'));
root.render(
  <BrowserRouter>
    <Routes>

      <Route path='/' element={<Nav />} >
        <Route index element={<Home />} />
        <Route path='/Projetos' element={<Projetos />} />
        <Route path='/Game' element={<h1>GAME OVER!</h1>}/>
      </Route>

    </Routes>
  </BrowserRouter>
);
