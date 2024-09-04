import NavigationBar from "@/components/Home/NavigationBar";
import { Button } from "@/components/ui/Button";
import Wrapper from "@/components/ui/Wrapper";

export default function Register() {
  return (
    <Wrapper className="gap-8">
      <div>Register</div>
      <Button variant="primaryDark">
        Upload image
        <i className="bx bx-upload text-white text-base"></i>
      </Button>
      <Button variant="primaryDark">
        Change links
        <i className="bx bx-link text-white text-base"></i>
      </Button>
      <Button variant="primaryDark">Submit Photo</Button>
      <Button variant="tertiary" className="w-[60%]">
        Attendance
      </Button>
      <Button variant="secondary" className="w-[50%]">
        Download
        <i className="bx bx-download text-main-blue text-base"></i>
      </Button>
      <Button variant="primary" className="w-[50%]">
        Submit
        <i className="bx bx-upload text-white text-base"></i>
      </Button>
      <NavigationBar className="absolute w-[87%] bottom-[1.625rem]" />
    </Wrapper>
  );
}
