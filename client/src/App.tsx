import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./componentes/Login";
import Register from "./componentes/Register";
import CreateProduct from "./componentes/CreateProduct";
import Home from "./componentes/Home";
import { DetailProduct } from "./componentes/DetailProduct";
import  ProductCards  from "./componentes/ProductCards";
function App() {
  return (
    
    <div className="App flex flex-col items-center bg-[#FFFDE7]">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Register" element={<Register/>}/>
        <Route path="/Createproduct" element={<CreateProduct/>}/>
        <Route path="/products/:id" element={<DetailProduct  />}/>
        <Route path="/" element={<ProductCards />}/>
      </Routes>
    </div>
    
  );
}

export default App;
