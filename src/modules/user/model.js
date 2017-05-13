import mongoose, { Schema } from 'mongoose'

const UserSchema = new Schema({
  providerId: {
    type: String,
    required: true,
  },
  provider: {
    type: String,
    required: true,
  },
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
  avatar: {
    type: String,
  },
  orders: [{
    type: Schema.Types.ObjectId,
    ref: 'Order',
  }],
}, { timestamps: true })

export default mongoose.model('User', UserSchema)
