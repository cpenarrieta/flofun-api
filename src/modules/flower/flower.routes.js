import { Router } from 'express'

import * as FlowerController from './flower.controller'
import { requireJwtAuth } from '../auth/requireJwtAuth'

const routes = new Router()

routes.route('/flower')
  .get(requireJwtAuth, FlowerController.getAllFlower)
  .post(requireJwtAuth, FlowerController.createFlower)

export default routes
