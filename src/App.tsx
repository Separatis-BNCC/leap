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

const router = createBrowserRouter([
  {
    path: "/",
    element: <ContextPool />,
    children: [
      {
        path: "",
        element: <Navigate to="/sign_in" />,
      },
      {
        element: <Home />,
        path: "/home",
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
      {
        element: <SignIn />,
        path: "sign_in",
      },
      {
        element: <Login />,
        path: "login",
      },
      {
        element: <ResetPassword />,
        path: "reset_password",
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
