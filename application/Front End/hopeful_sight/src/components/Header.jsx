import { NavLink } from "react-router-dom";
import logo from "../pages/Logo/Logo.png";
import { useSelector } from "react-redux";
import { RiGlasses2Line } from "react-icons/ri";

export function Header() {
  let isLoggedIn = useSelector((state) => state.user.userInfo.loggedIn);
  let isDonator = useSelector((state) => state.user.userInfo.donator);

  return (
    <div className="bg-gray-800 p-0">
      <div className="flex justify-between items-center mx-4">
        <RiGlasses2Line size="55" color="white" className="" />
        <div className="flex justify-end space-x-4">
          <NavLink to="/" className="text-white hover:text-gray-400">
            Home
          </NavLink>

          <NavLink to="about" className="text-white hover:text-gray-400">
            About Us
          </NavLink>

          <NavLink to="map" className="text-white hover:text-gray-400">
            Map
          </NavLink>

          {isLoggedIn && !isDonator ? (
            <NavLink to="account" className="text-white hover:text-gray-400">
              Account
            </NavLink>
          ) : (
            <NavLink to="donate" className="text-white hover:text-gray-400">
              Donate
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
}
