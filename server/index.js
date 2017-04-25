import express from 'express'
import dbConfig from './config/db'
import middlewareConfig from './config/middleware'
import {
  FlowerRoutes,
  OrderRoutes,
  UserRoutes,
  StoreRoutes,
} from './modules'

const app = express()

dbConfig()

middlewareConfig(app)

app.use('/api', [
  FlowerRoutes,
  OrderRoutes,
  UserRoutes,
  StoreRoutes,
])

const PORT = process.env.PORT || 8080

app.listen(PORT, err => {
  if (err) {
    console.error(err)
  } else {
    console.log(`API listen to port: ${PORT}`)
  }
})
