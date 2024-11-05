import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setAuth } from "./app/features/userSlice";
import { Home } from "./pages/Home";
import { Account } from "./pages/Account";
import { Map } from "./pages/Map";
import { AboutUs } from "./pages/About";
import { Cart } from "./pages/Cart";
import { RoutesTest } from "./pages/RoutesTests";
import { Layout } from "./Layout";
import { CartProvider } from "./test_data/cartData";
import Donate from "./pages/Donate";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const getInitialToken = () => localStorage.getItem("token") || "";
    dispatch(setAuth(getInitialToken()));
  }, []);

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
          </Route>
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
