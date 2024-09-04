type Props = {
  assignment: string;
  semester: string;
};

export default function SemesterAssignment({ assignment, semester }: Props) {
  return (
    <div className="font-semibold text-darker-blue text-[1.5rem]">
      <p className="text-[0.875rem] text-dark-grey font-medium">{semester}</p>
      {assignment}
    </div>
  );
}
