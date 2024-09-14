import { ReactNode, ButtonHTMLAttributes } from "react";
import { LoadingSpinner } from "./LoadingSpinner";

import { cn } from "@/lib/utils";
type Props = {
  children?: ReactNode;
  isLoading?: boolean;
  variant: "primary" | "primaryDark" | "secondary" | "tertiary";
};

const variants = {
  primary: "bg-main-blue text-white [&>svg]:stroke-white",
  primaryDark: "bg-dark-blue text-white w-[19rem] [&>svg]:stroke-white",
  secondary: "bg-light-purple text-main-blue",
  tertiary: "bg-white text-dark-blue",
};

// Buat warna spinner
// [&>svg]:stroke-white
// & -> element skrg
// > svg -> select children svg element

// Jangan pake widht, make padding aja
// bisa passing className dari props

// Loading spinner ada di samping tulisan yang ada
// disable itu opacity nya di kurangin aja (disabled:opacity-50)
// spinner di sesuaikan besarnya dengan font umum

export function Button({
  children,
  variant,
  isLoading,
  ...props
}: Props & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className={cn(
        "flex justify-center py-[0.6875rem] active:scale-[98%] items-center gap-1 active:opacity-95 text-[0.875rem] font-medium rounded-xl",
        { "opacity-50": isLoading },
        variants[variant],
        props.className
      )}
      disabled={isLoading || props.disabled}
    >
      {isLoading ? (
        <LoadingSpinner className="ml-2"></LoadingSpinner>
      ) : (
        children
      )}
    </button>
  );
}
