import { createBrowserRouter } from "react-router-dom";
import { Layout } from "@shared/layouts";
import { HomePage, GameDetailPage, ErrorPage } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "games/:id",
        element: <GameDetailPage />,
      },
    ],
  },
]);

export default router;
