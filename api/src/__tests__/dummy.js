const { Credit, Debt, User } = require('../database/models');

const USER = new User({
  id: 3,
  name: 'Gabriel Hahn Schaeffer',
  email: 'gabriel_hahn@hotmail.com',
  password: '123456',
  password_hash: 'some_hash',
});

const CREDIT = new Credit({
  id: 5,
  user_id: 1,
  description: 'Hamburguer John',
  date: '2020-03-20T08:10:09.000Z',
  value: 19.9,
  quantity: 1,
  repeat: false,
  date_repeat: null,
  createdAt: '2020-03-20T13:38:53.511Z',
  updatedAt: '2020-03-20T13:38:53.511Z',
});

const CREDIT_ARRAY = [
  new Credit({
    id: 5,
    user_id: 1,
    description: 'Hamburguer John',
    date: '2020-03-20T08:10:09.000Z',
    value: 19.9,
    quantity: 1,
    repeat: false,
    date_repeat: null,
    createdAt: '2020-03-20T13:38:53.511Z',
    updatedAt: '2020-03-20T13:38:53.511Z',
  }),
  new Credit({
    id: 2,
    user_id: 2,
    description: 'Academia',
    date: '2020-03-22T10:15:09.000Z',
    value: 85.00,
    quantity: 1,
    repeat: true,
    date_repeat: '2020-03-22T10:15:09.000Z',
    createdAt: '2020-03-20T13:38:53.511Z',
    updatedAt: '2020-03-20T13:38:53.511Z',
  }),
];

const DEBT = new Debt({
  id: 5,
  user_id: 1,
  description: 'Hamburguer John',
  date: '2020-03-20T08:10:09.000Z',
  value: 19.9,
  quantity: 1,
  repeat: false,
  date_repeat: null,
  createdAt: '2020-03-20T13:38:53.511Z',
  updatedAt: '2020-03-20T13:38:53.511Z',
});

const DEBT_ARRAY = [
  new Debt({
    id: 5,
    user_id: 1,
    description: 'Hamburguer John',
    date: '2020-03-20T08:10:09.000Z',
    value: 19.9,
    quantity: 1,
    repeat: false,
    date_repeat: null,
    createdAt: '2020-03-20T13:38:53.511Z',
    updatedAt: '2020-03-20T13:38:53.511Z',
  }),
  new Debt({
    id: 2,
    user_id: 2,
    description: 'Academia',
    date: '2020-03-22T10:15:09.000Z',
    value: 85.00,
    quantity: 1,
    repeat: true,
    date_repeat: '2020-03-22T10:15:09.000Z',
    createdAt: '2020-03-20T13:38:53.511Z',
    updatedAt: '2020-03-20T13:38:53.511Z',
  }),
];

module.exports = {
  USER,
  CREDIT,
  CREDIT_ARRAY,
  DEBT,
  DEBT_ARRAY,
};
