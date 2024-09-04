import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ContextPool from "./components/util/ContextPool";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Register from "./pages/Register";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ContextPool />,
    children: [
      {
        element: <Register />,
        path: "register",
      },
      {
        element: <Home />,
        path: "home",
      },
    ],
  },
]);

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}
