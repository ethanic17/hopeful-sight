import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { RiGlasses2Line } from "react-icons/ri";

export function Header() {
  let isLoggedIn = useSelector((state) => state.user.userInfo.loggedIn);
  let isDonator = useSelector((state) => state.user.userInfo.donator);

  return (
    <div className="bg-slate-800">
      <div className="flex justify-between items-center py-3 px-4">
        <RiGlasses2Line size="50" color="white" />
        <div className="flex justify-end space-x-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-sky-400" : "text-white hover:text-sky-400"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="about"
            className={({ isActive }) =>
              isActive ? "text-sky-400" : "text-white hover:text-sky-400"
            }
          >
            About Us
          </NavLink>

          <NavLink
            to="map"
            className={({ isActive }) =>
              isActive ? "text-sky-400" : "text-white hover:text-sky-400"
            }
          >
            Map
          </NavLink>

          {isLoggedIn && !isDonator ? (
            <NavLink
              to="account"
              className={({ isActive }) =>
                isActive ? "text-sky-400" : "text-white hover:text-sky-400"
              }
            >
              Account
            </NavLink>
          ) : (
            <NavLink
              to="donate/form"
              className={({ isActive }) =>
                isActive ? "text-sky-400" : "text-white hover:text-sky-400"
              }
            >
              Donate
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
}
