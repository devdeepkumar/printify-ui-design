import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import SubFooter from "./components/SubFooter";
import Footer from "./components/Footer";
import "./App.css";
import Aos from "aos";
import 'aos/dist/aos.css'





function App() {
  useEffect(()=>{
    Aos.init();
  },[])
  return (
    <div>
      <Navbar />
      <Home />
      <Footer />
      <SubFooter />
    </div>
  );
}

export default App;
