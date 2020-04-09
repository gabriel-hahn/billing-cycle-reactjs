const sinon = require('sinon');

const { User } = require('../../database/models');
const SessionService = require('../../app/services/SessionService');
const EmailService = require('../../app/services/EmailService');
const { USER } = require('../dummy');

describe('Session Service', () => {
  process.env.APP_SECRET = 'my_secret_key';

  beforeEach(() => {
    sinon.restore();
  });

  describe('User create errors', () => {
    it('Should return user already exists error', async () => {
      sinon.stub(User, 'findOne').resolves(USER);
      const response = await SessionService.create(USER);

      expect(response.error).toBeTruthy();
      expect(response.error.status).toBe(409);
      expect(response.error.message).toBe('User already exists');
    });

    it('Should return fill all fields error', async () => {
      const response = await SessionService.create({ name: 'Gabriel' });

      expect(response.error).toBeTruthy();
      expect(response.error.status).toBe(400);
      expect(response.error.message).toBe('You should fill all fields');
    });
  });

  describe('User sessions errors', () => {
    it('Should return invalid credentials error (invalid email)', async () => {
      sinon.stub(User, 'findOne').resolves(null);
      const response = await SessionService.store(USER);

      expect(response.error).toBeTruthy();
      expect(response.error.status).toBe(401);
      expect(response.error.message).toBe('Invalid credentials');
    });

    it('Should return invalid credentials error (invalid password)', async () => {
      sinon.stub(User, 'findOne').resolves(USER);
      sinon.stub(User.prototype, 'checkPassword').resolves(false);
      const response = await SessionService.store(USER);

      expect(response.error).toBeTruthy();
      expect(response.error.status).toBe(401);
      expect(response.error.message).toBe('Invalid credentials');
    });
  });

  describe('User creation', () => {
    it('Should create a token', async () => {
      sinon.stub(User, 'findOne').resolves(null);
      sinon.stub(User, 'create').resolves(USER);

      const response = await SessionService.create(USER);

      expect(response.user).toBeTruthy();
      expect(response.token).toBeTruthy();
    });
  });

  describe('Session creation', () => {
    it('Should create a new session', async () => {
      sinon.stub(User, 'findOne').resolves(USER);
      sinon.stub(User.prototype, 'checkPassword').resolves(true);

      const response = await SessionService.store(USER);

      expect(response.user).toBeTruthy();
      expect(response.token).toBeTruthy();
    });
  });

  describe('Reset password request', () => {
    it('Should return user not found', async () => {
      sinon.stub(User, 'findOne').resolves(null);

      const response = await SessionService.resetPasswordRequest({ email: 'gabriel_hahn@hotmail.com' });

      expect(response.error.status).toEqual(404);
      expect(response.error.message).toEqual('User not found');
    });

    it('Should return success on send e-mail for password reset', async () => {
      USER.save = async () => { };

      sinon.stub(User, 'findOne').resolves(USER);
      sinon.stub(EmailService, 'sendResetPassword').resolves(null);

      const response = await SessionService.resetPasswordRequest({ email: 'gabriel_hahn@hotmail.com' });

      expect(response.status).toEqual(200);
      expect(response.message).toEqual('Please, check your email and set a new password for your account');
    });
  });

  describe('Update user password', () => {
    it('Should return user not found', async () => {
      sinon.stub(User, 'findOne').resolves(null);

      const response = await SessionService.updateUserPassword({ email: 'gabriel_hahn@hotmail.com' });

      expect(response.error.status).toEqual(404);
      expect(response.error.message).toEqual('User not found');
    });

    it('Should return invalid token', async () => {
      sinon.stub(User, 'findOne').resolves(USER);
      sinon.stub(User.prototype, 'checkPassword').resolves(false);

      const response = await SessionService.updateUserPassword({ email: 'gabriel_hahn@hotmail.com', password: '123', tempToken: 'token' });

      expect(response.error.status).toEqual(401);
      expect(response.error.message).toEqual('Invalid reset token. Please, request a new password reset');
    });

    it('Should return success on update users password', async () => {
      USER.save = async () => { };
      USER.generateToken = () => 'token_test';

      sinon.stub(User, 'findOne').resolves(USER);
      sinon.stub(User.prototype, 'checkPassword').resolves(true);

      const response = await SessionService.updateUserPassword({ email: 'gabriel_hahn@hotmail.com', password: '123', tempToken: 'token' });

      expect(response.user).toEqual(USER);
      expect(response.token).toEqual('token_test');
    });
  });
});
