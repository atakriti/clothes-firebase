import React, { useContext } from "react";
import Header from "./Header/Header";
import "./style.scss"
import {Routes,Route} from "react-router-dom"
import Home from "./Home/Home";
import Shop from "./Shop/Shop";
import Single from "./Single/Single";
import Register from "./Register/Register";
import Sale from "./Sale/Sale";
import Cart from "./Cart/Cart";
import { context } from "./Context";
function App() {
let {loading} = useContext(context)
  return (
    <div className="App"> 
      {loading && (
        <div className="loading">
          <span class="loader">Loading</span>
        </div>
        )}
      
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/shop" element={<Shop/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/sale" element={<Sale/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/single/:id" element={<Single/>}/>
        </Routes>
       
    </div>
  );
}

export default App;
