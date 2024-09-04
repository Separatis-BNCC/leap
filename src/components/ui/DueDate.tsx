type Props = {
  variant: "pop-up" | "card";
  date: string;
};

const variants = {
  "pop-up": "flex gap-[0.5625rem] text-[0.875rem]",
  card: "text-[1rem] ",
};

export default function DueDate({ variant, date }: Props) {
  return (
    <div className={`${variants[variant]} font-semibold text-darker-blue`}>
      <div
        className={`flex gap-[0.3125rem] items-center ${
          variant === "card" ? "mb-[0.4375rem]" : ""
        }`}
      >
        <i className="bx bx-calendar text-[1.125rem] text-dark-grey"></i>
        <p className="text-[0.875rem] text-dark-grey font-medium">Due</p>
      </div>
      {date}
    </div>
  );
}
