import { useState } from "react";

import Header from "./components/Header";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Solutions from "./pages/Solutions";
import Impacts from "./pages/Impacts";
import "./App.css"

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  return (
    <div>
      <Header />

      <Navbar setCurrentPage={setCurrentPage} />
      
      {currentPage == "home" && <Home />}
      {currentPage == "impacts" && <Impacts />}
      {currentPage == "solutions" && <Solutions />}
      <Footer />
    </div>

  );
}

export default App;