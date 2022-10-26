import { lazy } from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const PlayersRoomPage = lazy(() => import("./players-room"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <PlayersRoomPage />,
  },
]);

export const Routing = () => {
  return (
    <RouterProvider router={router} />
  );
};