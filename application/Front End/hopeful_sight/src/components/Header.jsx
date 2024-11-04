import { NavLink } from "react-router-dom";
import logo from '../pages/Logo/Logo.png';

export function Header() {
    return (
        <div className="bg-gray-800 p-4">

            <div className>

                <img 
                    src={logo}
                    alt="Logo"
                    className="h-8 w-18 -mt-2 float-left"
                />

            </div>

            <div className="flex justify-end">

                <NavLink 
                    to="/" 
                    className="text-white hover:text-gray-400 mx-7"
                > 
                    Home 
                </NavLink>

                <NavLink 
                    to="about"
                    className="text-white hover:text-gray-400 mx-7"
                > 
                    About Us 
                </NavLink>

                <NavLink 
                    to="map"
                    className="text-white hover:text-gray-400 mx-7"
                > 
                    Map 
                </NavLink>

                <NavLink 
                    to="donate"
                    className="text-white hover:text-gray-400 mx-7"
                > 
                    Donate 
                </NavLink>

            </div>

        </div>
    );
}