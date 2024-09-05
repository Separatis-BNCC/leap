import { useNavigate } from "react-router-dom";
import { Button } from "../ui/Button";
import Label from "../ui/Label";
import { cn } from "@/lib/utils";

export default function AttendanceCard({ ...props }) {
  const navigate = useNavigate();

  return (
    <div className={cn("relative flex justify-center w-full", props.className)}>
      <div className="z-[3] px-[1.6875rem] py-[1.5rem] bg-main-blue rounded-[1.25rem] overflow-hidden relative w-full">
        <div className="w-[27.7rem] h-[5.1rem] absolute rounded-3xl top-[47%] left-[55%] -translate-y-[50%] -translate-x-[50%] -rotate-45 -z-[1] bg-gradient-to-r from-transparent to-white opacity-10"></div>
        <div className="w-[27.6rem] h-[3.75rem] absolute rounded-3xl top-[69%] left-[79%] -translate-y-[50%] -translate-x-[50%] -rotate-45 -z-[1] bg-gradient-to-r from-transparent to-white opacity-10"></div>
        <div className="w-[27.7rem] h-[0.4375rem] absolute rounded-3xl top-[90%] left-[86%] -translate-y-[50%] -translate-x-[50%] -rotate-45 -z-[1] bg-gradient-to-r from-transparent to-white opacity-10"></div>

        <div className="flex justify-between mb-[1.5625rem]">
          <div className="flex gap-[0.437rem] items-center text-[0.875rem] text-gray-blue">
            <i className="bx bx-calendar-alt text-[1.125rem] text-gray-blue"></i>
            27 April 2024
          </div>
          <div className="flex gap-[0.437rem] items-center text-[0.875rem] text-gray-blue">
            <i className="bx bx-time-five text-[1.125rem] text-gray-blue"></i>
            17:20 - 19:00
          </div>
        </div>
        <div className="mb-[1.75rem]">
          <p className="text-[1.5rem] font-semibold text-white max-w-[19.75rem] mb-[1.0625rem]">
            Object Oriented Approach in Javascript.
          </p>
          <Label variant="primary">Session 14</Label>
        </div>

        <div className="flex gap-[0.957rem] items-center">
          <Button
            variant="tertiary"
            onClick={() => navigate("/")}
            className="w-full"
          >
            Attendance
          </Button>

          <button className="bg-white rounded-full flex items-center justify-center p-[0.5rem] cursor-pointer">
            <i className="bx bx-time text-[1.5rem]"></i>
          </button>
        </div>
      </div>
      <div className="absolute z-[2] w-full h-full rounded-[1.25rem] translate-y-[0.8rem] scale-[96%] px-[1.75rem] py-[1.5rem] bg-lighter-main-blue "></div>
      <div className="absolute z-[1] w-full h-full rounded-[1.25rem] translate-y-[1.6rem] scale-[92%] px-[1.75rem] py-[1.5rem] bg-lighter-purple "></div>
    </div>
  );
}
