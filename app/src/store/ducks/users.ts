import { UserStateInterface, UserInterface, UserActionInterface } from '../../interfaces/user';

export const Types = {
  REGISTER_REQUEST: '@users/REGISTER_REQUEST',
  LOGIN_REQUEST: '@users/LOGIN_REQUEST',
  LOGIN_SUCCESS: '@users/LOGIN_SUCCESS',
  LOGIN_ERROR: '@users/LOGIN_ERROR',
  LOGOUT_REQUEST: '@users/LOGOUT_REQUEST',
};

const INITIAL_STATE: UserStateInterface = {
  data: null,
  error: null,
  loading: false,
};

export default function Users(state = INITIAL_STATE, action: UserActionInterface) {
  switch (action.type) {
    case Types.LOGIN_REQUEST:
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
    case Types.LOGOUT_REQUEST:
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
};
