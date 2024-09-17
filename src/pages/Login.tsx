import Wrapper from "@/components/ui/Wrapper";
import bg_sign from "/bg-signin.png";
import Input from "@/components/ui/Input";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button } from "@/components/ui/Button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { cn } from "@/lib/utils";
import useLoginMutation from "@/hook/User/useLoginMutation";

type LoginValues = {
  email: string;
  password: string;
};

export default function Login() {
  const [passwordType, setPasswordType] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginValues>({
    values: {
      email: "",
      password: "",
    },
  });

  const { loginMutation } = useLoginMutation({ onError: setErrorMessage });

  const onSubmit: SubmitHandler<LoginValues> = (value) => {
    loginMutation.mutate({
      email: value.email,
      password: value.password,
    });
  };
  return (
    <div className="flex flex-col min-h-screen">
      <div
        className="flex-grow bg-cover bg-center bg-no-repeat pt-[13.6875rem] flex justify-center"
        style={{ backgroundImage: `url(${bg_sign})` }}
      >
        <Wrapper className="px-[2.125rem] pt-[2.5rem] pb-[0] flex relative">
          <p className="text-[2rem] font-semibold text-main-blue mb-[2.5625rem]">
            Login
          </p>
          <form onSubmit={handleSubmit(onSubmit)} className="w-full">
            <div className="grid gap-[1.875rem] mb-[2.1875rem]">
              <Input
                label="Email"
                placeholder="example@mail.com"
                {...register("email", { required: "This field is required" })}
                errorMessage={errors.email?.message}
                className={cn(errorMessage && "[&_input]:border-red-400")}
              />
              <div className="relative">
                <Input
                  label="Password"
                  placeholder="*****"
                  type={passwordType ? "text" : "password"}
                  {...register("password", {
                    required: "This field is required",
                  })}
                  errorMessage={errors.password?.message}
                  className={cn(
                    "[&_input]:pr-12",
                    errorMessage && "[&_input]:border-red-400"
                  )}
                />
                <i
                  className={cn(
                    "absolute bx text-lg top-[53%] right-6 cursor-pointer duration-100 transition-all hover:opacity-50",
                    passwordType ? "bx-show" : "bx-hide"
                  )}
                  onClick={() => setPasswordType((cur) => !cur)}
                ></i>
              </div>
            </div>
            {errorMessage && !errors.password && (
              <div className="flex gap-2 mt-6">
                <i className="text-red-400 bx bxs-error-circle leading-[150%]"></i>
                <p className="text-red-400 text-start mt-0">{errorMessage}</p>
              </div>
            )}

            <Button
              variant="primary"
              className="py-[1rem] w-full font-medium mb-[1.6875rem]"
              isLoading={loginMutation.isPending}
              disabled={loginMutation.isPending}
            >
              Login
            </Button>

            <div className="flex items-center gap-[0.875rem]">
              <input
                type="checkbox"
                className="rounded-sm h-[1.1875rem] w-[1.1875rem] bg-transparent border-slate-500 border-[1px]"
              />

              <p className="text-[0.875rem] text-slate-500 font-medium">
                Keep me signed in
              </p>
            </div>
          </form>

          <div className="w-full flex justify-center absolute -translate-y-[50%] bottom-[3rem]">
            <p className="text-slate-500 font-medium text-[0.875rem]">
              Forgot credentials?{" "}
              <span
                className="text-main-blue hover:underline"
                onClick={() => navigate("/reset-password")}
              >
                Recover Account
              </span>
            </p>
          </div>
        </Wrapper>
      </div>
    </div>
  );
}
