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
import SignIn from "./pages/SignIn";
import Login from "./pages/Login";
import ResetPassword from "./pages/ResetPassword";
import Applayout from "./pages/Applayout";

const router = createBrowserRouter([
  {
    path: "",
    element: <ContextPool />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        element: <SignIn />,
        path: "/sign-in",
      },
      {
        element: <ResetPassword />,
        path: "/reset-password",
      },
      {
        element: <Applayout />,
        path: "/",
        children: [
          {
            element: <Home />,
            path: "home",
          },
          {
            path: "",
            element: <Navigate to="home" replace />,
          },
          {
            element: <Register />,
            path: "class",
          },
          {
            element: <Register />,
            path: "calendar",
          },
          {
            element: <Profile />,
            path: "profile",
          },
        ],
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
