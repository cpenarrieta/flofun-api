import { Router } from 'express'
import * as FlowerController from './controller'

const routes = new Router()

routes.route('/flower')
  .get(FlowerController.getAllFlower)
  .post(FlowerController.createFlower)

export default routes
