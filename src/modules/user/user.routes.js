import { Router } from 'express'
import validate from 'express-validation'

import * as UserController from './user.controller'
import * as AuthController from './auth.controller'
import { requireJwtAuth } from '../auth/requireJwtAuth'

const routes = new Router()

routes
  .route('/user')
  .get(UserController.getAllUsers)
  .post(validate(UserController.validation.createUser), UserController.createUser)

routes.route('/me').post(requireJwtAuth, UserController.me)

routes.route('/auth/facebook').post(AuthController.authFacebook)
routes.route('/auth/google').post(AuthController.authGoogle)
routes.route('/auth/phone').post(AuthController.authPhone)
routes.route('/auth/validateCode').post(AuthController.validateCode)

export default routes
