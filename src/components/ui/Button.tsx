// import * as React from "react";
// import { Slot, Slottable } from "@radix-ui/react-slot";
// import { cva, type VariantProps } from "class-variance-authority";

import { ReactNode, useState, useEffect, ButtonHTMLAttributes } from "react";
import { LoadingSpinner } from "./LoadingSpinner";

import { cn } from "@/lib/utils";
// import { LoadingSpinner } from "./LoadingSpinner";

// const buttonVariants = cva(
//   "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
//   {
//     variants: {
//       variant: {
//         accent: "bg-highlight text-white shadow hover:bg-highlight/90",
//         default:
//           "bg-primary text-primary-foreground shadow hover:bg-primary/90",
//         destructive:
//           "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
//         outline:
//           "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
//         secondary:
//           "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
//         ghost: "hover:bg-accent hover:text-accent-foreground",
//         link: "text-primary underline-offset-4 hover:underline",
//       },
//       size: {
//         default: "h-9 px-4 py-2",
//         sm: "h-8 rounded-md px-3 text-xs",
//         lg: "h-10 rounded-md px-8",
//         icon: "h-9 w-9",
//       },
//     },
//     defaultVariants: {
//       variant: "default",
//       size: "default",
//     },
//   }
// );

// export interface ButtonProps
//   extends React.ButtonHTMLAttributes<HTMLButtonElement>,
//     VariantProps<typeof buttonVariants> {
//   asChild?: boolean;
//   isLoading?: boolean;
// }

// const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
//   (
//     {
//       className,
//       variant,
//       size,
//       isLoading,
//       asChild = false,
//       children,
//       ...props
//     },
//     ref
//   ) => {
//     const Comp = asChild ? Slot : "button";
//     return (
//       <Comp
//         className={cn(buttonVariants({ variant, size }), className)}
//         ref={ref}
//         {...props}
//       >
//         <Slottable>{children}</Slottable>
//         {isLoading && (
//           <Slottable>
//             <LoadingSpinner className="stroke-white ml-2" />
//           </Slottable>
//         )}
//       </Comp>
//     );
//   }
// );
// Button.displayName = "Button";

// export { Button, buttonVariants };

type Props = {
  children?: ReactNode;
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
  ...props
}: Props & ButtonHTMLAttributes<HTMLButtonElement>) {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <button
      {...props}
      className={cn(
        "flex justify-center py-[0.6875rem] active:scale-[98%] items-center gap-1 active:opacity-95 text-[0.875rem] font-medium rounded-xl",
        { isLoading: "opacity-50" },
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
