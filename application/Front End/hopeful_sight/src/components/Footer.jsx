import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

export function Footer() {
  let isLoggedIn = useSelector((state) => state.user.userInfo.loggedIn);
  console.log(isLoggedIn);

  return (
    <div className="bg-gray-800 p-4 flex flex-row justify-between items-center">
      <div className="flex space-around">
        <NavLink to="about" className="text-white hover:text-gray-400 mx-7">
          About Us
        </NavLink>

        <NavLink to="map" className="text-white hover:text-gray-400 mx-7">
          Map
        </NavLink>

        <NavLink
          to={isLoggedIn ? "/account" : "/"}
          className="text-white hover:text-gray-400 mx-7"
        >
          {isLoggedIn ? "Account" : "Login"}
        </NavLink>
      </div>

      <div className="flex justify-center space-x-7">
        <a href="https://www.facebook.com/" className="inline-block">
          <img
            src="https://www.sendible.com/hs-fs/hubfs/blog-import/2020/20-08-Aug/sm-icons-facebook-logo.png?width=120&name=sm-icons-facebook-logo.png"
            className="h-10 w-10"
          />
        </a>

        <a href="https://x.com/home" className="inline-block">
          <img
            src="https://www.sendible.com/hs-fs/hubfs/blog-import/2024/02-24-Feb/social-media-icons-x-logo-black.png?width=120&height=123&name=social-media-icons-x-logo-black.png"
            className="h-10 w-10"
          />
        </a>

        <a href="https://www.instagram.com/" className="inline-block">
          <img
            src="https://www.sendible.com/hs-fs/hubfs/blog-import/2022/07-22-Jul/every-social-media-logo-and-icon-in-one-handy-place-instagram-app-logo.png?width=116&name=every-social-media-logo-and-icon-in-one-handy-place-instagram-app-logo.png"
            className="h-10 w-10"
          />
        </a>
      </div>
    </div>
  );
}
