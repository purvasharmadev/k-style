import {Routes,Route} from "react-router-dom"
import {Product} from "./Pages/Product.jsx"
import MockAPI from "./mockman";
import {HomePage} from "./Pages/HomePage";



export default function URLRoutes(){
  return (
  <Routes>
  <Route path="/mock-api" element={<MockAPI />} />
  <Route path="/" element={<HomePage/>} />
  <Route path="/product" element={<Product/>}/>
</Routes>
  )

}