import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import Base from './components/Base';
import Projetos from './pages/Projetos';
import Home from './pages/Home';
import React from 'react';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('webapp'));
root.render(
  <BrowserRouter>
    <Routes>

      <Route path='/' element={<Base />} >
        <Route index element={<Home />} />
        <Route path='/Projetos' element={<Projetos />} />
        {/* <Route path='/Game' element={<Game />} /> */}
      </Route>

      <Route path='/*' element={
        <h2 className='center' style={{ position: 'relative', zIndex: 2, marginTop: '20%', color: 'white' }}>Ops: 404. Isso significa que encontrou o desconhecido 🧐🤠🤖.</h2>
      }/>

    </Routes>
  </BrowserRouter>
);
