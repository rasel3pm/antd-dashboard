import "./App.css";
import "antd/dist/antd-with-locales";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./view/Home";
import Navbar from "./common/Navbar";
import Dashboard from "./pages/Dashboard";
import Error from "./pages/Error";
import Contact from "./pages/Contact";
import About from "./pages/About";
import LogIn from "./components/LogIn";
import Register from "./components/Register";
import Users from "./pages/Users";
import PrivateRoute from "./common/PrivateRoute";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Blogs from "./pages/Blogs";
import CreatePost from "./pages/CreatePost";
import Blog from "./pages/Blog";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return (
    <>
      <BrowserRouter>
        <Navbar />
        {isLoggedIn ? (
          <button
            onClick={() => {
              setIsLoggedIn(!isLoggedIn);
            }}
          >
            Log Out
          </button>
        ) : (
          <button
            onClick={() => {
              setIsLoggedIn(!isLoggedIn);
            }}
          >
            Log In
          </button>
        )}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute isLoggedIn={isLoggedIn}>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:title" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/logIn" element={<LogIn />} />
          <Route path="/register" element={<Register />} />
          <Route path="/Users" element={<Users />} />
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
