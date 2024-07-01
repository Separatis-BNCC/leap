import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ContextPool from "./components/util/ContextPool";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Register from "./pages/Register";

const router = createBrowserRouter([
  {
    element: <ContextPool />,
    children: [
      {
        element: <Register />,
        path: "/register",
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
