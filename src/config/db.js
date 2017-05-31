/* eslint-disable no-console */
import mongoose from 'mongoose'
import config from './config'

mongoose.Promise = global.Promise

mongoose.set('debug', config.MONGOOSE_DEBUG)

try {
  mongoose.connect(config.DB_URL)
} catch (err) {
  mongoose.createConnection(config.DB_URL)
}

mongoose.connection
  .once('open', () => console.log('mongoose running'))
  .on('error', err => {
    console.error(err)
    throw err
  })
