import apiRoutes from "./routes/api"
import pagesRoutes from "./routes/pages"

class ApiRouter {
  express: any
  next: any

  constructor(express: any, next: any) {
    this.express = express
    this.next = next
  }

  async init() {
    this.initApi()
    this.initPages()
    this.initErrors()
    console.log("Api is well initialized !")
  }

  initApi() {
    return new apiRoutes(this.express).init()
  }

  initPages() {
    return new pagesRoutes(this.express, this.next).init()
  }

  initErrors() {
    // catch 404 and forward to error handler
    this.express.use((req: any, res: any, next: any) => {
      const err: any = new Error("Not Found")
      err.status = 404
      next(err)
    })

    this.express.use((err: any, req: any, res: any, next: any) => {
      res.status(err.status || 500)
      res.locals.error = err
      res.locals.errorDescription = err.message
      this.next.render(req, res, "/_error", {})
    })
  }
}

export default ApiRouter
