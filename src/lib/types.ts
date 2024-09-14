export type ServerErrorResponse = {
  msg: string;
  status: number;
};

export type ServerSuccessResponse<Data> = {
  status: number;
  msg: "Success";
  data: Data;
};

export type Profile = {
  email: string;
  profile: {
    birth_date: string;
    faculty: number;
    first_name: string;
    last_name: string;
    line_id: string;
    major: number;
    nim: string;
    region: number;
  };
};
