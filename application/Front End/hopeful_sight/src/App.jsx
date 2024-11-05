import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Account } from "./pages/Account";
import { Map } from "./pages/Map";
import { AboutUs } from "./pages/About";
import { Cart } from "./pages/Cart";
import { RoutesTest } from "./pages/RoutesTests";
import { Layout } from "./Layout";
import { CartProvider } from "./test_data/cartData";
import Donate from "./pages/Donate";
import DonationForm from "./pages/DonationForm";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="home" element={<Home />} />
            <Route path="map" element={<Map />} />
            <Route path="account" element={<Account />} />
            <Route path="about" element={<AboutUs />} />
            <Route path="cart" element={<Cart />} />
            <Route path="routes" element={<RoutesTest />} />
            {/* Donation Flow Routes */}
            <Route path="donate" element={<Donate />} />
            <Route path="donate/form" element={<DonationForm />} />
          </Route>
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
