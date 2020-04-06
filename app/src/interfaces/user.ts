export interface UserInterface {
  id?: number;
  name?: string;
  email: string;
  password?: string;
  token?: string;
  tempToken?: string | undefined;
}

export interface UserActionInterface {
  type: string,
  payload: {
    user: UserInterface,
    error: string,
  },
}

export interface UserStateInterface {
  data: UserInterface | null;
  error: string | null;
  loading: boolean;
}
