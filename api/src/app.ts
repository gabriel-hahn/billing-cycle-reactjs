import express from 'express'

require('dotenv').config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env'
})

class AppController {
  public express: express.Application

  public constructor () {
    this.express = express()

    this.middlewares()
    this.routes()
  }

  public middlewares (): void {
    this.express.use(express.json())
  }

  public routes (): void {
    this.express.use(require('./routes'))
  }
}

export default new AppController().express
