import { Outlet } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { useSelector } from "react-redux";
import { GlobalLoader } from "./components/GlobalLoader";

/**
 * Layout component for the application, providing a consistent structure with header, main content area, and footer
 *
 * This component serves as a wrapper for the application's routing system,
 * allowing different route components to be rendered in the main content area
 *
 * The layout structure including header with logo, main content area for route outlets, and footer
 * @returns {JSX.Element}
 */

export function Layout() {
  let loading = useSelector((state) => state.app.loading);
  return (
    <div className="grid h-dvh grid-rows-[auto_1fr]">
      <Header />
      <main className="overflow-auto">
        {loading && <GlobalLoader />}
        <Outlet />
        <Footer />
      </main>
      <Header />
    </div>
  );
}
