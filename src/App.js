import "./App.css";
import "antd/dist/antd-with-locales";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./view/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
