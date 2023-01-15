import { createBrowserRouter } from "react-router-dom";
// import RootLayout from "../components/layouts/RootLayout";
import AdminOrders from "../views/adminhome/AdminOrders";
import AdminRooms from "../views/adminhome/AdminRooms";
import AdminUsers from "../views/adminhome/AdminUsers";
import Login from "../views/Login";
import AdminOverview from "../views/adminhome/AdminOrders";

const router = createBrowserRouter([
  {
    path: "/",
    // element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/adminoverview",
        element: <AdminOverview />,
      },
      {
        path: "/adminrooms",
        element: <AdminRooms />,
      },
      {
        path: "/adminusers",
        element: <AdminUsers />,
      },
      {
        path: "/adminorders",
        element: <AdminOrders />,
      },
    ],
  },
]);

export default router;
