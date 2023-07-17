import data from "../data/integer_memory_store"
import { controllers } from "../controllers"
import NotFoundError from "../../shared/errors/NotFoundError"

class Pages {
  express: any
  next: any

  constructor(express: any, next: any) {
    this.express = express
    this.next = next
    this.express.use((req, res, next) => {
      req.isSSR = true
      next()
    })
  }

  init() {
    this.initCustomPages()
    this.initDefaultPages()
  }

  initCustomPages() {
    this.express.get("/users", async (req: any, res: any) => {
      const users = await controllers.users.getAll(req, res)
      console.log("---", users)
      res.pageParams = {
        users,
      }
      return this.next.render(req, res, `/users`)
    })

    /* With a monolith api+frontend, it's possible to serve pages with preloaded data */
    this.express.get("/preload_data", (req: any, res: any) => {
      console.log("vale --", data.value)
      res.pageParams = {
        value: data.value,
      }
      return this.next.render(req, res, `/preload_data`)
    })

    this.express.get("/preload_data/:id", (req: any, res: any) => {
      console.log("vale --", data.value)

      if (Number(req.params.id) > 10) throw new NotFoundError("Preloaded data")

      res.pageParams = {
        value: data.value,
      }

      return this.next.render(req, res, `/preload_data`)
    })

    /* Special-purpose routing example */
    this.express.get("/large_or_small/:special_value", (req: any, res: any) => {
      const intValue = parseInt(req.params.special_value, 10)
      if (isNaN(intValue)) {
        return this.next.render(req, res, `/invalid_value`, req.query)
      }
      if (intValue < 5) {
        return this.next.render(req, res, `/special_small`, req.query)
      } else {
        return this.next.render(req, res, `/special_large`, req.query)
      }
    })
  }

  initDefaultPages() {
    this.express.get("/", (req: any, res: any) => {
      res.pageParams = {
        test: "Main page params",
      }
      return this.next.render(req, res, `/main`, req.query)
    })

    this.express.get("*", (req: any, res: any) => {
      return this.next.render(req, res, `${req.path}`, req.query)
    })
  }
}

export default Pages
