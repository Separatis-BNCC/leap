import Wrapper from "@/components/ui/Wrapper";
import bg_reset from "/ResetPassword/bg-resetPassword.png";
import bigCloud from "/ResetPassword/big-cloud.png";
import medCloud from "/ResetPassword/medium-cloud.png";
import smallCloud from "/ResetPassword/small-cloud.png";
import rocket from "/ResetPassword/rocket.png";
import Input from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { SubmitHandler, useForm } from "react-hook-form";

type ResetValues = {
  email: string;
};

export default function ResetPassword() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ResetValues>({
    values: {
      email: "",
    },
  });

  const onSubmit: SubmitHandler<ResetValues> = (value) => {
    console.log(value);
  };
  return (
    <div
      className="flex-grow bg-cover h-[1005] w-[100%] bg-center bg-no-repeat flex justify-center flex-col"
      style={{ backgroundImage: `url(${bg_reset})` }}
    >
      <div className="h-[51.5vh] w-full relative">
        <img
          src={smallCloud}
          alt="cloud"
          className="top-[8.6875rem] right-[3.7rem] absolute"
        />
        <img src={medCloud} alt="cloud" className="top-[3.5rem] absolute" />
        <img src={bigCloud} alt="cloud" className="-bottom-7 absolute" />
        <img
          src={rocket}
          alt="cloud"
          className="top-[5.375rem] left-[2.4375rem] absolute scale-[0.8]"
        />
      </div>
      <Wrapper className="flex-grow pt-[2.75rem] px-[2.4375rem] pb-0">
        <p className="text-[2rem] font-semibold text-main-blue mb-[0.4rem]">
          Enter you Email
        </p>
        <p className="font-medium text-base text-slate-500 text-center mb-[2.1875rem]">
          Please enter your email so we can send a verification code
        </p>
        <form
          className="w-full relative h-[11.5625rem]"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Input
            {...register("email", { required: "This field can't be empty" })}
            label=""
            placeholder="example@gmail.com"
            className="w-full"
            errorMessage={errors.email?.message}
          ></Input>

          <Button
            variant="primary"
            className="w-full py-[1rem] absolute bottom-0"
          >
            Send
          </Button>
        </form>
      </Wrapper>
    </div>
  );
}
