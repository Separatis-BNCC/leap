import { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Props = {
  children: ReactNode;
};

export default function Wrapper({
  children,
  ...props
}: Props & HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "flex items-center flex-col flex-grow rounded-t-[2.5rem] pt-[1.6875rem]  px-[1.9375rem] pb-[7.6875rem]",
        props.className
      )}
      style={{ backgroundColor: "#F4F8FF" }}
    >
      {children}
    </div>
  );
}
