import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";

import MockAPI from "./mockman";
import {Nav} from "./Pages/Nav";
import {HomePage} from "./Pages/HomePage";
import {Product} from "./Pages/Product";

function App() {



  return (
    <div>
      <Routes>
      <Route path="/mock-api" element={<MockAPI />} />
      <Route path="/" element={<HomePage/>} />
      </Routes>
    </div>
  );
}

export default App;
