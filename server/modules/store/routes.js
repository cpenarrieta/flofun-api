import { Router } from 'express'
import * as StoreController from './controller'

const routes = new Router()

routes.route('/store')
  .get(StoreController.getAllStores)
  .post(StoreController.createStore)

export default routes
