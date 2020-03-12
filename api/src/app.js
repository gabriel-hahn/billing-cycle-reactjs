require('dotenv').config({ path: `${__dirname}/.env` });

const express = require('express');
const routes = require('./app/routes');

class AppController {
  constructor() {
    this.express = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.express.use(express.json());
  }

  routes() {
    this.express.use(routes);
  }
}

module.exports = new AppController().express;
