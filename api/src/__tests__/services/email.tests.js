const sinon = require('sinon');

const EmailTransporter = require('../../config/email');
const EmailService = require('../../app/services/EmailService');

describe('Session Service', () => {
  process.env.APP_SECRET = 'my_secret_key';

  beforeEach(() => {
    sinon.restore();
  });

  describe('Email creator errors', () => {
    it('Should send email correctly', async () => {
      sinon.stub(EmailTransporter, 'sendMail').resolves(null);

      await EmailService.sendResetPassword('gabriel_hahn@hotmail.com', 'new_hash');
    });
  });
});
