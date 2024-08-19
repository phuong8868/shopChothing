import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';
import LoginSignup from './Components/LoginSignup';
import Home from './Components/Home';
import Notfound from './Components/NotFound';
import ProductDetails from "./Components/ProductDetails";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="/login" element={<LoginSignup />} />
          <Route path="/detail/:id" element={<ProductDetails />} />
          <Route path="*" element={<Notfound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
