import { Outlet, useLocation } from "react-router-dom";
import Header from "../ui/Header";
import HeaderProfile from "../ui/HeaderProfile";

const headers = {
  "/profile": <HeaderProfile className="h-[9.4375rem]" />,
  "/sign_in": <div></div>,
  "/login": <div></div>,
  "/reset_password": <div></div>,
} as const;

export default function ContextPool() {
  const location = useLocation();

  const header = headers[location.pathname as keyof typeof headers] || (
    <Header className="h-[11.375rem]" />
  );

  return (
    <div className="flex flex-col min-h-screen">
      {/* {getHeader()} */}
      {header}
      <Outlet />
    </div>
  );
}
