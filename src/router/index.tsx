import { Navigate, RouteObject, createBrowserRouter } from "react-router-dom";

import table from './module/table';
import App from "@/App";

const basic: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "*",
        element: <Navigate to="/" replace={true} />,
      },
    ]
  },
];

const router = createBrowserRouter([
  ...basic,
  ...table,
]);

export default router;
