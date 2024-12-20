import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import { Home } from "./pages/Home";
import { Account } from "./pages/Account";
import { MapPage } from "./pages/Map";
import { AboutUs } from "./pages/About";
import { Cart } from "./pages/Cart";
import { RoutesTest } from "./pages/RoutesTests";
import { Layout } from "./Layout";
import { CartProvider } from "./test_data/cartData";
import DonationForm from "./pages/DonationForm";
import Confirmation from "./pages/Confirmation";
import { useEffect } from "react";
import useAxiosWithToken from "./hooks/axios";
import { useDispatch } from "react-redux";
import { login } from "./app/features/userSlice";
import { setLoading } from "./app/features/appSlice";
import { useSelector } from "react-redux";
import { GlassesDetailPage } from "./pages/glassesDetailPage";
import { SignInForm } from "./components/SignInForm";
import { AuthForm } from "./components/AuthForm";

import { ZhengEthan } from "./pages/AboutUsPages/ZhengEthan";
import { NateDavid } from "./pages/AboutUsPages/NGD";
import { KobyKern } from "./pages/AboutUsPages/KobyKern";
import { JacobVazquez } from "./pages/AboutUsPages/JacobVazquez";
import { MiguelMaurer } from "./pages/AboutUsPages/MiguelMaurer";
import { AliAlmusawi } from "./pages/AboutUsPages/AliAlmusawi";
import { ZekeMelo } from "./pages/AboutUsPages/ZekeMelo";

function App() {
  let accountId = useSelector((state) => {
    console.log(state);
    return state.user.userInfo;
  });
  console.log(accountId);

  const dispatch = useDispatch();
  let axiosInter = useAxiosWithToken();

  async function FetchInitialUser() {
    try {
      dispatch(setLoading(true));
      let resp = await axiosInter.get("/auth/users/me/");
      if (resp.status == 200) {
        dispatch(login(resp.data));
        console.log(resp.data);
      }
    } catch (e) {
      console.log("Can't login", e);
    } finally {
      dispatch(setLoading(false));
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
            <Route path="home" element={<Navigate to="/" replace />} />
            <Route path="map" element={<MapPage />} />
            <Route path="account" element={<Account />} />
            <Route path="about" element={<AboutUs />} />
            <Route path="cart" element={<Cart />} />
            <Route path="routes" element={<RoutesTest />} />
            {/* Donation Flow Routes */}
            <Route path="/donate/form" element={<DonationForm />} />
            <Route path="confirmation" element={<Confirmation />} />
            {/* Glasses card id */}
            <Route path="/glasses/:id" element={<GlassesDetailPage />} />
            {/* Login Route */}
            <Route path="/login" element={<SignInForm />} />
            {/*  AuthForm should handle both sign in and sign up */}
            <Route path="login" element={<AuthForm />} />

            <Route path="ZhengEthan" element={<ZhengEthan />} />
            <Route path="NateDavid" element={<NateDavid />} />
            <Route path="KobyKern" element={<KobyKern />} />
            <Route path="JacobVazquez" element={<JacobVazquez />} />
            <Route path="MiguelMaurer" element={<MiguelMaurer />} />
            <Route path="AliAlmusawi" element={<AliAlmusawi />} />
            <Route path="ZekeMelo" element={<ZekeMelo />} />
          </Route>
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
