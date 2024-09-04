import { cn } from "@/lib/utils";
import { Button } from "../ui/Button";
import DueDate from "../ui/DueDate";
import SemesterAssignment from "../ui/SemesterAssignment";

export default function AssignmentCard({ ...props }) {
  return (
    <div
      className={cn(
        "rounded-[1.25rem] w-[23rem] overflow-hidden shadow-[1px_1px_6px_0px_rgba(0,0,0,0.1)]",
        props.className
      )}
    >
      <div className="w-full px-[1.437rem] py-[0.875rem] gap-[0.815rem] flex items-center bg-gradient-to-r from-initial-radial to-last-radial">
        <i className="bx bx-time text-[1.5rem]"></i>
        <p className="text-black text-[0.875rem]">Haven’t submitted</p>
      </div>
      <div className="px-[1.437rem] pb-[1.56rem] pt-[1.125rem] bg-white">
        <div className="flex justify-between mb-[1.0625rem]">
          <SemesterAssignment
            assignment="Mid Project"
            semester="1st Semester"
          />
          <DueDate date="27 April 2024" variant="card" />
        </div>
        <div className="flex justify-between gap-4 ">
          <Button variant="secondary" className="w-full">
            Download
            <i className="bx bx-download text-main-blue text-base"></i>
          </Button>
          <Button variant="primary" className="w-full">
            Submit
            <i className="bx bx-upload text-white text-base"></i>
          </Button>
        </div>
      </div>
    </div>
  );
}
