import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

export default function TimeInfo({ children }: Props) {
  return (
    <div className="flex gap-[0.437rem] items-center text-[0.875rem] text-gray-blue">
      {children}
    </div>
  );
}
