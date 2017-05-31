import express from 'express'
import './config/db'
import config from './config/config'
import middlewareConfig from './config/middleware'
import {
  FlowerRoutes,
  OrderRoutes,
  UserRoutes,
  StoreRoutes,
} from './modules'

const app = express()

middlewareConfig(app)

app.use('/api', [
  FlowerRoutes,
  OrderRoutes,
  UserRoutes,
  StoreRoutes,
])

if (!module.parent) {
  /* eslint-disable no-console */
  app.listen(config.PORT, err => {
    if (err) {
      console.error(err)
    } else {
      console.log(`
        Server running on port: ${config.PORT}
        Running on ${process.env.NODE_ENV}
        ---
      `)
    }
  })
}

export default app
