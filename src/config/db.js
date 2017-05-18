/* eslint-disable no-console */
import mongoose from 'mongoose'
import config from './config'

export default () => {
  mongoose.Promise = global.Promise

  try {
    mongoose.connect(config.DB_URL);
  } catch (err) {
    mongoose.createConnection(config.DB_URL);
  }

  mongoose.set('debug', true)
  mongoose.connection
    .once('open', () => console.log('mongoose running'))
    .on('error', err => console.error(err))
}
