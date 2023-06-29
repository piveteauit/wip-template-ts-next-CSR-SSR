
import data from "../data/integer_memory_store";

class Pages {
    express: any; 
    next: any;

  constructor(express: any, next: any) {
    this.express = express
    this.next = next
  }

  init() {
    this.initCustomPages()
    this.initDefaultPages()
  }

  initCustomPages() {
    /* With a monolith api+frontend, it's possible to serve pages with preloaded data */
    this.express.get('/preload_data', (req: any, res: any) => {
        console.log('Preloading data 2    ---!!!')
      res.pageParams = {
        value: data.value
      }
      return this.next.render(req, res, `/preload_data`)
    })

    /* Special-purpose routing example */
    this.express.get('/large_or_small/:special_value', (req: any, res: any) => {
      const intValue = parseInt(req.params.special_value)
      if(isNaN(intValue)) {
        return this.next.render(req, res, `/invalid_value`, req.query)
      }
      if(intValue < 5) {
        return this.next.render(req, res, `/special_small`, req.query)
      } else {
        return this.next.render(req, res, `/special_large`, req.query)
      }
    })
  }

  initDefaultPages() {
    this.express.get('/', (req: any, res: any) => {
      return this.next.render(req, res, `/main`, req.query)
    })

    this.express.get('*', (req: any, res: any) => {
      return this.next.render(req, res, `${req.path}`, req.query)
    })
  }
}

export default Pages