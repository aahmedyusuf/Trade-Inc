import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Attentition_Page from './Pages/Attentition_Page';
import Checkout from './Pages/Checkout';
import Home from './Pages/Home';
import Thank_You from './Pages/Thank_You';
import Manufacturer from './Pages/Manufacturer';
import CreateProduct from './Pages/CreateProduct';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Attentition_Page />} />
        </Route>
        <Route path="/home">
          <Route index element={<Home />} />
        </Route>
        <Route path="/Checkout">
          <Route index element={<Checkout />} />

        </Route>
        <Route path="/Thank_You">
          <Route index element={<Thank_You />} />

        </Route>
        <Route path="/product">
        </Route>
        <Route path="/Manufacturer">
          <Route index element={<Manufacturer />} />
        </Route>
        <Route path="/CreateProduct">
          <Route index element={<CreateProduct />} />
        </Route>
      </Routes>
    </BrowserRouter>);
}

export default App;
