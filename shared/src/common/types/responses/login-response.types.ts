import { IUser } from "~/common/interfaces";

type LoginResponse = {
  token: string,
  user: IUser | null
}

export type { LoginResponse };
