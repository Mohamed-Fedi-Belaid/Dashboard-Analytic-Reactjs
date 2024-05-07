import Sidenav from "./components/Sidenav";
import {Routes, Route, BrowserRouter} from "react-router-dom";
import React from "react";
import Home from "./pages/Home";
import PerfermenceDesVentes from "./pages/PerfermanceDesVentes";
import PerfermanceParProduit from "./pages/PerfermanceParProduit";
import AnalyseClientFournisseur from "./pages/AnalyseClientFournisseur";
import login from "./pages/Login";
import Login from "./pages/Login";



function App() {
  return (
    <BrowserRouter>

    <Routes>
      <Route path="/" exact element={<Home />}/>
      <Route path="/PerfermenceDesVentes" exact element={< PerfermenceDesVentes />}/>
      <Route path="/PerfermanceParProduit" exact element={<PerfermanceParProduit />}/>
      <Route path="/AnalyseClientFournisseur" exact element={<AnalyseClientFournisseur />}/>
      <Route path="/login" exact element={<Login />}/>

    </Routes>




    </BrowserRouter>
  );
}

export default App;
