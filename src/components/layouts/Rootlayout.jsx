import { Outlet } from "react-router-dom";
import NavMenu from "../common/NavMenu";

const RootLayout = () => {
  return (
    <div>
      <NavMenu />

      {/*children */}
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
