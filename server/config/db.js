import mongoose from 'mongoose'

const DB_URL = process.env.DB_URL || 'mongodb://localhost/flofun'

export default () => {
  mongoose.Promise = global.Promise
  mongoose.connect(DB_URL)
  mongoose.connection
    .once('open', () => console.log('mongoose running'))
    .on('error', err => console.error('err'))
}
