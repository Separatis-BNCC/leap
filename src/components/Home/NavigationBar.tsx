import { cn } from "@/lib/utils";
import { useLocation, useNavigate } from "react-router-dom";

const navbarItem = [
  {
    name: "Home",
    icon: "bx bxs-home",
    route: "/home",
  },
  {
    name: "Class",
    icon: "bx bx-chalkboard",
    route: "/register",
  },
  {
    name: "Calendar",
    icon: "bx bx-calendar",
    route: "/calendar",
  },
  {
    name: "Profile",
    icon: "bx bxs-user",
    route: "/profile",
  },
];

export default function NavigationBar({ ...props }) {
  const navigate = useNavigate();

  const { pathname } = useLocation();

  return (
    <div
      className={cn(
        "rounded-full bg-white shadow-md grid grid-cols-4 py-[0.875rem] w-[23rem] place-items-center",
        props.className
      )}
    >
      {navbarItem.map((item, index) => {
        return (
          <button
            className="flex flex-col items-center cursor-pointer"
            onClick={() => navigate(item.route)}
            key={index}
          >
            <i
              className={cn(
                item.icon,
                "text-[1.375rem]",
                pathname.includes(item.route)
                  ? "text-main-blue"
                  : "text-darker-blue"
              )}
            />

            <p
              className={cn(
                "font-medium text-[0.75rem]",
                pathname.includes(item.route)
                  ? "text-main-blue"
                  : "text-darker-blue"
              )}
            >
              {item.name}
            </p>
          </button>
        );
      })}
    </div>
  );
}
