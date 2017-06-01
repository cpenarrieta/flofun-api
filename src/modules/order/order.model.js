import mongoose, { Schema } from 'mongoose'

const OrderSchema = new Schema(
  {
    address: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    flowers: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Flower',
      },
    ],
  },
  { timestamps: true },
)

export default mongoose.model('Order', OrderSchema)
