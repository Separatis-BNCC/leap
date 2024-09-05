import { Outlet } from "react-router-dom";
import Header from "../ui/Header";

export default function ContextPool() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header className="h-[11.375rem]" />
      <Outlet />
    </div>
  );
}
