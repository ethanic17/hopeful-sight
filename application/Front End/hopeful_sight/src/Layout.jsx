import { Outlet } from "react-router-dom";
export function Layout() {
  return (
    <>
      <div>Header</div>
      <Outlet />
      <div>Footer</div>
    </>
  );
}
