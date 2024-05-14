import Sidenav from "./components/Sidenav";
import {Routes, Route, BrowserRouter} from "react-router-dom";
import React from "react";
import VenteRevenue from "../src/pages/VenteRevenue";
import InventairePoduit from "../src/pages/InventairePoduit";
import CommandeActivite from "../src/pages/CommandeActivite";
import PromotionProduction from "../src/pages/PromotionProduction";

import Login from "./pages/Login";




function App() {
  return (
    <BrowserRouter>

    <Routes>
      <Route path="/" exact element={<VenteRevenue />}/>
      <Route path="/VenteRevenue" exact element={<VenteRevenue />}/>
      <Route path="/InventairePoduit" exact element={< InventairePoduit />}/>
      <Route path="/CommandeActivite" exact element={<CommandeActivite />}/>
      <Route path="/promotionProduction" exact element={<PromotionProduction />}/>
      <Route path="/login" exact element={<Login />}/>

    </Routes>




    </BrowserRouter>
  );
}

export default App;
