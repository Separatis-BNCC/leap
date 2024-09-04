import { cn } from "@/lib/utils";
import image from "/defaultImage.png";

export default function Header({ ...props }) {
  return (
    <div
      className={cn(
        "h-[11.375rem] px-[1.9375rem] pt-8 relative",
        props.className
      )}
    >
      <div
        className="h-[13.0625rem] w-full absolute left-0 top-0 -z-10"
        style={{
          backgroundImage: "linear-gradient(135deg, #2F5CF6 19%, #B69DFF 100%)",
        }}
      ></div>
      <div className="flex justify-between z-10 mb-[1.9375rem] items-center">
        <div className="rounded-full h-[2.3125rem] w-[2.3125rem]">
          <img src={image} alt="image" className="bg-contain bg-center" />
        </div>

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

      <div className="w-full">
        <p className="text-white text-base">Good Evening,</p>
        <p className="text-white text-[1.5rem] font-semibold">
          Jacqueline Audrey{" "}
        </p>
      </div>
    </div>
  );
}
