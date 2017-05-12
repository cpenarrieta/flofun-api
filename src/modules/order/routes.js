import { Router } from 'express'

import * as OrderController from './controller'
import { requireJwtAuth } from '../auth/requireJwtAuth'

const routes = new Router()

routes.route('/order')
  .get(requireJwtAuth, OrderController.getAllOrders)
  .post(requireJwtAuth, OrderController.createOrder)

export default routes
