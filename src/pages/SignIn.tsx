import { Button } from "@/components/ui/Button";
import bg_sign from "/bg-signin.png";
import { useNavigate } from "react-router-dom";

export default function SignIn() {
  const navigate = useNavigate();
  return (
    <div
      className="flex-grow bg-cover bg-center bg-no-repeat py-[3.625rem] px-[3rem] flex justify-center"
      style={{ backgroundImage: `url(${bg_sign})` }}
    >
      <p className="text-[4rem] absolute text-white font-bold inline-block top-[38%]">
        Leap.
      </p>
      <Button
        variant="tertiary"
        className="text-main-blue w-[78%] bottom-[3.625rem] absolute font-semibold py-[1rem]"
        onClick={() => navigate("/login")}
      >
        Sign in
      </Button>
    </div>
  );
}
