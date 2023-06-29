import dotenv from 'dotenv'
dotenv.config()

import Server from './server'

const begin = async () => {
  
  await new Server(process.env.EXPRESS_PORT).start()
  
  console.log(
    `Server running in --- ${process.env.NODE_ENV} --- on port ${process.env.EXPRESS_PORT}`,
  )
}

begin()
