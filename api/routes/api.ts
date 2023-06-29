
import { controllers } from "../controllers"
import data from "../data/integer_memory_store"


class Api {
    express: any
  constructor(express: any) {
    this.express = express
  }

  init() {
    this.express.get("/api/users", controllers.users.getAll);

    this.express.get("/api/get", (req: any, res: any) => {
      res.send({  i: data.value })
    })

    this.express.post("/api/increment", (req: any, res: any) => {
      data.incr()
      res.send({ i: data.value })
    })
  }


}

export default Api