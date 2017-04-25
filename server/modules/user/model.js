import mongoose, { Schema } from 'mongoose'

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  orders: [{
    type: Schema.Types.ObjectId,
    ref: 'Order',
  }],
}, { timestamps: true })

export default mongoose.model('User', UserSchema)
