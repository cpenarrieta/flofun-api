import { Router } from 'express'
import validate from 'express-validation'

import * as FlowerController from './flower.controller'
import { requireJwtAuth } from '../auth/requireJwtAuth'

const routes = new Router()

routes
  .route('/flower')
  .get(
    validate(FlowerController.validation.getAllFlower),
    requireJwtAuth,
    FlowerController.getAllFlower,
  )
  .post(
    validate(FlowerController.validation.createFlower),
    requireJwtAuth,
    FlowerController.createFlower,
  )

export default routes
