import MockAdapter from 'axios-mock-adapter';

import api from '../../services/api';
import { runSagaTest } from '../utils/sagas';
import { login, register } from '../../store/sagas/users';
import { Types as UserTypes } from '../../store/ducks/users';
import { UserInterface, UserActionInterface } from '../../interfaces/user';

const apiMock = new MockAdapter(api);

const USER: UserInterface = {
  id: 1,
  name: 'Gabriel Hahn Schaeffer',
  email: 'gabriel_hahn@hotmail.com',
  token: 'token_hash',
  password: '123456',
};

let dispatched;

beforeEach(() => {
  dispatched = [];
});

afterEach(() => {
  apiMock.reset();
});

describe('Users Saga', () => {
  describe('Login', () => {
    it('Should be able to login', async () => {
      const apiResponse = { user: USER, token: 'token_hash' };
      const param: UserActionInterface = {
        type: null,
        payload: { user: USER, error: null },
      };

      apiMock.onPost('/sessions').reply(200, apiResponse);
      await runSagaTest(login, param, dispatched);

      expect(dispatched[0].type).toEqual(UserTypes.LOGIN_SUCCESS);
      expect(dispatched[0].payload.user).toEqual({ ...USER, password: undefined });
    });

    it('Should return a error', async () => {
      const apiResponse = {
        message: 'Invalid credentials',
      };
      const param: UserActionInterface = {
        type: null,
        payload: { user: USER, error: null },
      };

      apiMock.onPost('/sessions').reply(401, apiResponse);
      await runSagaTest(login, param, dispatched);

      expect(dispatched[0].type).toEqual(UserTypes.LOGIN_ERROR);
      expect(dispatched[0].payload.error).toEqual('Invalid credentials');

      expect(dispatched[1].type).toEqual('@ReduxToastr/toastr/ADD');
      expect(dispatched[1].payload.type).toEqual('error');
      expect(dispatched[1].payload.title).toEqual('Sign in failed');
      expect(dispatched[1].payload.message).toEqual('Invalid credentials');
    });
  });

  describe('Register', () => {
    it('Should be able to register', async () => {
      const apiResponse = { user: USER, token: 'token_hash' };
      const param: UserActionInterface = {
        type: null,
        payload: { user: USER, error: null },
      };

      apiMock.onPost('/user').reply(200, apiResponse);
      await runSagaTest(register, param, dispatched);

      expect(dispatched[0].type).toEqual(UserTypes.LOGIN_SUCCESS);
      expect(dispatched[0].payload.user).toEqual({ ...USER, password: undefined });
    });

    it('Should return a network error', async () => {
      const apiResponse = {
        message: 'Something wrong happened, try again in few minutes',
      };
      const param: UserActionInterface = {
        type: null,
        payload: { user: USER, error: null },
      };

      apiMock.onPost('/user').reply(401, apiResponse);
      await runSagaTest(register, param, dispatched);

      expect(dispatched[0].type).toEqual(UserTypes.LOGIN_ERROR);
      expect(dispatched[0].payload.error).toEqual('Error on register');

      expect(dispatched[1].type).toEqual('@ReduxToastr/toastr/ADD');
      expect(dispatched[1].payload.type).toEqual('error');
      expect(dispatched[1].payload.title).toEqual('Register failed');
      expect(dispatched[1].payload.message).toEqual('Something wrong happened, try again in few minutes');
    });
  });
});
