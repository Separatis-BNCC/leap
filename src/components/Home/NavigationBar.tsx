import { cn } from "@/lib/utils";
import { useNavigate } from "react-router-dom";

const navbarItem = [
  {
    name: "Home",
    icon: <i className="bx bxs-home text-darker-blue text-[1.375rem]"></i>,
    route: "/home",
  },
  {
    name: "Class",
    icon: <i className="bx bx-chalkboard text-darker-blue text-[1.375rem]"></i>,
    route: "/register",
  },
  {
    name: "Calender",
    icon: <i className="bx bx-calendar text-darker-blue text-[1.375rem]"></i>,
    route: "/",
  },
  {
    name: "Profile",
    icon: <i className="bx bxs-user text-darker-blue text-[1.375rem]"></i>,
    route: "/",
  },
];

export default function NavigationBar({ ...props }) {
  const navigate = useNavigate();
  //profile ama class dikecilkan
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
            {item.icon}
            <p className="text-darker-blue font-medium text-[0.75rem]">
              {item.name}
            </p>
          </button>
        );
      })}
    </div>
  );
}
