import { Outlet } from "react-router";

import { Header } from "..";
import GlobalStyles from "../../GlobalStyles";

const Layout = () => (
    <>
      <GlobalStyles />
      <Header />
      <main>
        <Outlet />
      </main>
    </>
);

export default Layout;