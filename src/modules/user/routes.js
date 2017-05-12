import { Router } from 'express'

import * as UserController from './controller'
import { requireJwtAuth } from '../auth/requireJwtAuth'

const routes = new Router()

routes.route('/user')
  .get(requireJwtAuth, UserController.getAllUsers)
  .post(UserController.createUser)

export default routes
