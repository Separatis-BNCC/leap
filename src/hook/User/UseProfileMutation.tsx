import { Profile } from "@/lib/types";
import { API } from "@/service/API";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function UseProfileMutation() {
  const queryClient = useQueryClient();

  const updateMutation = useMutation({
    mutationFn: (data: Partial<Profile["profile"]>) =>
      API.patch(`/members/profiles`, data),
    onSuccess() {
      console.log("Profile updated successfully");
      queryClient.invalidateQueries({ queryKey: ["profile"] });
    },
    onError(error: Error) {
      console.error("Oops! Something went wrong", error);
    },
  });

  return { updateMutation };
}
