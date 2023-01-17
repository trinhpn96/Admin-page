import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../components/layouts/RootLayout";
import GuessOderDetail from "../views/admin/orders/GuessOderDetail";
import Orders from "../views/admin/orders/Orders";
import Overview from "../views/admin/Overview";
import RoomsList from "../views/admin/rooms/RoomsList";
import Login from "../views/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/adminoverview",
        element: <Overview />,
      },
      {
        path: "/adminrooms",
        element: <RoomsList />,
      },
      {
        path: "/adminusers",
        element: <GuessOderDetail />,
      },
      {
        path: "/adminorders",
        element: <Orders />,
      },
    ],
  },
]);

export default router;
