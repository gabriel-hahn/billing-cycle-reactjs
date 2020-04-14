const nodemailer = require('nodemailer');

const EmailTransporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_DOMAIN,
    pass: process.env.EMAIL_PASS,
  },
});

module.exports = EmailTransporter;
