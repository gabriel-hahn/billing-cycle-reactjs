const nodemailer = require('nodemailer');

const EmailTransporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'conmoneymail@gmail.com',
    pass: process.env.EMAIL_PASS,
  },
});

module.exports = EmailTransporter;
