import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Account } from "./pages/Account";
import { Map } from "./pages/Map";
import { AboutUs } from "./pages/About";
import { Cart } from "./pages/Cart";
import { RoutesTest } from "./pages/RoutesTests";
import { Layout } from "./Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="map" element={<Map />} />
          <Route path="account" element={<Account />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="cart" element={<Cart />} />
          <Route path="routes" element={<RoutesTest />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
