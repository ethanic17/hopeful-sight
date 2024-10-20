import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Account } from "./pages/Account";
import { Map } from "./pages/Map";
import { glassesComp } from "./pages/glassesComp";
import { AboutUs } from "./pages/About";
import { hookNavigate } from "./pages/hookNavigate";
import { Cart } from "./pages/Cart";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/map" element={<Map />} />
        <Route path="/account" element={<Account />} />
        <Route path="/glasses" element={<glassesComp />} />
        <Route path="/About" element={<AboutUs />} />
        <Route path="/hookNavigate" element={<hookNavigate />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>



  );
  
}

function App() {
  const catalogs = [
    {
      title: "Glasses",
      items: ["Reading Glasses", "UV Protection", "Prescription Glasses"],
      buttonId: "glasses-button",
    },
  ];

  return (
    <div>
      {catalogs.map((catalog, index) => (
        <Catalog key={index} {...catalog} />
      ))}
    </div>
  );
}