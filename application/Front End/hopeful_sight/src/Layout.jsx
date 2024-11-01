import { Outlet } from "react-router-dom";
import logo from "./pages/Logo/Logo.png";

/**
 * Layout component for the application, providing a consistent structure with header, main content area, and footer
 *
 * This component serves as a wrapper for the application's routing system,
 * allowing different route components to be rendered in the main content area
 *
 * @returns {JSX.Element} The layout structure including header with logo, main content area for route outlets, and footer
 */

export function Layout() {
  return (
    <>
      <header className="bg-gray-100 shadow-md">
        <div className="container mx-auto py-4">
          <img
            src={logo}
            alt="Hopeful Sight Logo"
            className="h-10 w-auto mx-auto"
          />
        </div>
      </header>

      <main>
        {/**
         * Renders the child routes in this layout
         * Outlet from react-router-dom is used to display the current route's element
         */}
        <Outlet />
      </main>

      <footer className="bg-gray-200 text-center py-4 mt-4">
        <div>Copyright Ⓒ</div>
      </footer>
    </>
  );
}
