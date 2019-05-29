const express = require('express')
const nunjucks = require('nunjucks')
const mongoose = require('mongoose')
class App {
  constructor () {
    this.isDev = process.env.NODE_ENV == 'production'
    this.express = express()
    this.nunjucks = nunjucks.configure('./src/views', {
      autoescape: true,
      express: this.express,
      watch: true
    })
    this.database()
    this.middlewares()
    this.routes()
  }
  database () {
    

  }
  middlewares () {
    this.express.set('view engine', 'njk')
  }
  routes () {
    this.express.use(require('./routes'))
  }
}
module.exports = new App().express
