import { cn } from "@/lib/utils";

export default function Header({ ...props }) {
  return (
    <div className={cn("px-[1.9375rem] pt-8 relative", props.className)}>
      <div
        className="h-[13.0625rem] w-full absolute left-0 top-0 -z-10"
        style={{
          backgroundImage: "linear-gradient(135deg, #2F5CF6 19%, #B69DFF 100%)",
        }}
      ></div>
      <div className="flex justify-between z-10 mb-[1.9375rem] items-center">
        <h1 className="text-[1.25rem] font-semibold text-white">Profile</h1>

        <button className="relative">
          <i className="bx bxs-bell text-[1.9375rem] text-white"></i>
          <div
            className="absolute rounded-full flex justify-center items-center top-0 right-0 text-base text-white w-[1.4375rem] h-[1.4375rem] translate-x-[25%] -translate-y-[25%]"
            style={{ backgroundColor: "#4244FD" }}
          >
            1
          </div>
        </button>
      </div>
    </div>
  );
}
