import NavigationBar from "@/components/Home/NavigationBar";
import Wrapper from "@/components/ui/Wrapper";
import image from "/defaultImage.png";
import Input from "@/components/ui/Input";
import Dropdown from "@/components/ui/Dropdown";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { Button } from "@/components/ui/Button";
import {
  faculty,
  getFaculty,
  getMajor,
  getRegion,
  major,
  region,
} from "@/assets/lookup-data";
import UseProfileQuery from "@/hook/User/UseProfileQuery";
import UseProfileMutation from "@/hook/User/UseProfileMutation";

export type ProfileFormValues = {
  birth_date: string;
  faculty: string;
  first_name: string;
  last_name: string;
  line_id: string;
  major: string;
  nim: string;
  region: string;
};

export default function Home() {
  const { profileData } = UseProfileQuery();

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<ProfileFormValues>({
    values: {
      birth_date: profileData?.birth_date
        ? new Date(profileData.birth_date).toISOString().split("T")[0]
        : "", // Format: yyyy-MM-dd
      faculty: getFaculty(profileData?.faculty) || "",
      first_name: profileData?.first_name || "",
      last_name: profileData?.last_name || "",
      line_id: profileData?.line_id || "",
      major: getMajor(profileData?.major) || "",
      nim: profileData?.nim || "",
      region: getRegion(profileData?.region) || "",
    },
  });

  const { updateMutation } = UseProfileMutation();

  const onSubmit: SubmitHandler<ProfileFormValues> = (value) => {
    const formattedValue = {
      ...value,
      region: region.indexOf(value.region as (typeof region)[number]) + 1,
      faculty: faculty.indexOf(value.faculty as (typeof faculty)[number]) + 1,
      major: major.indexOf(value.major as (typeof major)[number]) + 1,
    };
    updateMutation.mutate(formattedValue);
  };

  return (
    <Wrapper className="px-[1.5625rem] ">
      <div className="h-[7.4375rem] w-[7.4375rem] top-[5.1875rem] absolute">
        <div className="rounded-full w-full h-full overflow-hidden shadow-md">
          <img
            src={image}
            alt="profile image"
            className="w-full h-full object-cover "
          />
        </div>
        <button className="absolute rounded-full bg-dark-blue h-[2.5rem] w-[2.5rem] bottom-0 right-0">
          <i className="bx bxs-pencil absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-white text-[1.3125rem]"></i>
        </button>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="mt-[5rem] w-full">
        <Input
          {...register("first_name", {
            required: "This field can't be empty",
          })}
          label="First Name"
          type="text"
          placeholder="Your First Name"
          errorMessage={errors.first_name?.message}
          className="mb-[1.125rem]"
        />

        <Input
          {...register("last_name", {
            required: "This field can't be empty",
          })}
          label="Last Name"
          type="text"
          placeholder="Your Last Name"
          errorMessage={errors.last_name?.message}
          className="mb-[1.125rem]"
        />

        <Input
          {...register("birth_date", {
            required: "This field can't be empty",
          })}
          label="Date"
          type="date"
          placeholder="mm/dd/yyyy"
          errorMessage={errors.birth_date?.message}
          className="mb-[1.125rem]"
        />

        <Input
          {...register("nim", {
            required: "This field can't be empty",
            validate: {
              validateNIM: (value) => {
                return (
                  value.length === 10 ||
                  "This field must have exactly 10 characters"
                );
              },
            },
          })}
          label="NIM"
          type="text"
          placeholder="Your NIM"
          errorMessage={errors.nim?.message}
          // value={profileData?.nim}
          className="mb-[1.125rem]"
        />
        <Controller
          control={control}
          name="region"
          render={({ field: { onChange, value } }) => {
            return (
              <Dropdown
                label="Region"
                onChange={onChange}
                placeholder="Your Region"
                data={region}
                value={value}
                className="mb-[1.125rem]"
              />
            );
          }}
        />

        <Controller
          control={control}
          name="faculty"
          render={({ field: { onChange, value } }) => {
            return (
              <Dropdown
                label="Faculty"
                placeholder="Your Faculty"
                data={faculty}
                value={value}
                onChange={onChange}
                className="mb-[1.125rem]"
              />
            );
          }}
        />

        <Controller
          control={control}
          name="major"
          render={({ field: { onChange, value } }) => {
            return (
              <Dropdown
                label="Major"
                placeholder="Your Major"
                data={major}
                value={value}
                onChange={onChange}
                className="mb-[1.125rem]"
              />
            );
          }}
        />

        <Input
          {...register("line_id", {
            required: "This field can't be empty",
          })}
          label="Line ID"
          type="text"
          placeholder="Your Line ID"
          errorMessage={errors.line_id?.message}
          // value={profileData?.line_id}
          className="mb-[1.125rem]"
        />

        <Button
          variant="primary"
          className="w-full mt-10 rounded-md"
          isLoading={updateMutation.isPending}
        >
          Save
        </Button>
      </form>
      <NavigationBar className="fixed w-[87%] bottom-[1.8125rem]" />
    </Wrapper>
  );
}
