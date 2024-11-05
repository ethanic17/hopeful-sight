import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Account } from "./pages/Account";
import { MapPage } from "./pages/Map";
import { AboutUs } from "./pages/About";
import { Cart } from "./pages/Cart";
import { RoutesTest } from "./pages/RoutesTests";
import { Layout } from "./Layout";
import { CartProvider } from "./test_data/cartData";
import Donate from "./pages/Donate";
import DonationForm from "./pages/DonationForm";
import Confirmation from "./pages/Confirmation";
import { useEffect } from "react";
import useAxiosWithToken from "./hooks/axios";
import { useDispatch } from "react-redux";
import { login } from "./app/features/userSlice";

function App() {
  const dispatch = useDispatch();
  let axiosInter = useAxiosWithToken();
  async function FetchInitialUser() {
    try {
      let resp = await axiosInter.get("/auth/users/me/");
      if (resp.status == 200) {
        dispatch(login(resp.data));
      }
    } catch (e) {
      console.log("cant login");
    }
  }

  useEffect(() => {
    FetchInitialUser();
  }, []);

  return (
    <BrowserRouter>
      <CartProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="home" element={<Home />} />
            <Route path="map" element={<MapPage />} />
            <Route path="account" element={<Account />} />
            <Route path="about" element={<AboutUs />} />
            <Route path="cart" element={<Cart />} />
            <Route path="routes" element={<RoutesTest />} />
            {/* Donation Flow Routes */}
            <Route path="donate" element={<Donate />} />
            <Route path="donate/form" element={<DonationForm />} />
            <Route path="confirmation" element={<Confirmation />} />
          </Route>
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
