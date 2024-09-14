import { Profile, ServerSuccessResponse } from "@/lib/types";
import { API } from "@/service/API";
import { useQuery } from "@tanstack/react-query";

export default function UseProfileQuery() {
  const profileQuery = useQuery({
    queryFn: () => {
      return API.get<ServerSuccessResponse<Profile>>("/members/profiles");
    },
    queryKey: ["profile"],
  });

  const profileData = profileQuery.data?.data.data.profile;

  return { profileData, profileQuery };
}
