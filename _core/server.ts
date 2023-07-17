import express from "express"
import next from "next"
import ApiRouter from "./apirouter"
import Middleware from "../api/middleware"

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
    this.next = next({ dev: process.env.NODE_ENV !== "production" })
    this.middleware = new Middleware(this.express)
    this.router = new ApiRouter(this.express, this.next)
  }

  async start() {
    await this.next.prepare()
    await this.middleware.init()
    await this.router.init()
    this.server = this.express
    this.server.listen(process.env.EXPRESS_PORT)
  }
}

export default Server
