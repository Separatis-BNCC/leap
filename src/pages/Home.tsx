import AssignmentCard from "@/components/Home/AssignmentCard";
import AttendanceCard from "@/components/Home/AttendanceCard";
import NavigationBar from "@/components/Home/NavigationBar";
import Wrapper from "@/components/ui/Wrapper";

export default function Home() {
  return (
    <Wrapper>
      <div className="flex justify-between mb-[1.25rem] w-full">
        <p className="text-base font-semibold">Upcoming Class</p>
        <button>
          <i className="bx bx-calendar text-black text-[1.4375rem]"></i>
        </button>
      </div>
      <AttendanceCard className="w-full" />
      <div className="flex justify-between items-center mt-[2.8125rem] w-full mb-4">
        <p className="text-base font-semibold">Assignments</p>
        <p className="text-main-blue text-[o.875rem]">0 done</p>
      </div>
      <AssignmentCard className="w-full" />
      <NavigationBar className="fixed w-[87%] bottom-[1.8125rem]" />
    </Wrapper>
  );
}
