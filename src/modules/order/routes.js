import { Router } from 'express'
import * as OrderController from './controller'

const routes = new Router()

routes.route('/order')
  .get(OrderController.getAllOrders)
  .post(OrderController.createOrder)

export default routes
