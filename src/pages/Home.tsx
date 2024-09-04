import AssignmentCard from "@/components/Home/AssigmentCard";
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
        <p className="text-base font-semibold">Assigments</p>
        <p className="text-main-blue text-[o.875rem]">0 done</p>
      </div>
      <AssignmentCard className="mb-[2.0625rem] w-full" />
      <NavigationBar className="w-full" />
    </Wrapper>
  );
}
