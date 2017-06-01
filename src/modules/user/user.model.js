import mongoose, { Schema } from 'mongoose'

const UserSchema = new Schema({
  providerId: {
    type: String,
    required: [true, 'providerId is required'],
  },
  provider: {
    type: String,
    required: [true, 'provider is required'],
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
  code: {
    type: Number,
  },
  codeValid: {
    type: Boolean,
  },
  orders: [{
    type: Schema.Types.ObjectId,
    ref: 'Order',
  }],
}, { timestamps: true })

export default mongoose.model('User', UserSchema)
