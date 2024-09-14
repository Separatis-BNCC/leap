import { Outlet, useLocation } from "react-router-dom";
import Header from "../ui/Header";
import HeaderProfile from "../ui/HeaderProfile";

export default function ContextPool() {
  const location = useLocation();

  const getHeader = () => {
    return location.pathname === "/profile" ? (
      <HeaderProfile className="h-[9.4375rem]" />
    ) : (
      <Header className="h-[11.375rem]" />
    );
  };

  return (
    <div className="flex flex-col min-h-screen">
      {getHeader()}
      <Outlet />
    </div>
  );
}
