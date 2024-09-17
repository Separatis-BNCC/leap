import { ServerErrorResponse } from "@/lib/types";
import { API } from "@/service/API";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

type LoginFields = {
  email: string;
  password: string;
};

type Props = {
  onError: (errorMessage: string) => void;
};

export default function useLoginMutation({ onError }: Props) {
  const navigate = useNavigate();

  const loginMutation = useMutation({
    mutationFn: (fields: LoginFields) => {
      return API.post("/login", fields);
    },
    onError: (error) => {
      const serverError = (error as AxiosError).response?.data;
      const errorMessage = (serverError as ServerErrorResponse).msg;
      onError(errorMessage);
    },
    onSuccess: (data) => {
      const { token } = data.data.data;
      Cookies.set("token", token);
      navigate("/home");
    },
  });

  return { loginMutation };
}
