import { HTMLAttributes, forwardRef } from "react";
import Skeleton from "react-loading-skeleton";
import { cn } from "@/lib/utils";

type Props = {
  label: string;
  placeholder: string;
  className?: string;
  hint?: string;
  disabled?: boolean;
  value?: string;
  type?: string;
  isLoading?: boolean;
  errorMessage?: string;
};

const Input = forwardRef<
  HTMLInputElement,
  Props & HTMLAttributes<HTMLInputElement>
>(function (
  {
    label,
    disabled,
    isLoading,
    placeholder,
    type = "text",
    className,
    errorMessage,
    hint,
    onChange,
    onBlur,
    ...props
  },
  ref
) {
  return (
    <div className={className}>
      <div className="flex justify-between ">
        <label className="text-slate-500">{label}</label>
      </div>
      {!isLoading ? (
        <input
          {...props}
          ref={ref}
          onChange={onChange}
          onBlur={onBlur}
          disabled={disabled}
          type={type}
          className={cn(
            "border-[1px] border-slate-300 bg-transparent outline-none rounded-md w-full px-6 py-3 mt-[0.625rem] disabled:text-slate-500",
            errorMessage && "border-red-400"
          )}
          placeholder={placeholder}
        />
      ) : (
        <Skeleton height={"2.75rem"} className="mt-2" />
      )}
      {errorMessage && (
        <div className="flex gap-2 items-center mt-2">
          <i className="text-red-400 bx bxs-error-circle leading-[150%]"></i>
          <p className="text-red-400 leading-[150%]">{errorMessage}</p>
        </div>
      )}
      {hint && <p className="text-slate-500 mt-3 leading-[200%]">{hint}</p>}
    </div>
  );
});

export default Input;
