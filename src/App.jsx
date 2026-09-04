import { useState } from "react";
import Header from "./components/Header";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Solutions from "./pages/Solutions";
import Impacts from "./pages/Impacts";
import Culture from "./pages/Culture";
import Economy from "./pages/Economy";
import Environment from "./pages/Environment";
import "./App.css"

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  return (
    <div>
      <Header />

      <Navbar setCurrentPage={setCurrentPage} />
      {currentPage == "impacts" && <Impacts setCurrentPage={setCurrentPage} />}
      
      {currentPage == "home" && <Home />}
      {currentPage == "solutions" && <Solutions />}
      {currentPage == "culture" && <Culture />}
      {currentPage == "economy" && <Economy />}
      {currentPage == "environment" && <Environment />}
      <Footer />
    </div>
  );
}

export default App;