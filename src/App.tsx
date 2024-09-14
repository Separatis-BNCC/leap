import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import ContextPool from "./components/util/ContextPool";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Profile from "./pages/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ContextPool />,
    children: [
      {
        path: "",
        element: <Navigate to="/home" />,
      },
      {
        element: <Register />,
        path: "register",
      },
      {
        element: <Home />,
        path: "/home",
      },
      {
        element: <Profile />,
        path: "profile",
      },
      {
        element: <Register />,
        path: "calendar",
      },
    ],
  },
]);

//Nyari location

// const location = useLocation();
// console.log(location.pathname);

// const { pathname } = useLocation();
// console.log(pathname);

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}
