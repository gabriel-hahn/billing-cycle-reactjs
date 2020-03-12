import { UserStateInterface, UserInterface, UserActionInterface } from '../../interfaces/user';

export const Types = {
  GET_LOGIN_REQUEST: '@users/GET_LOGIN_REQUEST',
  GET_LOGIN_SUCCESS: '@users/GET_LOGIN_SUCCESS',
  GET_LOGIN_ERROR: '@users/GET_LOGIN_ERROR',
};

const INITIAL_STATE: UserStateInterface = {
  data: null,
  error: null,
  loading: false,
};

export default function Users(state = INITIAL_STATE, action: UserActionInterface) {
  switch (action.type) {
    case Types.GET_LOGIN_REQUEST:
      return { ...state, loading: true, error: null };
    case Types.GET_LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        data: action.payload.user,
      };
    case Types.GET_LOGIN_ERROR:
      return { ...state, loading: false, error: action.payload.error };
    default:
      return state;
  }
}

export const Creators = {
  getLoginRequest: (user: UserInterface) => ({
    type: Types.GET_LOGIN_REQUEST,
    payload: { user },
  }),
  getLoginSuccess: (user: UserInterface) => ({ type: Types.GET_LOGIN_SUCCESS, payload: { user } }),
  getLoginError: (error: string) => ({ type: Types.GET_LOGIN_ERROR, payload: { error } }),
};
