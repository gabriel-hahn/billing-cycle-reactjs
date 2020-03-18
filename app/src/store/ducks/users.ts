import { UserStateInterface, UserInterface, UserActionInterface } from '../../interfaces/user';

export const Types = {
  REGISTER_REQUEST: '@users/REGISTER_REQUEST',
  LOGIN_REQUEST: '@users/LOGIN_REQUEST',
  LOGIN_SUCCESS: '@users/LOGIN_SUCCESS',
  LOGIN_ERROR: '@users/LOGIN_ERROR',
  LOGOUT_REQUEST: '@users/LOGOUT_REQUEST',
  LOGOUT_SUCCESS: '@users/LOGOUT_SUCCESS',
};

const userDataParser = (): UserInterface | null => {
  const userData = localStorage.getItem('@bc:user');

  return userData ? (JSON.parse(userData) as UserInterface) : null;
};

const INITIAL_STATE: UserStateInterface = {
  data: userDataParser(),
  error: null,
  loading: false,
};

export default function Users(state = INITIAL_STATE, action: UserActionInterface) {
  switch (action.type) {
    case Types.LOGIN_REQUEST:
    case Types.REGISTER_REQUEST:
      return { ...state, loading: true, error: null };
    case Types.LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        data: action.payload.user,
      };
    case Types.LOGIN_ERROR:
      return { ...state, loading: false, error: action.payload.error };
    case Types.LOGOUT_SUCCESS:
      return state.data ? { ...state, data: { ...state.data, token: null } } : state;
    default:
      return state;
  }
}

export const Creators = {
  loginRequest: (user: UserInterface) => ({
    type: Types.LOGIN_REQUEST,
    payload: { user },
  }),
  registerRequest: (user: UserInterface) => ({ type: Types.REGISTER_REQUEST, payload: { user } }),
  loginSuccess: (user: UserInterface) => ({ type: Types.LOGIN_SUCCESS, payload: { user } }),
  loginError: (error: string) => ({ type: Types.LOGIN_ERROR, payload: { error } }),
  logoutRequest: () => ({ type: Types.LOGOUT_REQUEST }),
  logoutSuccess: () => ({ type: Types.LOGOUT_SUCCESS }),
};
