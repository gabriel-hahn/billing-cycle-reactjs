const EmailTransporter = require('../../config/email');

const mailData = {
  from: 'no-reply.conmoneymail@gmail.com',
  subject: 'ConMoney - Reset Password',
};

class EmailService {
  async sendResetPassword(email, newHash) {
    mailData.to = email;
    mailData.html = `
      <h3>Request password reset</h3>

      <p>Hi! To reset the password of your ConMoney account, please access the following link and set the new password:</p>

      <a href="${process.env.APP_DOMAIN}/reset-password/${newHash}">Create a new password</a>

      <br />

      <small>If you have any problem, please contact conmoneymail@gmail.com. Thanks for using ConMoney</small>
    `;

    await EmailTransporter.sendMail(mailData);
  }
}

module.exports = new EmailService();
