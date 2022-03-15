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
      </Routes>
      <Nav/>
      <LandingPage/>
    </div>
  );
}

export default App;
