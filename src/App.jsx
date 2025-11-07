import React from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Features from "./components/Features/Features";
import Benefits from "./components/Benefits/Benefits";
import CTA from "./components/CTA/CTA";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Features />
      <Benefits />
      <CTA />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
