import { cn } from "@/lib/utils";
import { useLocation, useNavigate } from "react-router-dom";

// const navbarItem = [
//   {
//     name: "Home",
//     icon: <i className="bx bxs-home text-darker-blue text-[1.375rem]"></i>,
//     route: "/",
//   },
//   {
//     name: "Class",
//     icon: <i className="bx bx-chalkboard text-darker-blue text-[1.375rem]"></i>,
//     route: "/register",
//   },
//   {
//     name: "Calender",
//     icon: <i className="bx bx-calendar text-darker-blue text-[1.375rem]"></i>,
//     route: "/calendar",
//   },
//   {
//     name: "Profile",
//     icon: <i className="bx bxs-user text-darker-blue text-[1.375rem]"></i>,
//     route: "/profile",
//   },
// ];

// Yang di passing cuma className dari iconnya aja biar bisa di adjust warnanya pas udah diakses
const navbarItem = [
  {
    name: "Home",
    icon: "bx bxs-home",
    route: "/",
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
  const current = pathname.split("/")?.[1];
  // console.log(current);

  const active = (path: string) => {
    const cleanPath = path.replace(/^\/+/, "");

    const classes =
      cleanPath === current ? "text-main-blue" : "text-darker-blue";

    return classes;
  };

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
            {/* <div className={`${active(item.route)}`}>{item.icon}</div>
             */}

            {/* biar iconnya bisa di styling langsung di sini */}
            <i
              className={cn(item.icon, active(item.route), "text-[1.375rem]")}
            />
            <p className={`${active(item.route)} font-medium text-[0.75rem]`}>
              {item.name}
            </p>
          </button>
        );
      })}
    </div>
  );
}
