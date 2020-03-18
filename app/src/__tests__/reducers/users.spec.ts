import usersReducer, { Creators as UsersActions, Types as UsersTypes } from '../../store/ducks/users';
import { UserInterface, UserActionInterface, UserStateInterface } from '../../interfaces/user';

const INITIAL_STATE: UserStateInterface = {
  data: null,
  error: null,
  loading: false,
};

const USER: UserInterface = {
  id: 1,
  name: 'Gabriel Hahn Schaeffer',
  email: 'gabriel_hahn@hotmail.com',
  password: '123456',
  token: 'token_hash',
};

let action: UserActionInterface;

describe('Users Reducer', () => {
  beforeEach(() => {
   action = {
      type: null,
      payload: {
        user: USER,
        error: null,
      },
    };
  });

  it('Should be able to set a new login request', () => {
    action.type = UsersTypes.LOGIN_REQUEST;
    action.payload.user = null;

    const state = usersReducer(INITIAL_STATE, action);

    expect(state.error).toBeNull();
    expect(state.loading).toBeTruthy();
    expect(state.data).toBeNull();
  });

  it('Should return correct action to request login creator', () => {
    const creator = UsersActions.loginRequest(USER);

    expect(creator.payload.user).toEqual(USER);
    expect(creator.type).toEqual(UsersTypes.LOGIN_REQUEST);
  });

  it('Should be able to set a new login success', () => {
    action.type = UsersTypes.LOGIN_SUCCESS;
    action.payload.user = USER;

    const state = usersReducer(INITIAL_STATE, action);

    expect(state.error).toBeNull();
    expect(state.loading).toBeFalsy();
    expect(state.data).toEqual(USER);
  });

  it('Should return correct action to success login creator', () => {
    const creator = UsersActions.loginSuccess(USER);

    expect(creator.payload.user).toEqual(USER);
    expect(creator.type).toEqual(UsersTypes.LOGIN_SUCCESS);
  });

  it('Should be able to set a new register request', () => {
    action.type = UsersTypes.REGISTER_REQUEST;
    action.payload.user = null;

    const state = usersReducer(INITIAL_STATE, action);

    expect(state.error).toBeNull();
    expect(state.loading).toBeTruthy();
    expect(state.data).toBeNull();
  });

  it('Should return correct action to register creator', () => {
    const creator = UsersActions.registerRequest(USER);

    expect(creator.payload.user).toEqual(USER);
    expect(creator.type).toEqual(UsersTypes.REGISTER_REQUEST);
  });

  it('Should be able to set logout request', () => {
    action.type = UsersTypes.LOGOUT_REQUEST;
    action.payload.user = null;
    INITIAL_STATE.data = USER;

    const state = usersReducer(INITIAL_STATE, action);
    const finalData = { ...USER, token: null };

    expect(state.error).toBeNull();
    expect(state.loading).toBeFalsy();
    expect(state.data).toEqual(finalData);
  });

  it('Should return correct action to logout creator', () => {
    const creator = UsersActions.logoutRequest();

    expect(creator.type).toEqual(UsersTypes.LOGOUT_REQUEST);
  });

  it('Should return correct action to error login creator', () => {
    INITIAL_STATE.data = null;

    action.type = UsersTypes.LOGIN_ERROR;
    action.payload.user = null;
    action.payload.error = 'Error test message login reducer';

    const state = usersReducer(INITIAL_STATE, action);

    expect(state.error).toEqual('Error test message login reducer');
    expect(state.loading).toBeFalsy();
    expect(state.data).toBeNull();
  });

  it('Should return correct action to login error creator', () => {
    const creator = UsersActions.loginError('Error test message');

    expect(creator.type).toEqual(UsersTypes.LOGIN_ERROR);
  });
});
