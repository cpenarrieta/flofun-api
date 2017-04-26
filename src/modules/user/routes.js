import { Router } from 'express'
import * as UserController from './controller'

const routes = new Router()

routes.route('/user')
  .get(UserController.getAllUsers)
  .post(UserController.createUser)

export default routes
