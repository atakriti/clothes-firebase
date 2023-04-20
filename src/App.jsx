import React from "react";
import Header from "./Header/Header";
import "./style.scss"
import {Routes,Route} from "react-router-dom"
import Home from "./Home/Home";
import Shop from "./Shop/Shop";
import Single from "./Single/Single";
import Register from "./Register/Register";
import Sale from "./Sale/Sale";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/shop" element={<Shop/>}/>
        <Route path="/sale" element={<Sale/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/single/:id" element={<Single/>}/>
      </Routes>
    </div>
  );
}

export default App;
