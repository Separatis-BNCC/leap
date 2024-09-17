import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Cookies from "js-cookie";
import Header from "@/components/ui/Header";
import HeaderProfile from "@/components/ui/HeaderProfile";

const headers = {
  "/profile": <HeaderProfile className="h-[9.4375rem]" />,
} as const;

export default function Applayout() {
  const location = useLocation();
  const navigate = useNavigate();

  const header = headers[location.pathname as keyof typeof headers] || (
    <Header className="h-[11.375rem]" />
  );

  useEffect(() => {
    const token = Cookies.get("token");
    if (typeof token === "undefined") {
      navigate("/login");
    }
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {header}
      <Outlet />
    </div>
  );
}
