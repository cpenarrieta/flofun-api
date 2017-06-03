import express from 'express'
import './config/env'
import './config/db'
import config from './config/config'
import middlewareConfig from './config/middleware'
import logErrorService from './services/log'
import APIError from './services/error'
import { FlowerRoutes, OrderRoutes, UserRoutes, StoreRoutes } from './modules'

const app = express()

middlewareConfig(app)

app.use('/api', [FlowerRoutes, OrderRoutes, UserRoutes, StoreRoutes])

app.all('*', (req, res, next) => next(new APIError('Not Found!', 400, true)))

app.use(logErrorService)

if (!module.parent) {
  /* eslint-disable no-console */
  app.listen(config.PORT, err => {
    if (err) {
      console.error(err)
    } else {
      console.log(`
        ☄️  🌟
        Server running on port: ${config.PORT}
        Running on ${config.NODE_ENV}
        ☄️  🌟
      `)
    }
  })
}

export default app
