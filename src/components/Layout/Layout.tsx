import { Outlet } from "react-router";

const Layout = () => (
    <>
      <header></header>
      <main>
        <Outlet />
      </main>
    </>
);

export default Layout;