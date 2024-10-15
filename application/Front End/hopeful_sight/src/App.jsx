import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Account } from "./pages/Account";
import { Map } from "./pages/Map";
import { Glasses } from "./pages/Galsses";
import { AboutUs } from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/map" element={<Map />} />
        <Route path="/account" element={<Account />} />
        <Route path="/glasses" element={<Glasses />} />
        <Route path="/About" element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
