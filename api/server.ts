import express from 'express'
import next from 'next'
import ApiRouter from './apirouter'
import Middleware from './middleware'

const httpServer = (express: any) => {
  return require('http').createServer(express)
}

const httpsServer = (express: any) => {
  const fs = require('fs')
  const options = {
    key: fs.readFileSync(process.env.SSL_PRIVATE_KEY_PATH, 'utf8'),
    cert: fs.readFileSync(process.env.SSL_CERTIFICATE_PATH, 'utf8'),
  }
  return require('https').createServer(options, express)
}

class Server {
  port: any
  express: any
  next: any
  middleware: any
  router: any
  server: any

  constructor(port: any) {
    this.port = port
    this.express = express()
    this.next = next({ dev: process.env.NODE_ENV !== 'production' })
    this.middleware = new Middleware(this.express)
    this.router = new ApiRouter(this.express, this.next)
  }

  async start() {
    await this.next.prepare()
    await this.middleware.init()
    await this.router.init()
    this.server = httpServer(this.express)
    this.server.listen(process.env.EXPRESS_PORT)
  }
}

export default Server
