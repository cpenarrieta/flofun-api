import mongoose, { Schema } from 'mongoose'

const FlowerSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  price: {
    type: Number,
    required: true
  },
  image: {
    type: String,
    default: ''
  }
}, { timestamps: true })

export default mongoose.model('Flower', FlowerSchema)
