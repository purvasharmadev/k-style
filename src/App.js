import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";

import MockAPI from "./mockman";
import {Nav} from "./Pages/Nav";
import {LandingPage} from "./Pages/LandingPage";

function App() {



  return (
    <div>
      <Routes>
      <Route path="/mock-api" element={<MockAPI />} />

        <Route path="/" element={<LandingPage/>} />
      </Routes>
      <Nav/>
    </div>
  );
}

export default App;
