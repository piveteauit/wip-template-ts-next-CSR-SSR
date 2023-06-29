import bodyParser from "body-parser"
import path from "path"

class Middleware {
  express: any

  constructor(express: any) {
    this.express = express
  }

  async init() {
    this.express.use(bodyParser.json())
    this.express.use(bodyParser.urlencoded({ extended: false }))
    //    this.express.use(favicon(path.join(__dirname, '..', 'public', 'favicon.png')));

    this.initErrors()
  }

  initErrors() {
    this.express.use(async (err: any, req: any, res: any, next: any) => {
      return next(err)
    })
  }
}

export default Middleware
