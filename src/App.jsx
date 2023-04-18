import React from "react";
import Header from "./Header/Header";
import "./style.scss"
import {Routes,Route} from "react-router-dom"
import Home from "./Home/Home";
import Shop from "./Shop/Shop";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/shop" element={<Shop/>}/>
      </Routes>
    </div>
  );
}

export default App;
