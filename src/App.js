import "./App.css";
import Sidebar from "./Sidebar";
import Postapi from "./Postapi";
import Getapi from "./Getapi";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Home from "./Home";
import { Route , Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/get" exact element={<Getapi />} />
        <Route path="/post" exact element={<Postapi/>} />
      </Routes>
    </>
  );
}

export default App;
