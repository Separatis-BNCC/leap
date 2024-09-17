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
    typeof value === "undefined" || value === ""
      ? placeholder
      : selected
      ? selected
      : value;

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
        <div className={selected || value !== "" ? "" : "text-slate-400"}>
          {displayedCategory}
        </div>
        <i className="bx bx-chevron-down text-3xl"></i>
      </PopoverTrigger>
      <PopoverContent
        align="start"
        style={{ width: "var(--radix-popover-trigger-width)" }}
        className="grid p-1"
      >
        {data.map((item, index) => {
          const isSelected = item === displayedCategory;
          return (
            <button
              className={cn(
                "px-4 py-2 rounded-md cursor-pointer transition-all duration-100 truncate relative pl-6 flex",
                isSelected ? "bg-bg text-highlight" : "hover:bg-bg/50 "
              )}
              onClick={() => {
                setSelected(item);
                onChange(item);
              }}
              key={index}
            >
              <div
                className={cn(
                  "absolute w-[4px] aspect-square rounded-full bg-dark top-[50%] translate-y-[-50%] left-2 transition-all duration-100",
                  isSelected && "bg-highlight"
                )}
              ></div>
              {item}
            </button>
          );
        })}
      </PopoverContent>
    </Popover>
  );
}
