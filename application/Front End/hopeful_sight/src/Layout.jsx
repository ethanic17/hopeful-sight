import { Outlet } from "react-router-dom";
import { Header } from "./components/Header";
import logo from "./pages/Logo/hopefulsightlogo.png";

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
    <div className="grid h-dvh grid-rows-[auto_1fr]">
      <Header />

      <main className="overflow-auto">
        <Outlet />
      </main>

      <footer className="bg-gray-200 text-center py-4 mt-4">
        <div>Copyright Ⓒ</div>
      </footer>
    </div>
  );
}
