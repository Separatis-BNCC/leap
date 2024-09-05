import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  variant: "primary" | "secondary";
};

const variants = {
  primary: "bg-dark-blue",
  secondary: "bg-main-blue",
};

export default function Label({ children, variant }: Props) {
  return (
    <div
      className={`${variants[variant]} rounded-2xl px-[1.125rem] py-[0.375rem] text-[0.875rem] text-white inline-block`}
    >
      {children}
    </div>
  );
}
