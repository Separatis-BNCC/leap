import { useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import { cn } from "@/lib/utils";

type Props = {
  label: string;
  placeholder: string;
  value?: string;
  className?: string;
  onChange: (value: string) => void;
  data: readonly string[];
};

export default function Dropdown({
  label,
  placeholder,
  data,
  value,
  className,
  onChange,
  ...props
}: Props) {
  const [selected, setSelected] = useState<string | undefined>("");

  const displayedCategory =
    typeof value === "undefined" ? placeholder : selected ? selected : value;

  return (
    <Popover>
      <p className="text-slate-500">{label}</p>
      <PopoverTrigger
        className={cn(
          "flex items-center justify-between border-2 border-slate-200 w-full py-2 px-5 rounded-md mt-[0.625rem]",
          className
        )}
        {...props}
      >
        <div>{displayedCategory}</div>
        <i className="bx bx-chevron-down text-3xl"></i>
      </PopoverTrigger>
      <PopoverContent
        align="start"
        style={{ width: "var(--radix-popover-trigger-width)" }}
        className="grid p-0"
      >
        {data.map((item, index) => {
          return (
            <button
              className="p-2 hover:bg-slate-200 cursor-pointer border-t-[1px]"
              onClick={() => {
                setSelected(item);
                onChange(item);
              }}
              key={index}
            >
              {item}
            </button>
          );
        })}
      </PopoverContent>
    </Popover>
  );
}
