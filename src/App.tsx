import React from 'react';
import './App.scss';
import { Route, Routes } from 'react-router';
import HomePage from './pages/home/HomePage';
import ChampsPage from './pages/champs/ChampsPage';
import ItemsPage from './pages/items/ItemsPage';
import { ChampsDetailsPage } from './pages/champs/ChampsDetailsPage';


function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="champs" element={<ChampsPage />}></Route>
      <Route path="champs/:id" element={<ChampsDetailsPage/>}></Route>
      <Route path="items" element={<ItemsPage />}></Route>
    </Routes>
  );
}

export default App;
