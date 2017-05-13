import { Router } from 'express'

import * as UserController from './userController'
import * as AuthController from './authController'
import { requireJwtAuth } from '../auth/requireJwtAuth'

const routes = new Router()

routes.route('/user')
  .get(requireJwtAuth, UserController.getAllUsers)
  .post(UserController.createUser)

routes.route('/auth/facebook')
  .post(AuthController.authFacebook)
routes.route('/auth/google')
  .post(AuthController.authGoogle)
routes.route('/auth/phone')
  .post(AuthController.authPhone)

export default routes
