import { Router } from 'express'

import * as StoreController from './controller'
import { requireJwtAuth } from '../auth/requireJwtAuth'

const routes = new Router()

routes.route('/store')
  .get(requireJwtAuth, StoreController.getAllStores)
  .post(requireJwtAuth, StoreController.createStore)

export default routes
